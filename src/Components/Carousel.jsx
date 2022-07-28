import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

const Carousel = ({ data }) => {
	const [width, setWidth] = useState(0);
	const carouselGet = useRef();

	useEffect(() => {
		setWidth(carouselGet.current.scrollWidth - carouselGet.current.offsetWidth);
	}, [data]);

	return (
		<div>
			<motion.div className="cursor-grab overflow-hidden" ref={carouselGet}>
				<motion.div
					className="flex"
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
				>
					{data &&
						data.products.map((ele) => {
							const { id, thumbnail } = ele;
							return (
								<motion.div
									className="min-h-[30rem] min-w-[40rem] p-[40px]"
									key={id}
								>
									<motion.img
										src={thumbnail}
										alt=""
										srcset=""
										className="w-full h-[30rem] border rounded-[2rem] pointer-events-none"
									/>
								</motion.div>
							);
						})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Carousel;
