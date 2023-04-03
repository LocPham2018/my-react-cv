import Project from './project/Project';

// Dummy data
const PROJECTS = [
	{
		name: 'CV cá nhân',
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
		name: 'Trang web xem tin tức',
		year: 2023,
		customer: 'FUNiX',
		role: 'Developer',
		img: 'project-2.png',
		imgAlt: 'Newsfeed',
		desc: 'Trang Web xem tin tức từ nhiều nguồn khác nhau, người dùng có thể tìm kiếm các tin tức dựa theo các từ khóa.',
		detailRole:
			'- Phát triển code. - Review code. - Tối ưu code. - Xử lý lỗi.',
		technology: 'HTML, CSS, Javascript',
	},
	{
		name: 'Movie streaming',
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
