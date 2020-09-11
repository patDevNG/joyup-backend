const serializeOne = ({ _doc: { _id, ...rest } }: any) => {
	return {
		id: _id.toString(),
		...rest,
	};
};

export const serializer = (merchant: any) => {
	if (Array.isArray(merchant)) {
		return merchant.map(serializeOne);
	} else {
		return serializeOne(merchant);
	}
};
