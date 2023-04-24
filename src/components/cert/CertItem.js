import CertDetail from './CertDetail';
import CertImg from './CertImg';

const CertItem = ({ cert, left, leftInPair }) => {
	let classes = [
		'cert-item',
		'd-flex',
		'flex-column',
		'flex-md-row',
		'py-4',
		'py-sm-0',
		'cert-item-border-bottom',
	];
	if (left) {
		classes.push('pe-sm-3');
	} else {
		classes.push('ps-sm-3');
	}
	if (leftInPair) {
		classes.push('cert-item-border-sm-right');
	}

	const className = classes.join(' ');

	return (
		<div className={className}>
			<CertImg src={cert.img} alt={cert.alt} />
			<CertDetail name={cert.name} desc={cert.desc} gpa={cert.gpa} />
		</div>
	);
};

export default CertItem;
