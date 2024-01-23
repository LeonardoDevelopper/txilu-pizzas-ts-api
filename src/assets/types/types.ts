import { Model, ModelCtor } from 'sequelize';
import { ResponseMessage, ResponseMessageError } from '../interface/inserts';

export type T_ResponseMessage = ResponseMessage | ResponseMessageError;

export type dbErrorResponse = Promise< { OK: false; messageError: string;}>

export type dbTables = ModelCtor<Model<any, any>>[]

export type dbTable = ModelCtor<Model<any, any>>;

export type res = { OK: boolean; message: string; } | { OK: boolean; messageError: string; };

export type dbDataResponse = Promise< {
    status : true, 
    message : string
    data : any
}>