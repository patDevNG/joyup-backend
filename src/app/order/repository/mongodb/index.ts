import { IOrderRepository } from "../interface";
import { ReturnModelType } from "@typegoose/typegoose";
import { Orders } from "../../entities/Orders";
import { serializer } from "./serializer";

 export class MongoOrderRepository implements IOrderRepository{
    private model:ReturnModelType<typeof Orders>;

    constructor(model:ReturnModelType<typeof Orders>){
        this.model = model;
    }
    async getOrder (merchantId: string = '5ed17f0244a2794e36940fb1'){
        // console.log(merchant_location_id);
        console.log(merchantId);
         const orders = await this.model.find({merchant_id:merchantId}).sort({created_at:-1});
         console.log(orders);
         
         return serializer(orders);
     }

    
}