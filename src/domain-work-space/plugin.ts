import { definePlugin } from "mice-plug";
import { DirectorOrderQuery, DirectorOrderRow, useDirectorOrder } from "./row-data";

export const Plugin = definePlugin<DirectorOrderRow,DirectorOrderQuery>((builder)=>({
  columns:[
    builder.column.tag({formatter:'category'}),
    builder.column.int({formatter:'orderNr'}),
    builder.column.date({formatter:'dateSigned'}),
    builder.column.description({formatter:'employees'}),
    builder.column.date({formatter:'dateBeg'}),
    builder.column.date({formatter:'dateEnd'}),
    builder.column.description({formatter:'comments'}),
  ],
  docFlow:[1113],
  imageIndex: 20,
  label: 'Director Orders',
  source: useDirectorOrder,  

}));