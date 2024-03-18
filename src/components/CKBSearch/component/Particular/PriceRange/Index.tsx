import { useTranslation } from "@/i18n/client";
import { Input } from "antd";
import classNames from "classnames";
import { useState } from "react";
import "./Index.scss";
import { getLang } from "@/utils/language";

export type PriceRangType = {
  max?: string;
  min?: string;
};

interface Props {
  max?: string;
  min?: string;
  value?: PriceRangType;
  onChange?: (value: PriceRangType) => void;
}

const PriceRange = ({ value, onChange }: Props) => {
  const [data, setData] = useState(value);
  const { t } = useTranslation();

  const compare = (val: string, val2: string, fn: any): string =>
    val && val2 ? fn(...[val, val2].map((v) => Number(v))).toString() : val;

  const format = (val: string, isMax: boolean): void => {
    val = parseFloat(val.replace(/-|e/g, ""))
      .toFixed(2)
      .replace(/\.00$/, "")
      .replace(/(\.\d)0$/, "$1");
    val = val === "NaN" ? "" : val;
    let newData = {};
    if (isMax) {
      newData = {
        ...data,
        max: compare(val, data?.max || "", Math.max),
      };
    } else {
      newData = {
        ...data,
        min: compare(val, data?.min || "", Math.min),
      };
    }
    setData(newData);

    onChange && onChange(newData!);
  };

  return (
    <div className={classNames("rel flex-ter", getLang())}>
      <Input
        className="w-[80px]"
        onChange={(e) => format(e.target.value, true)}
        value={data?.max}
        maxLength={5}
        suffix={<span className="curret">{t("元")}</span>}
      />
      <span className="dash"></span>
      <Input
        className="w-[80px]"
        onChange={(e) => format(e.target.value, false)}
        value={data?.min}
        maxLength={5}
        suffix={<span className="curret">{t("元")}</span>}
      />
    </div>
  );
};

export default PriceRange;
