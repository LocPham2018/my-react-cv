const CertDetail = ({ name, desc, gpa }) => {
	return (
		<div className="cert-detail pt-2 pt-md-0 ps-md-2">
			<p className="cert-title mb-1 text-uppercase">{name}</p>
			<p className="cert-info m-0 text-secondary">{desc}</p>
			<p className="cert-info m-0 text-secondary">GPA: {gpa}</p>
		</div>
	);
};

export default CertDetail;
