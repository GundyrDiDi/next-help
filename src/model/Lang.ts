import { atom, useAtom } from 'jotai';
import { Local } from '@/i18n/settings';

const langType = atom<Local>(Local.EN);

 export const getLangType =atom((get)=>get(langType))

export default  langType;
