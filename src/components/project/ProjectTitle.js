const ProjectTitle = ({ name, year, customer, role }) => {
	return (
		<>
			<div className="border border-secondary px-3 px-sm-2 px-md-3 py-2 text-uppercase fw-bold">
				{name}
			</div>
			<div className="d-flex flex-column flex-sm-row border border-secondary px-3 px-sm-2 px-md-3 py-2">
				<span className="align-self-start me-md-2 px-2 py-1 bg-primary rounded-pill text-light">
					{year}
				</span>
				<div className="d-flex flex-column flex-lg-row">
					<span className="me-md-2 px-2 py-1">
						<i className="icon-user-1"></i>
						{customer}
					</span>
					<span className="me-md-2 px-2 py-1">
						<i className="icon-lamp"></i>
						{role}
					</span>
				</div>
			</div>
		</>
	);
};

export default ProjectTitle;
