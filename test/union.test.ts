describe('union', function(){ 
    it('should be union datatype', function(){
        // using union datatype, make a data can assign data with somekind datatype was defined
        let bio:string | number | boolean = "hastin";
        bio = 10;
        bio = true;

        console.info(bio);
    });

    it('should support any datatype', function() {

        //if using union datatype suggested to chcekin type data 
        function check(data:string | number | boolean){
            if(typeof data === 'string'){
                return data;
            }else if(typeof data === 'number'){
                return data + 1;
            }else{
                return !data;
            }
        } 
        console.info(check('saya'));
        expect(check('saya')).toBe("saya");
        expect(check(1000)).toBe(1001);
        expect(check(true)).toBe(false);
        
    });
});