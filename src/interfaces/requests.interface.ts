import request from "request";

export interface IRequests {
    get(
        url: string, 
        callback: (error: any, response: any, body: any)=>{}
    ): {}
}