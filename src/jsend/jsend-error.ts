import { JSendStatus } from "./jsend-status";
import { JSendObject } from "./jsend-object";

export class JSendError extends JSendObject {

    constructor(message: string, code?: number, data?: any){
        super();
        super.status = JSendStatus.error;
        this.data = data;
        this.message = message;
        this.code = code;
    }

    message: string;

    code?: number;

    data?: any;
}