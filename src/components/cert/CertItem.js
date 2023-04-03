import CertDetail from './CertDetail';
import CertImg from './CertImg';

const CertItem = ({ cert, left }) => {
	let classes = [
		'cert-item',
		'd-flex',
		'flex-column',
		'flex-md-row',
		'py-4',
		'py-sm-0',
		'pe-sm-3',
		'cert-item-border-bottom',
	];
	if (left) {
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
