import { RequestAdapter } from './../adapters/request';
import { IRequests} from './../interfaces/requests.interface';

class Request implements IRequests{
    constructor(
        private readonly adapter: IRequests = new RequestAdapter()
    ){}

    get(url: string, callback: (error: any, response: any, body: any)=>{}): {} {
        return this.adapter.get(url, callback)
    }
    
}

export default new Request()