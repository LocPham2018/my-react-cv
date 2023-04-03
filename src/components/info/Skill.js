import InfoCard from "../../ui/InfoCard";

const Skill = () => {
	return (
		<InfoCard title="Kỹ năng" icon="ic-tools-2">
			<div className="skill mb-3">
				<p className="m-0">HTML/CSS: Intermediate</p>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block bg-secondary"></span>
			</div>
			<div className="skill mb-3">
				<p className="m-0">Javascript: Intermediate</p>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block bg-secondary"></span>
			</div>
			<div className="skill mb-3">
				<p className="m-0">Bootstrap 5: Fundamental</p>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block me-2 bg-secondary"></span>
				<span className="d-inline-block bg-secondary"></span>
			</div>
			<div className="skill mb-3">
				<p className="m-0">React JS: Fundamental</p>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block me-2 bg-secondary"></span>
				<span className="d-inline-block bg-secondary"></span>
			</div>
			<div className="skill mb-3">
				<p className="m-0">NodeJS: Fundamental</p>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block me-2 bg-secondary"></span>
				<span className="d-inline-block bg-secondary"></span>
			</div>
		</InfoCard>
	);
};

export default Skill;
