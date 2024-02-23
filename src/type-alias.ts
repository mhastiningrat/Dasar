 export type ID = string | number;
 
 export type Category = {
    id : ID, //assing union datatype to property of Category type, so id can assign as string or number
    name :string
 }

 export type Product = {
    id : ID,
    name : string,
    price : number,
    category : Category,
    description? : string // '?' mean this field is optional, so if you not fill data into it, will not make program error
 }