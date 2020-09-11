import { IMerchantRepository } from "../interface";
import { ReturnModelType } from "@typegoose/typegoose";
import { Merchant } from "../../entities/Merchant";
import { serializer } from "./serializer";



export class MongoMerchantRepository implements IMerchantRepository{
    private model:ReturnModelType<typeof Merchant>;

    constructor(model:ReturnModelType<typeof Merchant>){
        this.model = model;
    }
   async getMerchantById (merchantId: String) {
       console.log(merchantId,">>>>>>>>>>>>>>");
       
       const merchant = await this.model.findById(merchantId);
       console.log(merchant?.pos_access_token, ">>>>>>>>>>>>POS");
       
       return serializer(merchant);
   };
    
}