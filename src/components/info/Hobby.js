import InfoCard from '../../ui/InfoCard';
import HobbyItem from '../hobby/HobbyItem';

const Hobby = () => {
	return (
		<InfoCard title="Sở thích" icon="ic-telescope">
			<HobbyItem hobby='Âm nhạc' icon='ic-megaphone' />
			<HobbyItem hobby='Chơi game' icon='ic-strategy' />
			<HobbyItem hobby='Du lịch' icon='ic-hotairballoon' />
			<HobbyItem hobby='Đọc sách' icon='ic-book-open' />
		</InfoCard>
	);
};

export default Hobby;
