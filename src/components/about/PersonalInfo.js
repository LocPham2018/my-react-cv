import ContactIcon from '../../ui/ContactIcon';

// Dummy data
const ICONS = [
	{
		iconName: 'icon-facebook',
		url: 'https://www.facebook.com/loc.pham.7374',
	},
	{
		iconName: 'icon-github-circled',
		url: 'https://github.com/LocPham2018',
	},
	{
		iconName: 'icon-linkedin',
		url: 'https://www.linkedin.com/in/l%C3%B4%CC%A3c-lab-pham-711154b5/',
	},
];

const PersonalInfo = () => {
	return (
		<div id="personal-info">
			<h1 className="mb-4 h3">Thông tin cá nhân</h1>
			<ul className="mb-3 list-unstyled">
				<li className="mb-2">
					<strong>Giới tính</strong> : Nam
				</li>
				<li className="mb-2">
					<strong>Ngày sinh</strong> : 04/12/1994
				</li>
				<li className="mb-2">
					<strong>Điện thoại</strong> :{' '}
					<a className="text-decoration-none" href="tel:+84965385624">
						(+84) 96-538-****
					</a>
				</li>
				<li className="mb-2">
					<strong>Email</strong> :{' '}
					<a
						className="text-decoration-none"
						href="mailto:locpdcc00800x@funix.edu.vn"
					>
						locpdcc00800x@funix.edu.vn
					</a>
				</li>
				<li className="mb-2">
					<strong>Địa chỉ</strong> : Phường Mỹ An, quận Ngũ Hành Sơn,
					Đà Nẵng
				</li>
				<li className="mb-2">
					<strong>Website</strong> :{' '}
					<a
						className="text-decoration-none"
						href="https://github.com/LocPham2018"
					>
						https://github.com/LocPham2018
					</a>
				</li>
			</ul>
			<div id="contacts">
				{ICONS.map(icon => (
					<ContactIcon key={icon.iconName} {...icon} />
				))}
			</div>
		</div>
	);
};

export default PersonalInfo;
