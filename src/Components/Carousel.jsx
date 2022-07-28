import React from 'react';
import CarouselImg from '../img/pexels-creative-house-930001.jpg';
import { motion, AnimatePresence, messages } from 'framer-motion';

const Carousel = () => {
	return (
		<>
			<AnimatePresence>
				<motion.li animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					<img src={CarouselImg} alt="" />
					<img src={CarouselImg} alt="" />
				</motion.li>
			</AnimatePresence>
		</>
	);
};

export default Carousel;
