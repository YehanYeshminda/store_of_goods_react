import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

const ItemDetails = () => {
	let params = useParams();

	const url = `https://dummyjson.com/products/${params.id}`;

	const { loading, error, data } = useFetch(url);

	if (loading) return 'loading....';
	if (error) return 'something went wrong with request made...';

	return (
		<div>
			<div className="w-[1200px] m-auto mb-10 mt-10 gap-10 max-h-12 max-w-6">
				{data && (
					<div class="flex justify-center">
						<div class="rounded-lg shadow-lg bg-white max-w-sm">
							<img
								class="rounded-t-lg max-h-[250px] lg:h-[250px] w-full"
								src={data.thumbnail}
								alt="product"
							/>
							<div class="p-6">
								<h5 class="text-gray-900 text-xl font-medium mb-2">
									{data.title}
								</h5>
								<p class="text-gray-700 text-base mb-4">{data.description}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemDetails;
