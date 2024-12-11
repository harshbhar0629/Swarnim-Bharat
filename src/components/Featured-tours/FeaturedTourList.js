/** @format */

import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import tourData from "../../assets/data/tours";

const FeaturedTourList = () => {
	const data = tourData.slice(0, 4);

	return (
		<div style={{ width: "100%" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					gap: "20px",
				}}>
				{data?.map((tour) => (
					<div
						style={{ width: "24%", maxWidth: "250px" }}
						className="mb-4 "
						key={tour._id}>
						<TourCard tour={tour} />
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturedTourList;
