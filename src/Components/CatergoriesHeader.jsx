import React from 'react';
import { Link } from 'react-router-dom';

const CatergoriesHeader = () => {
	return (
		<div>
			<div className="flex justify-center mx-10 my-10 text-3xl font-medium">
				Choose an catergorie
			</div>
			<nav className="flex justify-around bg-slate-200 px-10 pt-5 pb-5 mb-5 ml-10 mr-10 font-semibold underline underline-offset-4 text-red-600">
				<Link to="products/smartphones">smartphones</Link>
				<Link to="products/groceries">groceries</Link>
				<Link to="products/fragrances">fragrances</Link>
				<Link to="products/skincare">skincare</Link>
				<Link to="products/mens-shirts">mens-shirts</Link>
			</nav>
		</div>
	);
};

export default CatergoriesHeader;
