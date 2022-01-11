import Test from "../data/tests"
import Expect from "../data/expect"
import Request from "../data/request"

Test.doDescribe("Tests Via CEP", () => {
    Test.doScenario("Should validate SP address", () => {
        Request.get("https://viacep.com.br/ws/11310-350/json/", (error, response, body): any => {
            if(error == null){
                let _body = JSON.parse(body)
                Expect.doExpectToEqual(response.statusCode, 200)
                Expect.doExpectToEqual(_body.logradouro, "Rua Campos de Bury")
                Expect.doExpectToEqual(_body.bairro, "Centro")
                Expect.doExpectToEqual(_body.localidade, "São Vicente")
                Expect.doExpectToEqual(_body.uf, "SP")
            }else {
                console.log(error)
            }
            
        })
    })
})