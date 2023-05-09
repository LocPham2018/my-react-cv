import ProjectDetail from './ProjectDetail';
import ProjectImg from './ProjectImg';
import ProjectTitle from './ProjectTitle';

const Project = ({ project }) => {
	return (
		<div className="col-sm">
			<ProjectImg img={project.img} imgAlt={project.imgAlt} />
			<ProjectTitle
				name={project.name}
				url={project.url}
				year={project.year}
				customer={project.customer}
				role={project.role}
			/>
			<ProjectDetail
				desc={project.desc}
				detailRole={project.detailRole}
				technology={project.technology}
			/>
		</div>
	);
};

export default Project;
