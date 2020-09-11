import { singleton, inject } from "tsyringe";
import { OrderRepositoryToken, IOrderRepository } from "./repository/interface";
import { MerchantService } from "../merchant";
import axios from 'axios';


@singleton()
export class OrderService{
    constructor(
        @inject(OrderRepositoryToken) private orderRepository:IOrderRepository,
        private merchantService:MerchantService
      
    ){}
    
    listOrdersByMerchantIdAndLocationId = async (merchantId:string, locationId:string)=>{
        console.log(locationId, "locationId");
    let returnData:any = []
        try {
            const result:any = await this.orderRepository.getOrder(merchantId,locationId);

            for(const order of result){
                const res:any = await this.merchantService.listMerchantById(merchantId);
                console.log(res.pos_access_token, 'accestoken');
            let header = {
		        Authorization: `Bearer ${res.pos_access_token}`
            }

            let url=`https://connect.squareup.com/v2/locations/${locationId}/orders/${order.order_id}`
            console.log(url);
            let items:any = await axios({
             method:"GET",
             headers:header,
             url:url,
             
         })
           console.log(items.data.order.id,'axxxxxxxxxxxxxxoooooos' );
           

             items.data.order.line_items.forEach(function (item:any) {
                returnData.push({
                    order_id: items.data.order.id,
                    created_at: items.data.order.created_at,
                    amount: items.data.order.total_money.amount,
                    itemDisplayName: item.variation_name ? (item.modifiers ? (item.name + "||" + item.variation_name + "||" + item.modifiers[0].name) : (item.name + "||" + item.variation_name)) : item.name
                })
            })
        
           
            }
            
            

            if(result){
                return {
                    status:true,
                    message:"Order Successfully fetched",
                    data:returnData
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