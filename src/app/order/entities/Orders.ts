import {prop as Property, getModelForClass, modelOptions, plugin} from '@typegoose/typegoose';
import paginationPlugin, { PaginateModel } from 'typegoose-cursor-pagination';
export enum State{
    NEW,
    IN_PROGRESS,
    COMPLETE 
}

@modelOptions({schemaOptions:{collection:'Orders'}})
@plugin(paginationPlugin)
export class Orders  {


@Property()
merchant_id:string;

@Property()
merchant_location_id:string;

@Property()
location_uid:string;

@Property()
location_id:string;

@Property()
user_id:string;

@Property()
order_id:string;

@Property()
tip:string;

@Property()
total_price:string;

@Property()
price:string;

@Property()
payment_method:string;

@Property()
card_last4:number;

@Property()
card_type:string;

@Property()
state:State;

@Property()
quantity:number;

@Property()
created_at:Date;

@Property()
listItems:any[]

@Property()
description:string;

@Property()
charge_key:string;

@Property()
transaction_id:string

@Property()
discount:string
}

export const OrderModel =getModelForClass(Orders) as PaginateModel<Orders, typeof Orders>


