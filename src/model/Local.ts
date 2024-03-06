import { atom, useAtom } from 'jotai';
import { getLang } from '@/i18n/index';
import { Local } from '@/i18n/settings';

const langType = atom<Local>(Local.EN);

export const readLocal = atom((get) => get(langType));

const writeLocal = atom(null, (_, set, update: Local) => {
    set(langType, update);
});


const out={
    langType,
    readLocal,
    writeLocal
};

export default  out;
