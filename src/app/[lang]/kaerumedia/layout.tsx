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
  searchParams: { [key: string]: string | string[] | undefined },
}



export async function generateMetadata(
  { params, searchParams }: MateProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {t} =await serveTranslation(params.lang)
  return {
    title:t('青蛙频道')
  }
}