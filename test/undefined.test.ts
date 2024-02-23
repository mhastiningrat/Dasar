describe('undefined', () => {
    it('should be support optional on null or undefined data', function(){
        function introduce(name?:string){
            if(name){
                console.info(`My name is ${name}`);
            }else{
                console.info('Hi...')
            }
        }

        introduce('Hastin');
        const name:string|undefined = undefined;
        introduce(name);
        //introduce(null); //error due to null not assigned as datatype it function params
    });

    it('should be support null datatype', function(){
        function pengenalan(nama?:string|null){
            if(nama){
                console.info(`pekenalkan nama saya, ${nama}`);
            }else{
                console.info('g ada namanya ini')
            }
        }

        pengenalan('hastin');
        pengenalan(null);
    });
});