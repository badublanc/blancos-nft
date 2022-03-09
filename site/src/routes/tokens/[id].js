export const get = async ({ params }) => {
	return {
		status: 200,
		body: {
			id: params.id
		}
	};
};
