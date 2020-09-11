import { singleton, inject, injectable } from "tsyringe";
import { MerchantRepositoryToken, IMerchantRepository } from "./repository/interface";


@singleton()
@injectable()
export class MerchantService{
    constructor(
        @inject(MerchantRepositoryToken) private merchantRepository:IMerchantRepository
    ){}

    listMerchantById = async(merchantId:string)=>{
        console.log(merchantId, "jsdnasjdsajdnajsdnsajdnasjdas");
        
        return  this.merchantRepository.getMerchantById(merchantId);
    }
}