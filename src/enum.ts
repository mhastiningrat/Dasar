export enum Types {
    /**
     * enum data is a number by default
     * by data siown below, we'll get values like HIGH->0 ,MEDIUM->1 ,LOW->2
     * we can't change the default data by assign new value as we want sown below
     */
    HIGH = 'HIGH', 
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}

export type Task = {
    id:number,
    desc:string,
    assign?:string,
    priority: Types
}