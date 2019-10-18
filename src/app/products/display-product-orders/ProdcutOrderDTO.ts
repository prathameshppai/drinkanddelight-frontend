export interface ProductOrder {
    orderId : string;
    name : string;
    pId: string;
    productId: string;
    quantityValue :number;
    quantityUnit :number;
    dateOfOrder :Date |'yyyy-MM-dd';
    dateOfDelivery :Date |'yyyy-MM-dd';
    pricePerUnit :number;
    totalPrice : number;
    deliveryStatus : string; 
    warehouseId : string; 
}