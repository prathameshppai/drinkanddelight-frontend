export class RawMaterialOrder {
	orderId: string = '';
	name: string;
	supplierId: string;
	quantityValue: number;
	quantityUnit: string;
	dateOfOrder: Date | 'yyyy-MM-dd' = null;
	dateOfDelivery: Date | 'yyyy-MM-dd';
	pricePerUnit: number;
	totalPrice: number = 0;
	deliveryStatus: string = '';
	warehouseId: string;

	constructor(name: string, supplierId: string, quantityValue: number, quantityUnit: string, dateOfDelivery: Date, pricePerUnit: number, warehouseId: string) { 
		this.name = name;
		this.supplierId = supplierId;
		this.quantityValue = quantityValue;
		this.quantityUnit = quantityUnit;
		this.dateOfDelivery = dateOfDelivery;
		this.pricePerUnit = pricePerUnit;
		this.warehouseId = warehouseId;
	 }
}