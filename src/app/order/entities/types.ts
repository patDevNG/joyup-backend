import { Orders } from "./Orders";

export class OrderResponse {
    status: boolean;
    message:string;
    data:Orders[]|null;
}