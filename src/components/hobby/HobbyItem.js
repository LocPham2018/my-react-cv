const HobbyItem = ({ hobby, icon }) => {
	return (
		<div className="hobby-detail d-inline-flex flex-column align-items-center me-1">
			<div className="hobby-icon d-flex justify-content-center align-items-center border border-primary rounded-circle text-primary">
				<i className={icon}></i>
			</div>
			<p className="hobby-name text-center">{hobby}</p>
		</div>
	);
};

export default HobbyItem;
