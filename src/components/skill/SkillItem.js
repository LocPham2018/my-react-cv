const SkillItem = ({ children, levelNum }) => {
	return (
		<div className="skill mb-3">
			<p className="m-0">
				{children}
			</p>
			{[1, 2, 3].map(num => {
				let classes = ['d-inline-block', num <= levelNum ? 'bg-primary' : 'bg-secondary'];
				if (num < 3) {
					classes.push('me-2');
				}
				const className = classes.join(' ');
				return <span className={className}></span>
			})}
		</div>
	);
};

export default SkillItem;
