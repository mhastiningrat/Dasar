describe('array', function(){
    it('should be create array', function(){
        const names:String[] = ["hastin","muhammad","ningrat"];
        const values:number[] = [1,2,3];

        console.info(names);
        console.info(values);
    }); 
    
    it("should be create readonly array", function(){

        // to avoiding ,anipulation data inside array
        let hobbies: ReadonlyArray<string> = ["membaca","menulis","merokok","ngopi"];

        //hobbies[0] = "hghg"; //error
        console.info(hobbies);
    });

    it("should be create tuple data", function(){
        //tuple data is array which is defined a numbers of data and datatypes, it's read only
        let list:readonly[string,string,number] = ["umur","saya",32];

        //list[0] = "jshfkjhk" //error
        console.info(list);
    });
});