const serializeOne = ({ _doc: { _id, ...rest } }: any) => {
	return {
		id: _id.toString(),
		...rest,
	};
};

export const serializer = (orders: any) => {
	if (Array.isArray(orders)) {
		return orders.map(serializeOne);
	} else {
		return serializeOne(orders);
	}
};
