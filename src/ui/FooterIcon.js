const FooterIcon = ({ iconName, children }) => {
	return (
		<div className="px-3 py-1">
			<a
				href="#"
				className="d-flex align-items-center text-decoration-none"
			>
				<i className={iconName}></i>
				<span>{children}</span>
			</a>
		</div>
	);
};

export default FooterIcon;
