import InfoCard from '../../ui/InfoCard';

const Language = () => {
	return (
		<InfoCard title="Ngôn ngữ" icon="ic-mic">
			<div className="skill mb-3">
				<p className="m-0">Tiếng Anh - IELTS 7.0</p>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block me-2 bg-primary"></span>
				<span className="d-inline-block bg-secondary"></span>
			</div>
		</InfoCard>
	);
};

export default Language;
