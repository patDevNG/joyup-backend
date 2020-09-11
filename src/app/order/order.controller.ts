import { JsonController, Get, QueryParams } from "routing-controllers";
import { injectable } from "tsyringe";
import { OrderService } from "./order.service";



class GetOrderQuery{
    merchantId: string = '5b4672ba986044252e7f14ae'
    locationId:string ='4VGYDM4E2321G'
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