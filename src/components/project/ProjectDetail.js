const ProjectDetail = ({ desc, detailRole, technology }) => {
	return (
		<table>
			<tr>
				<td className="project-desc-label">Mô tả</td>
				<td>{desc}</td>
			</tr>
			<tr>
				<td className="project-desc-label">Nhiệm vụ</td>
				<td>{detailRole}</td>
			</tr>
			<tr>
				<td className="project-desc-label">Công nghệ</td>
				<td>{technology}</td>
			</tr>
		</table>
	);
};

export default ProjectDetail;
