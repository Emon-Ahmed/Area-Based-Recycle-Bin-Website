import { ordersModel } from "@/models/order-model";

export async function createO(orderData) {
    try{
        const order =  await ordersModel.create(orderData);
        return JSON.parse(JSON.stringify(order));
    } catch(err) {
        throw new Error(err);
    }
}