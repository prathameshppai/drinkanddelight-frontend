export interface RawMaterialOrder {
     orderId : string;
	  name : string;
	 rmId: string;
	  supplierId: string;
	  quantityValue :number;
	  quantityUnit :number;
	  dateOfOrder :Date |'yyyy-MM-dd';
	  dateOfDelivery :Date |'yyyy-MM-dd';
	  pricePerUnit :number;
	  totalPrice : number;
	  deliveryStatus : string; 
      warehouseId : string; 
}