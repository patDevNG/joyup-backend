import { registry } from "tsyringe";
import { MerchantRepositoryToken } from "./interface";
import { MongoMerchantRepository } from "./mongodb";
import { MerchantModel } from "../entities/Merchant";

@registry([
    {
        token:MerchantRepositoryToken,
        useValue: new MongoMerchantRepository(MerchantModel)
    }
])
export class MerchantRepository{}