import { JSendStatus } from "./jsend-status";
import { JSendObject } from "./jsend-object";

export class JSendFail extends JSendObject {

    constructor(data: any){
        super();
        super.status = JSendStatus.fail;
        this.data = data;
    }

    data: any;
}