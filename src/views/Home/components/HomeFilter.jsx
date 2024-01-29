import { FilterIcon } from "../../../components/Icons/FilterIcon";

export const HomeFilter = () => {
	return (
		<div className="home-filter">
			<div className="home-filter__container">
				<input
					type="search"
					placeholder="Search places"
					className="home-filter__input"
				/>
				<div className="home-filter__icon">
					<FilterIcon />
				</div>
			</div>
		</div>
	);
};
