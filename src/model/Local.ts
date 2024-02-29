import { atom, useAtom } from 'jotai';
import { getLang } from '@/i18n/init';

const langType = atom(getLang());

const local = atom((get) => get(langType));

const writeLocal = atom(null, (_, set, update: string) => {
    set(langType, update);
});

const getLocal = () => local as unknown as string;

export default {
    langType,
    getLocal,
    writeLocal
};
