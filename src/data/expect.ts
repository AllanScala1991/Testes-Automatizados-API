import { ChaiAdapter } from './../adapters/chai';
import { IExpect } from './../interfaces/expect.interface';

class Expect implements IExpect{
    constructor(
        private readonly adapter: IExpect = new ChaiAdapter
    ){}

    doExpectToEqual(value: string | number, message: string | number): void {
        this.adapter.doExpectToEqual(value, message)
    }
    
}

export default new Expect()