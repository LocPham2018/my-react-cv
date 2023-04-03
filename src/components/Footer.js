import FooterIcon from '../ui/FooterIcon';

// Dummy data
const ICONS = [
	{
		name: 'Facebook',
		iconName: 'icon-facebook-circled',
	},
	{
		name: 'Linkedin',
		iconName: 'icon-linkedin-circled',
	},
	{
		name: 'Github',
		iconName: 'icon-github-circled',
	},
];

const Footer = () => {
	return (
		<section id="footer" className="bg-grey">
			<div className="padding-container container-xl d-flex justify-content-center align-items-center">
				{ICONS.map(icon => (
					<FooterIcon key={icon.name} iconName={icon.iconName}>
						{icon.name}
					</FooterIcon>
				))}
			</div>
		</section>
	);
};

export default Footer;
