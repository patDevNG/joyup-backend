export interface IMerchantRepository{
   getMerchantById:(merchantId:String)=>{}
}

/**
 * Adding Symbols for the interface for DI
 */

 export const MerchantRepositoryToken = Symbol.for('MerchantRepository');