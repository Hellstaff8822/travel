import { HomeFilter } from "./components/HomeFilter";
import { HomeHeader } from "./components/HomeHeader";
import { HomePlaces } from "./components/HomePlaces";
import { HomeTravel } from "./components/HomeTravel";

export const Home = () => {
	return (
		<div className="home">
			<HomeHeader />
			<HomeFilter />
			<HomePlaces />
			<HomeTravel />
		</div>
	);
};
