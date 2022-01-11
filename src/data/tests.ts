import { MochaAdapter } from './../adapters/mocha';
import { ITests } from './../interfaces/tests.interface';

class Tests implements ITests {
    constructor(
        private readonly adapter: ITests = new MochaAdapter()
    ){}

    doDescribe(title: string, callback: () => void): void {
        this.adapter.doDescribe(title, callback)
    }
    doScenario(title: string, callback: () => void): void {
        this.adapter.doScenario(title, callback)
    }
}

export default new Tests()