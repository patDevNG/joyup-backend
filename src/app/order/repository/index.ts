import {registry} from 'tsyringe';
import { OrderRepositoryToken } from './interface';
import { MongoOrderRepository } from './mongodb';
import { OrderModel } from '../entities/Orders';

@registry([
    {
        token:OrderRepositoryToken,
        useValue: new MongoOrderRepository(OrderModel),
    }
])
export class OrderRepository{}