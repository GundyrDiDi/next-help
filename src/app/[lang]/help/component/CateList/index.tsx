/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:47:37
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 19:56:52
 * @Description:
 */
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import MoCateList from "../MoCateList";

interface CateListProps {
  contentType: "text" | "video" | "search";
  label: string;
  value: string;
  childrenCateList?: CateListProps[];
  className?: string;
}

const FirstCate = (props: CateListProps) => {
  const { t } = useTranslation();

  return (
    <div className="p-[32px] bg-white">
      <div className="flex h-[24px] items-center mb-[32px]">
        <div className="w-[5px] h-[24px] bg-[var(--fcolor)] mr-[8px]"></div>
        <div className="text-[24px]">{t(props.label)}</div>
      </div>
      <div className="flex flex-wrap pb-[-16px]">
        {props.childrenCateList?.map((item, key) => {
          return (
            <SecondCate
              contentType={props.contentType}
              label={item.label}
              value={item.value}
              key={key}
              className="mb-[16px] w-[33%]"
            />
          );
        })}
      </div>
    </div>
  );
};

interface SecondCateProps extends CateListProps {
  className?: string;
}

const JumpHelpDetailLink = (props: {
  contentType: "text" | "video" | "search";
  lang: string;
  value: string;
  children: React.ReactNode;
}) => {
  const { contentType, lang, value, children } = props;
  const getHref = () => {
    if (contentType === "video") {
      return `/${lang}/help/video/${value}`;
    }
    if (contentType === "text") {
      return `/${lang}/help/${value}`;
    }
    if (contentType === "search") {
      return `/${lang}/help/search?keywords=${value}`;
    }
    const other: never = contentType;
    throw Error(other);
  };
  return (
    <Link href={getHref()} className="line-clamp-1 mr-[8px]">
      {children}
    </Link>
  );
};

export const SecondCate = (props: SecondCateProps) => {
  const { lang } = useParams();
  const { className, label, value, contentType } = props;
  return (
    <div className={className}>
      <div className="flex h-[24px] text-[20px] items-center">
        <div className="bg-[var(--fcolor)] w-[6px] h-[6px] rounded-[50%] mr-[6px] shrink-0 " />
        <div className="font-normal text-[20px] hover:text-[var(--fcolor)] text-[#000000]/[.88] cursor-pointer">
          <JumpHelpDetailLink
            contentType={contentType}
            lang={lang as string}
            value={value}
          >
            {label}
          </JumpHelpDetailLink>
        </div>
      </div>
    </div>
  );
};

const CateList = (props: CateListProps) => {
  const { label, childrenCateList } = props;
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <div>
      <div className={`${props.className} mo:hidden`}>
        <FirstCate {...props} />
      </div>
      <MoCateList {...props} />
      <div className="hidden">
        <MoCateList {...props} isShowHTag />
      </div>
    </div>
  );
};

export default CateList;
