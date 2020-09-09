import { JsonController, Get, QueryParams } from "routing-controllers";
import { injectable } from "tsyringe";
import { OrderService } from "./order.service";



class GetOrderQuery{
    merchantId:string;
    locationId:string
}
@injectable()
@JsonController()
export class OrderController{
    constructor(private orderService: OrderService){}

    

    @Get('/orders')
   async handlesGetAllOrders(@QueryParams()query:GetOrderQuery){
       
       console.log(query.locationId);
       
       
        const result = this.orderService.listOrdersByMerchantIdAndLocationId(query.merchantId ,query.locationId);
        
        return result;

    }
}