import React from 'react'
import { Link } from 'react-router-dom'
import './tour-card.css'

const TourCard = ({ tour }) => {
    const { id, title, photo, avgRating } = tour

    return (
			<div
				className="tour__card">
				<div className="card__container">
					<div className="card d-flex align-items-center justify-content-center">
						<div className="imgBx">
							<img
								src={photo}
								alt=""
							/>
						</div>
						<div className="content ">
							{/* <h2>{title}</h2> */}

							<div className="card__top text-center d-flex align-items-center justify-content-between">
								<span className="tour__location d-flex align-items-center gap-1">
									<i class="ri-map-pin-line"></i> {title}
								</span>

								<span className="tour__rating d-flex align-items-center gap-1">
									<i class="ri-star-fill"></i> {avgRating} <span>4</span>
								</span>
							</div>

							<Link to={`/heritage/${id}`}>Explore</Link>
						</div>
					</div>
				</div>
			</div>
		);
}

export default TourCard
