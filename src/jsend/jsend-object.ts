import { JSendStatus } from "./jsend-status";

export abstract class JSendObject {

    status: JSendStatus;
    
    message?: string;

    code?: number;
}