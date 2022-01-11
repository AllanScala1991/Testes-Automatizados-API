export interface ITests {
    doDescribe(title: string, callback: () => void): void
    doScenario(title: string, callback: () => void): void
}