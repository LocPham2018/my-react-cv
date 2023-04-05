import CertItem from "./cert/CertItem";

// Dummy data
const CERTS = [
	{
		name: 'Chứng chỉ lập trình Web - FUNiX',
		desc: 'Chứng chỉ thuộc chương trình CCDN',
		gpa: 8.6,
		img: 'Cert_WEB.jpg',
		alt: 'Web certificate',
	},
	{
		name: 'Chứng chỉ lập trình Javascript - FUNiX',
		desc: 'Chứng chỉ thuộc chương trình CCDN',
		gpa: 7.9,
		img: 'Cert_PRF.jpg',
		alt: 'JS certificate',
	},
	{
		name: 'Chứng chỉ lập trình React - FUNiX',
		desc: 'Chứng chỉ thuộc chương trình CCDN',
		gpa: 8.5,
		img: 'Cert_RJS.jpg',
		alt: 'React certificate',
	},
]

const Certificates = () => {
	return (
		<section id="certificate" className="bg-grey">
			<div className="padding-container container-xl">
				<h1 className="mb-4 h3">Chứng chỉ - Giải thưởng</h1>
				<div className="cert-list">
					<div className="d-grid grid-2-col py-sm-4 cert-row-border-sm-bottom">
						<CertItem cert={CERTS[0]} left />
						<CertItem cert={CERTS[1]} />
					</div>
					<div className="d-grid grid-2-col py-sm-4">
						<CertItem cert={CERTS[2]} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Certificates;
