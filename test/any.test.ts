describe('any', function(){ 
    it('should be any datatype', function(){
        // any datatype is for assing data with dynamic primitive datatypes and ignoring checking
        let objData:any = {
            name:"hastin",
            usia:32,
            menikah:true
        }
        objData.punyaAnak = true

        console.info(objData);
    }); 
});