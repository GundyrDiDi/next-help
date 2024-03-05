import { Local } from "@/i18n/settings";
import "./index.scss";
import { jalist, koList, enList, FooterData } from "./footerData";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
interface Props {
  plat?: string;
  lang: Local;
}

const Footer = ({ plat, lang }: Props) => {
  // 链接列表
  const [aList, setAList] = useState<FooterData[]>();
  const { t, i18n } = useTranslation(lang);
  useEffect(() => {
    if (lang === Local.JA) {
      setAList(jalist);
    } else if (lang === Local.KO) {
      setAList(koList);
    } else {
      setAList(enList);
    }
  }, [lang]);

  return (
    <div className="Footer">
      <div
        className="Footer-main viewport"
        style={{ height: lang === Local.KO ? "112px" : "" }}
      >
        {aList?.map((item, idx) => {
          return (
            <div key={idx} className="column">
              <div className="column-th">
                <a className="hover" href={item.url} target="_blank">
                  {t(item.title)}
                </a>
              </div>
              <div className="column-td">
              {
                item.linkList.map((linkItem,index)=>{
                  return <div key={index} className="column-td-row">
                    <a className="hover" href={linkItem.url}>{t(linkItem.label)}</a>
                  </div>
                })
              }
               </div>
            </div>
          );
        })}
      </div>
      <div className="Footer-bottom">
        <div className="left">
          <div className="left-logo">
            <img referrerPolicy="no-referrer" src={
              lang===Local.JA?
              "https://static-jp.theckb.com/static-asset/client/homelogo.png":
              'https://static-s.theckb.com/BusinessMarket/Client/homelogo.png' }
              alt=""
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;