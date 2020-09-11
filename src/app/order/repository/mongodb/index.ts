import { IOrderRepository } from "../interface";
import { ReturnModelType } from "@typegoose/typegoose";
import { Orders } from "../../entities/Orders";
import { serializer } from "./serializer";

 export class MongoOrderRepository implements IOrderRepository{
    private model:ReturnModelType<typeof Orders>;

    constructor(model:ReturnModelType<typeof Orders>){
        this.model = model;
    }
    
    // 5ed830de44a2794e3694111d
    async getOrder (merchantId: string ){
        console.log(merchantId, ">>>>>>>>>>> merchant");
        
         const orders = await this.model.find({merchant_id:merchantId}).sort({created_at:-1});
         return serializer(orders);
     }

    
}