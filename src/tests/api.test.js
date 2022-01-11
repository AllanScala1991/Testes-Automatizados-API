"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const chai_1 = __importDefault(require("chai"));
const expect = chai_1.default.expect;
describe("Tests Via CEP", () => {
    it("Should validate SP address", () => {
        request_1.default.get({
            url: "https://viacep.com.br/ws/83701300/json/"
        }, (error, response, body) => {
            let _body = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
        });
    });
});
