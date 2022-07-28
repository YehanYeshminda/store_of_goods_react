import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Catergories = () => {
	let params = useParams();

	const url = `https://dummyjson.com/products/category/${params.catergoryName}`;

	const { loading, error, data } = useFetch(url);

	if (loading) return 'loading....';
	if (error) return 'something went wrong with request made...';

	console.log(data);
	return (
		<div>
			<div className="grid grid-cols-3 w-[1200px] m-auto mb-10 mt-10 gap-10 max-h-12 max-w-6">
				{data &&
					data.products.map((ele) => {
						const {
							id,
							title,
							description,
							price,
							discountPercentage,
							rating,
							stock,
							brand,
							category,
							thumbnail,
						} = ele;

						return (
							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 1 }}
								key={id}
							>
								<div className="rounded-lg shadow-lg bg-white max-w-sm">
									<Link
										to={`/itemDetails/${id}`}
										data-mdb-ripple="true"
										data-mdb-ripple-color="light"
									>
										<img
											className="rounded-t-lg max-h-[250px] lg:h-[250px] w-full"
											src={thumbnail}
											alt="product"
										/>
									</Link>
									<div className="p-6">
										<h5 className="text-gray-900 text-xl font-medium mb-2">
											{title}
										</h5>
										<p className="text-gray-700 text-base mb-4">
											{description}
										</p>
										<button
											type="button"
											className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										>
											<Link to={`/itemDetails/${id}`}>Button</Link>
										</button>
									</div>
								</div>
							</motion.div>
						);
					})}
			</div>
		</div>
	);
};

export default Catergories;
