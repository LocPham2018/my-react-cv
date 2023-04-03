import NavItem from "../ui/NavItem";

const Navbar = () => {
	return (
		<section id="nav-bar">
            <nav
                className="container-xl p-0 d-flex flex-column flex-sm-row justify-content-center align-items-sm-center text-center"
            >
				<NavItem href='about' iconName='icon-user'>Thông tin</NavItem>
				<NavItem href='job-info' iconName='icon-doc-text-inv'>Lý lịch</NavItem>
                <div id="nav-bar-title" className="d-none d-md-block px-5 py-2">
                    <h1 className="m-0 h3">Phạm Đắc Lộc</h1>
                    <span>Full Stack Developer</span>
                </div>
				<NavItem href='certificate' iconName='icon-mail-alt'>Chứng chỉ</NavItem>
				<NavItem href='project' iconName='icon-star-1'>Dự Án</NavItem>
            </nav>
        </section>
	);
};

export default Navbar;