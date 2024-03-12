import { Local } from "@/i18n/settings";
import "./index.scss";
import {
  jaList,
  koList,
  enList,
  FooterData,
  imgLinks,
  jaSite,
  koSite,
  enSite,
} from "./footerData";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { gotoLink } from "@/utils/router";
interface Props {
  plat?: string;
  lang: Local;
}

const Footer = ({ plat, lang }: Props) => {
  // 链接列表
  const [aList, setAList] = useState<FooterData[]>();
  const [logoLink, setLogoLink] = useState<imgLinks>();
  const { t, i18n } = useTranslation(lang);
  useEffect(() => {
    if (lang === Local.JA) {
      setAList(jaList);
      setLogoLink(jaSite);
    } else if (lang === Local.KO) {
      setAList(koList);
      setLogoLink(koSite);
    } else {
      setAList(enList);
      setLogoLink(enSite);
    }
  }, [lang]);

  return (
    <div className="Footer">
      {lang === Local.KO ? (
        <div className="ko-footer">
          <div className="logo">
            <img
              src="https://static-s.theckb.com/BusinessMarket/icon/ckb_logox4.png"
              alt=""
            />
          </div>
          <div className="company-info flex">
            <div className="company-info-content">
              <div className="compayn-info-item">
                <div className="title">회사명</div>
                <div className="text">
                  스니프코리아 주식회사(SNIFF KOREA LIMITED)
                </div>
              </div>
              <div className="compayn-info-item">
                <div className="title">통신판매신고 번호</div>
                <div className="text">제2023-경기김포-2616호</div>
              </div>
            </div>
            <div className="company-info-content">
              <div className="compayn-info-item">
                <div className="title">사업자 등록 번호</div>
                <div className="text">708-81-02912</div>
              </div>
              <div className="compayn-info-item">
                <div className="title">사업장 주소</div>
                <div className="text">
                  경기도 김포시 김포한강9로75번길 190, 7층 715호-브이3
                </div>
              </div>
            </div>
            <div className="company-info-content">
              <div className="compayn-info-item">
                <div className="title">대표자</div>
                <div className="text">WU YEBIAO</div>
              </div>
              <div className="compayn-info-item">
                <div className="title">이메일 주소</div>
                <div className="text">korea@theckb.com</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="Footer-main viewport">
          {aList?.map((item, idx) => {
            return (
              <div key={idx} className="column">
                <div className="column-th">
                  <a className="hover" href={item.url} target="_blank">
                    {t(item.title)}
                  </a>
                </div>
                <div className="column-td">
                  {item.linkList.map((linkItem, index) => {
                    return (
                      <div key={index} className="column-td-row">
                        <a className="hover" href={linkItem.url}>
                          {t(linkItem.label)}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="Footer-bottom">
        <div className="left">
          <div className="left-logo">
            <img
              referrerPolicy="no-referrer"
              src={
                lang === Local.JA
                  ? "https://static-jp.theckb.com/static-asset/client/homelogo.png"
                  : "https://static-s.theckb.com/BusinessMarket/Client/homelogo.png"
              }
              alt=""
            />
          </div>
          <div className="left-social">
            {logoLink?.facebook && (
              <a href={logoLink.facebook} target="_blank">
                <img
                  referrerPolicy="no-referrer"
                  src="https://static-s.theckb.com/BusinessMarket/Client/footer/fb.png"
                  alt="facebook"
                />
              </a>
            )}
            {logoLink?.twitter && (
              <a href={logoLink.twitter} target="_blank">
                <img
                  referrerPolicy="no-referrer"
                  src="https://static-s.theckb.com/BusinessMarket/Client/footer/tw.png"
                  alt="twitter"
                />
              </a>
            )}
            {logoLink?.instagram && (
              <a href={logoLink.instagram} target="_blank">
                <img
                  referrerPolicy="no-referrer"
                  src="https://static-s.theckb.com/BusinessMarket/Client/footer/ins.png"
                  alt="instagram"
                />
              </a>
            )}
            {logoLink?.kakao && (
              <a href={logoLink.kakao} target="_blank">
                <img
                  referrerPolicy="no-referrer"
                  src="https://static-s.theckb.com/BusinessMarket/Client/footer/kakao_footer.png"
                  alt="kakao"
                />
              </a>
            )}
            {logoLink?.line && (
              <a href={logoLink.line} target="_blank">
                <img
                  referrerPolicy="no-referrer"
                  src="https://static-s.theckb.com/BusinessMarket/Client/footer/line_logo@2x.png"
                  alt="line"
                />
              </a>
            )}
            {logoLink?.tiktok && (
              <a href={logoLink.tiktok} target="_blank">
                <img
                  referrerPolicy="no-referrer"
                  src="https://static-s.theckb.com/BusinessMarket/Client/footer/TikTok.svg"
                  alt="tiktok"
                />
              </a>
            )}
            {logoLink?.youtube && (
              <a href={logoLink.youtube} target="_blank">
                <img
                  referrerPolicy="no-referrer"
                  src="https://static-s.theckb.com/BusinessMarket/Client/footer/youtobe.svg"
                  alt="youtube"
                />
              </a>
            )}
          </div>
        </div>
        <div className="right">
          {lang !== Local.KO && (
            <>
              <a
                href={
                  lang === Local.JA
                    ? "https://www.theckb.com/"
                    : "https://www.theckbkorea.com/"
                }
                target="_blank"
              >
                <img
                  referrerPolicy="no-referrer"
                  src="https://static-s.theckb.com/BusinessMarket/Client/footer/home-d2c.png"
                  alt=""
                />
                {t("主站")}
              </a>
              <a href={logoLink?.company} target="_blank">
                {t("会社情報")}
              </a>
            </>
          )}
          {/* TODO:跳转地址合成 */}
          {/* <a href={}>{t("使用条约")}</a>
          <a href={}>{t("隐私权政策")}</a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
