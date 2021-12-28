import { defineEditor } from "mice-plug";
import { EditorSettings } from "mice-plug/lib/types/editor-settings";
import { DirectorOrderRow } from "./row-data";

export const editor = defineEditor<DirectorOrderRow>((builder)=>{
  const x: EditorSettings<DirectorOrderRow> = {
    tree:builder.text(""),
    label: 'Приказ',
  };
  return x;
})