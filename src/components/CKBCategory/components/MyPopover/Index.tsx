import { fastCatesAtom } from "@/components/CKBSearch/component/SellerCate/Index";
import { Popover } from "antd";
import classNames from "classnames";
import { useAtom } from "jotai";
import { ReactSortable } from "react-sortablejs";
import "./Index.scss";
import { useTranslation } from "@/i18n/client";

const MyPopover = () => {
  const [fastCates, setFastCates] = useAtom(fastCatesAtom);
  const { t } = useTranslation();
  // const [state, setState] = useState<ItemType[]>([
  //   { id: 1, name: "shrek" },
  //   { id: 2, name: "fiona" },
  // ]);

  const dragContent = () => (
    <div className="w-[240px]">
      {/* @ts-ignore-next-line */}
      <ReactSortable list={fastCates} setList={setFastCates}>
        {fastCates.map((item) => (
          <div className="list-item" key={item.productCategoryFrontendId}>
            <span className="handle">
              <i className="fa fa-bars"></i>
            </span>
            <div className={classNames("btn flex-bwn flex-1 items-center")}>
              {item.label}
              {item.check ? (
                <i className="fa check-icon fa-check-square"></i>
              ) : (
                <i className="fa check-icon fa-square-o text-[#ccc]"></i>
              )}
            </div>
          </div>
        ))}
      </ReactSortable>
      <div className="text-right btm-tip">{t("最多可选择X个", { X: 8 })}</div>
    </div>
  );

  return (
    <div className="MyPopover">
      <Popover
        title={
          <div className="tip text-ct text-[#606266] px-[5px] w-[240px]">
            {t("请选择你经常使用的类目")}
          </div>
        }
        trigger="click"
        content={dragContent}
        placement="bottomRight"
      >
        <span className="btn pl-[15px]  translate-x-[20px] text-center cursor-pointer">
          <i className="fa fa-bars"></i>
        </span>
      </Popover>
    </div>
  );
};

export default MyPopover;
