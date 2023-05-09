import FooterIcon from '../ui/FooterIcon';

// Dummy data
const ICONS = [
	{
		name: 'Facebook',
		iconName: 'icon-facebook-circled',
		url: 'https://www.facebook.com/loc.pham.7374',
	},
	{
		name: 'Linkedin',
		iconName: 'icon-linkedin-circled',
		url: 'https://www.linkedin.com/in/l%C3%B4%CC%A3c-lab-pham-711154b5/',
	},
	{
		name: 'Github',
		iconName: 'icon-github-circled',
		url: 'https://github.com/LocPham2018',
	},
];

const Footer = () => {
	return (
		<section id="footer" className="bg-grey">
			<div className="padding-container container-xl d-flex justify-content-center align-items-center">
				{ICONS.map(icon => (
					<FooterIcon
						key={icon.name}
						iconName={icon.iconName}
						href={icon.url}
					>
						{icon.name}
					</FooterIcon>
				))}
			</div>
		</section>
	);
};

export default Footer;
