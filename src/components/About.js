import PersonalInfo from "./about/PersonalInfo";
import Target from "./about/Target";

const About = () => {
	return (
		<section id="about" className="bg-grey">
            <div className="d-grid grid-2-col container-xl p-0">
                <Target />
                <PersonalInfo />
            </div>
        </section>
	);
};

export default About;