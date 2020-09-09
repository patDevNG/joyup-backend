// import { Orders } from "../entities/Order";

export interface IOrderRepository{
    getOrder:(merchantId:string, merchant_location_id:string)=>{}

}

/**
 * Adding symbol for the interface for DI
 */

 export const OrderRepositoryToken = Symbol.for('OrderRepository');