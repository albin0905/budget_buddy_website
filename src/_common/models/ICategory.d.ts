import {IExpense} from "./IExpense"

export interface ICategory{
    id:number,
    name:string,
    expenses:IExpense[]
}