import { IOrderRepository } from "../interface";
import { ReturnModelType } from "@typegoose/typegoose";
import { Orders } from "../../entities/Orders";
import { serializer } from "./serializer";

 export class MongoOrderRepository implements IOrderRepository{
    private model:ReturnModelType<typeof Orders>;

    constructor(model:ReturnModelType<typeof Orders>){
        this.model = model;
    }
    async getOrder (merchantId: string = 'AYWSX1YB3GVH9', merchant_location_id: string = '7KHHX1RQGJFXK'){
        console.log(merchant_location_id);
        console.log(merchantId);
        
        
         const orders = await this.model.find({merchant_id:merchantId, location_id:merchant_location_id});
        //  const orders = await this.model.paginate({merchant_id:merchantId, location_id:merchant_location_id})
        //  const orders = await this.model.paginate({});
         console.log(orders);
         
         return serializer(orders);
     }

    
}