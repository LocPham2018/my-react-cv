const ProjectImg = ({ img, imgAlt }) => {
	return (
		<div>
			<img className="w-100" src={`./images/${img}`} alt={imgAlt} />
		</div>
	);
};

export default ProjectImg;
