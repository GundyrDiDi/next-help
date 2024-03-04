import { atom, useAtom } from 'jotai';
import { getLang } from '@/i18n/index';

const langType = atom(getLang());

const local = atom((get) => get(langType));

const writeLocal = atom(null, (_, set, update: string) => {
    set(langType, update);
});

const getLocal = () => local as unknown as string;

const out={
    langType,
    getLocal,
    writeLocal
};

export default  out;
