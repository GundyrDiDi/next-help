import { serveTranslation } from "@/i18n";
import { Local } from "@/i18n/settings";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return children;
}

type MateProps = {
  params: { lang: Local };
};

export async function generateMetadata(
  { params }: MateProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { t } = await serveTranslation(params.lang);
  return {
    title: `${
      params.lang === "ja"
        ? "THE CKBー中国輸入代行・THE CKBなら丸投げOK!"
        : "THE CKB"
    }-${t("青蛙频道")}`,
  };
}
