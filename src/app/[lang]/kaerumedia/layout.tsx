import { serveTranslation} from "@/i18n";
import { Local } from "@/i18n/settings";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  children: React.ReactNode;
}

export default function Layout({children}:Props){
  return children
}


type MateProps = {
  params: { lang: Local }
}


export async function generateMetadata(
  { params }: MateProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {t} =await serveTranslation(params.lang)
  return {
    title:t('青蛙频道')
  }
}