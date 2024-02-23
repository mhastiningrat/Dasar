describe('function', function(){ 
    it('should be a function', function(){
        function sayHello(name:string):string{
            return `Hi, ${name}`;
        }
        // function without return using void
        function ucapan(name:string):void{
            console.info(`Semoga success ${name}`);
        }

        console.info(sayHello('Hastin'));
        ucapan('Hastin');
    });

    it('should be function with param using default value', function(){
        function sayHello(name:string = "Bro"):string{
            return `Hi, ${name}`;
        }
        console.info(sayHello());
        expect(sayHello()).toBe('Hi, Bro');
    });

    it('should be support rest parameter', function(){
        function sum(...val:number[]):number{
            let sumResult = 0
            for(let i in val){
                sumResult += val[i]
            }

            return sumResult;
        }

        console.info(sum(1,2,3,4,100));
    });

    it('should be support optional parameter', function(){
        function sayHello(firstname:string, lastname?:string):string{
            if(lastname){
                return `Hi, ${firstname} ${lastname}`;
            }else{
                return `Hi, ${firstname}`;
            }
        }

        expect(sayHello('Hastin')).toBe('Hi, Hastin');
        expect(sayHello('Hastin','Muhammad')).toBe('Hi, Hastin Muhammad');
    });

    it('should be function overloading', function(){

        function hitMe(val:number):number;
        function hitMe(val:string):string;
        function hitMe(val:any):any{
            if(typeof val === 'string'){
                return val;
            }else if(typeof val === 'number'){
                return val;
            }
        }
        
        expect(hitMe(100)).toBe(100);
        expect(hitMe('hastin')).toBe('hastin');
    
        
    });

    it('should be support function as parameter', function(){
        function sayHello(name:string, filter:(name:string)=> string){
            return `Hi. ${filter(name)}`;
        }

        function toUpper(name:string):string{
            return name.toLocaleUpperCase();
        }

        console.info(sayHello('hastin',toUpper));
    });

});