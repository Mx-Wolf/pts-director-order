import { asUrl, DateTimeIso, defineEndpoint } from "mice-plug";

export interface DirectorOrderRow{
  documentId:number;
  category:  'K' ;
  orderNr: number;
  dateSigned: DateTimeIso;
  dateBeg: DateTimeIso;
  dateEnd: DateTimeIso;
  employees: string;
  comments: string;
}

export interface DirectorOrderQuery{
  dateBeg: DateTimeIso;
  dateEnd: DateTimeIso;
}

export const useDirectorOrder = defineEndpoint<DirectorOrderRow, DirectorOrderQuery>({
  adapter:(data)=>data as DirectorOrderRow[],
  keyField: 'documentId',
  url: asUrl('/director-order'),
  parameters: {
    delete:['documentId'],
    get:['dateBeg','dateEnd'],
    post:['category','comments','dateBeg','dateEnd','dateSigned','employees','orderNr'],
    put:['category','comments','dateBeg','dateEnd','dateSigned','documentId','employees','orderNr'],
  } as const
})