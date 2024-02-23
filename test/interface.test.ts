import { CTO, Leader, Manager, Person } from "../src/interface";

describe('interface', function(){
    it('should be create interface', function(){
            const person: Person ={
                id:0,
                name:'Hastin',
                ktp:'123456789',
                npwp:'123adcx123'
            };

            person.address = "pondok cabe";
            //person.npwp = 'test coba ubah read only properties' // error due to npmw ktp are defined as readonly properties

            console.info(person);
    });

    it('should be support function interface', function(){
        interface addFunction {
            (angka1:number, angka2:number):number
        }

        const add : addFunction = (angka1:number, angka2:number): number =>{
            return angka1 + angka2
        }

        console.info(add(3,4))
    });

    it('should be support indexable interface', function(){
        interface stringArray {
            [index:number]:string;
        };

        const daftarNama:stringArray = [
            "muhammad",
            "hastiningrat"
        ];
        daftarNama[2] = "Hastin";
        console.info(daftarNama[0]);
        console.info(daftarNama[1]);
        console.info(daftarNama);
    });

    it('should be support indexable interface non number', function(){
        interface stringArray {
            [kunci:string]:string;
        };

        const dataKaryawan:stringArray = {
            namaDepan :'Joko',
            namaBelakang : 'Subianto'
        }

        console.info(dataKaryawan['namaDepan']);
        console.info(dataKaryawan['namaBelakang']);
    });

    it('should be support extends interface', function(){
        const lead : Leader = {
            id:0,
            nama:'hastin',
            telp:'08215452',
            leaderId:123,
            department:'DEV',
            jumlahAnggota:10
        }

        console.info(lead);

        const manageDev : Manager = {
            id:1,
            nama:'hastin',
            telp:'08215452',
            department:'DEV',
            managerId:1234,
            jumlahAnggotaLeader:5
        }

        console.info(manageDev);

        const cto:CTO={
            id:1,
            nama:'hastin',
            telp:'08215452',
            department:'DEV',
            ctoId:12345,
            jumlahAnggotaManager:2
        }

        console.info(cto);
    });

    it('should be support function interface', function(){
        interface greetingCard {
            name:string,
            callName(name:string):string
        }

        const card:greetingCard ={
            name:'hastin',
            callName:function(name:string):string{
                return `Selamat kepada ${this.name} atas pekerjaan baru nya, semoga makin bahagua`
            }
        }

        console.info(card.callName('Hastin'));
    });

    it('should be support intersection interface', function(){
        interface hasId{
            id:number
        }

        interface hasName{
            name:string
        }
        //intersection type is concatening 2 or more interface to a new type
        type Domain = hasId & hasName

        const domain :Domain ={
            id:1,
            name:'Hastin'
        }

        console.info(domain);
    });
});