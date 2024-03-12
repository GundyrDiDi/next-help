import { useTranslation } from "@/i18n/client";
import { api } from "@/service";
import { FrogArticlePrepAndNextRespDTO } from "@/service/customer";
import { useAsyncEffect, useRequest } from "ahooks";
import { useState } from "react";

interface Props {
  frogArticleId?:number;
  type?:string;
}

const ArticleSwitch=({frogArticleId,type}:Props)=>{

  const [lastNextMsg,setLastNextMsg]=useState<FrogArticlePrepAndNextRespDTO>()
  const {runAsync:articleGetPrepAndNext,loading}=useRequest(api.customer.frog.articleGetPrepAndNext,{manual:true})

  const articleSwitch=()=>{

  }

  useAsyncEffect(async ()=>{
    const res=await articleGetPrepAndNext({frogArticleId,type:type?Number(type):undefined})
    setLastNextMsg(res.data)
  },[])

  return <div className="ArticleSwitch">
    <div onClick={()=>articleSwitch()} className="ArticleSwitch-last">
    {
        lastNextMsg?.prepArticleId??<div className="action-text tstn">

        </div>
    }
    </div>
  </div>

}


export default ArticleSwitch;