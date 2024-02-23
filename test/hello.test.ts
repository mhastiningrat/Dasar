import { said } from "../src/say-hello"

describe ('Hello',function(){
    it("it should  said hello", function(){
        const word = "Hi, Hastin"
        expect(word).toBe("Hi, Hastin")
    })
})

describe('said', function():void{
    it("it should said hi hastin", function():void{
        expect(said('Hastin')).toBe("Hi, Hastin")
    })
})

describe('tipeData', () => { 
    it('tipe data', function(){
        //primitive data type
        let name:string = "Hastin";
        let age:Number = 32;
        let isarried:Boolean = true;

        console.info(name);
        console.info(age);
        console.info(isarried);
    })
 })