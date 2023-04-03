const InfoCard = ({ title, icon, children }) => {
	return (
		<div className="job-info-tile d-grid border border-secondary">
			<div className="d-flex align-items-center">
				<h1 className="h4">{title}</h1>
			</div>
			<div className="tile-icon d-flex justify-content-center align-items-center">
				<i className={icon}></i>
			</div>
			<div className="tile-contents">{children}</div>
		</div>
	);
};

export default InfoCard;
