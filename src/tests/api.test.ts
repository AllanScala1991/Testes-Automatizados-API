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

    Test.doScenario("Should validate RJ address", () => {
        Request.get("https://viacep.com.br/ws/27110-290/json/", (error, response, body): any => {
            if(error == null){
                let _body = JSON.parse(body)
                Expect.doExpectToEqual(response.statusCode, 200)
                Expect.doExpectToEqual(_body.logradouro, "Travessa Joaquim Sampaio")
                Expect.doExpectToEqual(_body.bairro, "Oficinas Velhas")
                Expect.doExpectToEqual(_body.localidade, "Barra do Piraí")
                Expect.doExpectToEqual(_body.uf, "RJ")
            }else {
                console.log(error)
            }
            
        })
    })
})