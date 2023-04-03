import ContactIcon from '../../ui/ContactIcon';

// Dummy data
const ICONS = ['icon-twitter', 'icon-facebook', 'icon-gplus', 'icon-linkedin'];

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
					<strong>Điện thoại</strong> : (+84) 96538xxxx
				</li>
				<li className="mb-2">
					<strong>Email</strong> : locpdcc00800x@funix.edu.vn
				</li>
				<li className="mb-2">
					<strong>Địa chỉ</strong> : Phường Mỹ An, quận Ngũ Hành Sơn,
					Đà Nẵng
				</li>
				<li className="mb-2">
					<strong>Website</strong> : https://github.com/LocPham2018
				</li>
			</ul>
			<div id="contacts">
				{ICONS.map(iconName => (
					<ContactIcon key={iconName} iconName={iconName} />
				))}
			</div>
		</div>
	);
};

export default PersonalInfo;
