import { JSendStatus } from "./jsend-status";
import { JSendObject } from "./jsend-object";

export class JSendSuccess extends JSendObject {

    constructor(data: any){
        super();
        super.status = JSendStatus.success;
        this.data = data;
    }

    data: any;
}