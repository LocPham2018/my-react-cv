import InfoCard from '../../ui/InfoCard';

const Hobby = () => {
	return (
		<InfoCard title="Sở thích" icon="ic-telescope">
			<div className="hobby-detail d-inline-flex flex-column align-items-center me-1">
				<div className="hobby-icon d-flex justify-content-center align-items-center border border-primary rounded-circle text-primary">
					<i className="ic-megaphone"></i>
				</div>
				<p className="hobby-name text-center">Âm nhạc</p>
			</div>
			<div className="hobby-detail d-inline-flex flex-column align-items-center me-1">
				<div className="hobby-icon d-flex justify-content-center align-items-center border border-primary rounded-circle text-primary">
					<i className="ic-strategy"></i>
				</div>
				<p className="hobby-name text-center">Chơi game</p>
			</div>
			<div className="hobby-detail d-inline-flex flex-column align-items-center me-1">
				<div className="hobby-icon d-flex justify-content-center align-items-center border border-primary rounded-circle text-primary">
					<i className="ic-hotairballoon"></i>
				</div>
				<p className="hobby-name text-center">Du lịch</p>
			</div>
			<div className="hobby-detail d-inline-flex flex-column align-items-center me-1">
				<div className="hobby-icon d-flex justify-content-center align-items-center border border-primary rounded-circle text-primary">
					<i className="ic-book-open"></i>
				</div>
				<p className="hobby-name text-center">Đọc sách</p>
			</div>
		</InfoCard>
	);
};

export default Hobby;
