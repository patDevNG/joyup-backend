import { singleton, inject } from "tsyringe";
import { OrderRepositoryToken, IOrderRepository } from "./repository/interface";
// import { OrderResponse } from "./entities/types";

@singleton()
export class OrderService{
    constructor(
        @inject(OrderRepositoryToken) private orderRepository:IOrderRepository
    ){}
    
    listOrdersByMerchantIdAndLocationId = async (merchantId:string, locationId:string)=>{
        try {
            const result = await this.orderRepository.getOrder(merchantId,locationId);
            if(result){
                return {
                    status:true,
                    message:"Order Successfully fetched",
                    data:result
                }
            }
        } catch (error) {
            throw new Error(error)
        }

        return{
            status:false,
            message:"Couldnot fetch Order",
            data:null
        }
    }
}