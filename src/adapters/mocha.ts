import { ITests } from './../interfaces/tests.interface';

export class MochaAdapter implements ITests {

    doDescribe(title: string, callback: () => void): void {
        describe(title, callback)
    }
    doScenario(title: string, callback: () => void): void {
        it(title, callback)
    }
    
}