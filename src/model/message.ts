import { atom, useAtom } from "jotai";


interface MessageProps {
  carNum:number;
}

 const mesageAtom=atom<MessageProps>({carNum:0})

 export default mesageAtom