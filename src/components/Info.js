import Education from './info/Education';
import Hobby from './info/Hobby';
import Language from './info/Language';
import Skill from './info/Skill';
import Working from './info/Working';

const Info = () => {
	return (
		<section id="job-info">
			<div className="padding-container container-xl d-grid grid-2-col gap-4">
				<div className="d-grid grid-md-3-col span-2 gap-4">
					<Working />
					<Skill />
					<Language />
				</div>
				<div className="d-grid grid-md-3-col span-2 gap-4">
					<Education />
					<Hobby />
				</div>
			</div>
		</section>
	);
};

export default Info;
