import { Category, Product } from "../src/type-alias";

describe('alias', function(){
    it('should be succes create alias data', function(){
        const category: Category ={
            id:0,
            name: 'Pewangi'
        }
    
        const product : Product = {
            id:0,
            name: 'kispray',
            price: 2000,
            category : category
        }

        //product.qty = 3; // error due to qty is not member of Product type

        console.info(product);
    });
});