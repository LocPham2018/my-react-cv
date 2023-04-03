const NavItem = ({ href, iconName, children}) => {
	return (
		<div className="nav-item align-self-md-stretch d-md-flex align-items-md-center px-2 py-3 p-lg-3 nav-border-left">
			<a className="text-decoration-none text-uppercase" href={`#${href}`}>
				{children} <i className={iconName}></i>
			</a>
		</div>
	);
};

export default NavItem;
