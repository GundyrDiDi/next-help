import { TableOfContentsEntry } from "@lexical/react/LexicalTableOfContents"
import { LexicalEditor } from "lexical";

export const {setContentData, _writeSetContentDataFunction} = (() => {
    let _setContentData: React.Dispatch<React.SetStateAction<TableOfContentsEntry[] | undefined>> | undefined = undefined;
    return {
        _writeSetContentDataFunction: (param: typeof _setContentData) => {
            if(_setContentData) return;
            _setContentData = param;
        },
        setContentData: (data: any) => {
            _setContentData?.(data)
        },
    }
})();

export const {setEditor, _writeSetEditorFunction} = (() => {
    let editor: LexicalEditor | undefined = undefined;
    let _setEditor:  React.Dispatch<React.SetStateAction<LexicalEditor | undefined>> | undefined = undefined;
    return {
        _writeSetEditorFunction: (param: typeof _setEditor) => {
            if(_setEditor) return;
            _setEditor = param;
            if(editor){
                _setEditor?.(editor);
                editor = undefined;
            }
        },
        setEditor: (_editor: any) => {
            _setEditor?.(_editor)
        },
    }
})();



// const setEditor: React.Dispatch<React.SetStateAction<LexicalEditor | undefined>>
