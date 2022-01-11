import request from "request"

import { IRequests} from './../interfaces/requests.interface';

export class RequestAdapter implements IRequests{
    get(url: string, callback:  (error: any, response: any, body: any)=>{}){
        return request.get({
            url: url
        }, callback)
    }
    
}