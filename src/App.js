import Items from './Components/Items';
import Navbar from './Components/Navbar';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetails from './routes/ItemDetails';
import NoMatch from './routes/NoMatch';
import CatergoriesHeader from './Components/CatergoriesHeader';
import Catergories from './routes/Catergories';
import SearchBar from './Components/SearchBar';
import SearchProducts from './routes/SearchProducts';
import CarouselBar from './Components/Carousel';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<CatergoriesHeader />
				<SearchBar />
				<Routes>
					<Route path="/" element={<Items />} />
					<Route path="/itemDetails/:id" element={<ItemDetails />} />
					<Route path="/products/:catergoryName" element={<Catergories />} />
					<Route path="/searched/:searchName" element={<SearchProducts />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
