import InfoCard from "../../ui/InfoCard";
import SkillItem from "../skill/SkillItem";

const Skill = () => {
	return (
		<InfoCard title="Kỹ năng" icon="ic-tools-2">
			<SkillItem levelNum='2'>HTML/CSS: Intermediate</SkillItem>
			<SkillItem levelNum='2'>Javascript: Intermediate</SkillItem>
			<SkillItem levelNum='1'>Bootstrap 5: Fundamental</SkillItem>
			<SkillItem levelNum='1'>React JS: Fundamental</SkillItem>
			<SkillItem levelNum='1'>NodeJS: Fundamental</SkillItem>
		</InfoCard>
	);
};

export default Skill;
