import Project from './project/Project';

// Dummy data
const PROJECTS = [
	{
		name: 'CV cá nhân',
		url: 'https://my-react-cv-seven.vercel.app/',
		year: 2023,
		customer: 'FUNiX',
		role: 'Developer',
		img: 'project-1.png',
		imgAlt: 'Personal CV',
		desc: 'Trang Web CV cá nhân online. Gồm các thông tin cá nhân cũng như kỹ năng nghề nghiệp.',
		detailRole:
			'- Phát triển code. - Review code. - Tối ưu code. - Xử lý lỗi.',
		technology: 'HTML, CSS, Bootstrap',
	},
	{
		name: 'Movie streaming',
		url: 'https://ntflix-clone-eadd1b.netlify.app/',
		year: 2023,
		customer: 'FUNiX',
		role: 'Developer',
		img: 'project-3.png',
		imgAlt: 'Movie streaming',
		desc: 'Trang web cho phép xem danh sách phim theo thể loại, có thể tìm kiếm phim theo từ khóa.',
		detailRole:
			'- Phát triển code. - Review code. - Tối ưu code. - Xử lý lỗi.',
		technology: 'React',
	},
	{
		name: 'Trang web bán hàng',
		url: 'https://njs-asm03-client.netlify.app/',
		year: 2023,
		customer: 'FUNiX',
		role: 'Developer',
		img: 'project-4.png',
		imgAlt: 'Trang web bán hàng',
		desc: 'Phát triển giao diện trang web thương mại điện tử gồm các chức năng: xem danh sách và thông tin sản phẩm chi tiết, đặt hàng và xem đơn hàng.',
		detailRole:
			'- Phát triển code. - Review code. - Tối ưu code. - Xử lý lỗi.',
		technology: 'React, NodeJS',
	},
];

const Projects = () => {
	return (
		<section id="project">
			<div className="padding-container container-xl">
				<h1 className="mb-4 h3">Dự án</h1>
				<div className="d-grid grid-3-col gap-xl-5 gap-md-4 gap-sm-3 gap-5 project-list">
					{PROJECTS.map(project => (
						<Project key={project.name} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
