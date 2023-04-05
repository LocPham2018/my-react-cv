const CertImg = ({ src, alt }) => {
	return (
		<div className="cert-img">
			<img className="w-100" src={`./images/${src}`} alt={alt} />
		</div>
	);
};

export default CertImg;
