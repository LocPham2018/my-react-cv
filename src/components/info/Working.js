import InfoCard from '../../ui/InfoCard';

const Working = () => {
	return (
		<InfoCard title="Kinh nghiệm" icon="ic-toolbox">
			<ul>
				<li className="mb-2">
					<p className="mb-0">
						<strong>
							Document Control - Công ty CP Xây dựng & Công nghiệp
							NSN
						</strong>
					</p>
					<p className="mb-0 fst-italic">01/2021 - 09/2022</p>
					<p className="description mb-0">Kiểm soát hồ sơ.</p>
					<p className="description mb-0">
						Quản lý dữ liệu liên quan đến dự án.
					</p>
					<p className="description mb-0">
						Hiểu rõ về quy trình vận hành dự án.
					</p>
				</li>
				<li className="mb-2">
					<p className="mb-0">
						<strong>Internship - NCC Software</strong>
					</p>
					<p className="mb-0 fst-italic">01/2020 - 04/2020</p>
					<p className="description mb-0">
						Tham gia phát triển hệ thống chấm công nhận diện gương
						mặt.
					</p>
					<p className="description mb-0">
						Sử dụng ngôn ngữ Python để phát triển module học máy dựa
						trên ảnh chấm công nhận vào hệ thống.
					</p>
				</li>
			</ul>
		</InfoCard>
	);
};

export default Working;
