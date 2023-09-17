import path from 'path';
import fs from 'fs/promises';

const ProductDetailPage = (props) => {
	const { loadedProduct } = props;

	// if (!loadedProduct) {
	// 	return <p>Loading...</p>;
	// }

	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	);
};

export const getStaticProps = async (context) => {
	const { params } = context;

	const productId = params.pid;

	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	const product = data.products.find((product) => product.id === productId);

	if (!product) {
		return { notFound: true };
	}
	return {
		props: {
			loadedProduct: product,
		},
	};
};

export const getStaticPaths = async () => {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	const ids = data.products.map((product) => product.id);

	const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

	return {
		// paths: [
		// 	{ params: { pid: 'p1' } },
		// 	// { params: { pid: 'p2' } },
		// 	// { params: { pid: 'p3' } },
		// ],
		paths: pathsWithParams,
		fallback: true, // when we have a lot of products
		fallback: false,
		// fallback: 'blocking',   // when we should wait for all data
	};
};

export default ProductDetailPage;
