export const get = async ({ params }) => {
	let metadata = {
		name: '#' + params.id,
		description: 'Boundless Blancos. Mint + reveal coming soon.',
		image: 'https://assets.blancos-cdn.com/boundless/404sq.png'
	};

	return {
		status: 200,
		body: metadata
	};
};
