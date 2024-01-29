import { useState } from "react";

export const HomePlaces = () => {
	const [tab, setTab] = useState(1);
	return (
		<div className="home-places">
			<div className="home-places__header">
				<div className="home-places__title">Popular places</div>
				<div className="home-places__view-all">View all</div>
			</div>
			<div className="home-places__list">
				<div
					onClick={() => setTab(1)}
					className={`home-places__item ${
						tab === 1 ? "is-active" : ""
					}`}
				>
					Most Viewed
				</div>
				<div
					onClick={() => setTab(2)}
					className={`home-places__item ${
						tab === 2 ? "is-active" : ""
					}`}
				>
					Nearby
				</div>
				<div
					onClick={() => setTab(3)}
					className={`home-places__item ${
						tab === 3 ? "is-active" : ""
					}`}
				>
					Latest
				</div>
			</div>
		</div>
	);
};
