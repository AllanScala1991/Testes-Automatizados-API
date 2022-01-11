import { IExpect } from './../interfaces/expect.interface';
import chai from "chai"

export class ChaiAdapter implements IExpect {
    constructor(private expect: Chai.ExpectStatic = chai.expect){}

    doExpectToEqual(value: string | number, message: string | number): void {
        this.expect(value).to.equal(message)
    }
    
}