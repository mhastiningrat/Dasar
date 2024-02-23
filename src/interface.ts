export interface Person {
    id:number;
    name:string;
    address?:string;
    readonly ktp:string;
    readonly npwp:string;
}

//extendable interface
/**
 * create interface by existing interface which is both of interface has similar property
 */

export interface Karyawan {
    id:number,
    nama:string,
    email?:string,
    telp:string,
    department:string
}

export interface Leader extends Karyawan {
    leaderId:number,
    jumlahAnggota: number
}

export interface Manager extends Karyawan {
    managerId:number,
    jumlahAnggotaLeader: number
}

export interface CTO extends Karyawan {
    ctoId:number,
    jumlahAnggotaManager: number
}