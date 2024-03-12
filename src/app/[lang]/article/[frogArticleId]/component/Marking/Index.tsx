import { useTranslation } from "@/i18n/client"
import "./index.scss"
import { useAtom } from "jotai"
import { Lang } from "@/model"
import { isKO } from "@/utils/language"
import { isLogin } from "@/utils"
import { Button } from "antd"

const Marking=()=>{
  const {t}=useTranslation()
  const lang=useAtom(Lang)
  const hasLogin=isLogin()

  const vipLoginClick=()=>{
    // TODO: VipLevel
  }

  // TODO:登录
  const loginClick=()=>{}
  const registClick=()=>{}

  return <div className="marking">
    <div className="marking-top" style={{bottom:isKO()?'372px':'480px'}}></div>
    <div className="marking-bot" style={{bottom:isKO()?'172px':'280px'}}>
      <div className="marking-content">
        {hasLogin?<>
        <p>{t('加入CKB 会员计划以查看更多信息')}</p>
          <div onClick={vipLoginClick} className="join">{t('会员登录')}</div>
        </>:<>
        <p>{ t('注册或登录以查看更多信息') }</p>
        <div style={{display:'flex'}}>
          <Button onClick={loginClick}>{ t('登录') }</Button>
        </div>
        <a className="ml-30" onClick={registClick}>
          <Button className="signBtn btn">{ t('注册')}</Button>
        </a>
        </>
        }
      </div>
    </div>
  </div>
}

export default Marking