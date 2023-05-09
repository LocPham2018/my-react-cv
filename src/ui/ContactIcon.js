const ContactIcon = ({ iconName, url }) => {
	return (
		<a className="text-decoration-none" href={url}>
			<i className={iconName}></i>
		</a>
	);
};

export default ContactIcon;
