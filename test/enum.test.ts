import { Task, Types } from "../src/enum";

describe('enum', function(){
    it('should be create object using enum data', function(){
        const newTask :Task={
            id:0,
            desc:"create kanban protoype for pilotproject",
            priority: Types.HIGH
        }

        console.info(newTask);
    });
});