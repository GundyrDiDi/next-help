import classNames from "classnames";
import "./Index.scss"
import { isJA, lang } from "@/utils/language";
import { Form, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useTranslation } from "@/i18n/client";
interface Props {
  keyword?:string;
  handleSearch:()=>void;
  handleJump:()=>void;
}
const Particular=({keyword}:Props)=>{
  const {t}=useTranslation()

  const menu1Items = [
    { label: t("采购来源"), key: "" },
    { label: isJA() ? t("1688国家货盘") : t("1688严选"), key: "AM" },
    { label: t("淘宝"), key: "TB" },
    { label: "Tmall", key: "TM" },
  ];
  
  return <div className={classNames('content',lang)}>
    <Form>
      <FormItem label={t('搜索范围')}>
          <Select   class="plat"/>
      </FormItem>
    </Form>
  </div>
}


export default Particular;