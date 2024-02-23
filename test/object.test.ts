describe('object', function(){
    it('should be support object datatype', () => {
        const bio:{id:number, name:string} = {
            id:1,
            name:"hastin"
        }

        //bio.address = 'pondok cabe'; //error due to addrees is not declared first on bio object

        console.info(bio);
    });
});