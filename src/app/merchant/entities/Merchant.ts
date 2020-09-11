import {prop as Property, modelOptions, getModelForClass} from '@typegoose/typegoose';

@modelOptions({schemaOptions:{collection: 'Merchants'}})
export class Merchant{
    @Property()
    name:string;

    @Property()
    contact_first_name:string;

    @Property()
    contact_last_name:string;

    @Property()
    email:string;

    @Property()
    password:string;

    @Property()
    contact_phone_number:string;

    @Property()
    onboarding_status:string;

    @Property()
    device:any[];

    @Property()
    created_at:Date

    @Property()
    pos_access_token:string


    @Property()
    facebook_page_ids:string;

    @Property()
    locations_id:any[]

    @Property()
    master_password:string;

    @Property()
    account_capabilities:any[]

    @Property()
    facebook_page_id:string

    @Property()
    is_agency:boolean
}

export const MerchantModel = getModelForClass(Merchant);