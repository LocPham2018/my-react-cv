import InfoCard from '../../ui/InfoCard';

const Education = () => {
	return (
		<InfoCard title="Học vấn" icon="ic-pencil">
			<ul>
				<li className="mb-2">
					<p className="mb-0">
						<strong> FUNiX </strong>
					</p>
					<p className="mb-0 fst-italic">01/2023 - 04/2023</p>
					<p className="description mb-0">
						Hoàn thành chứng chỉ doanh nghiệp nhánh Fullstack.
					</p>
					<p className="description mb-0">GPA: 8.1 / 10</p>
				</li>
				<li className="mb-2">
					<p className="mb-0">
						<strong>ĐH Khoa học Tự nhiên HN</strong>
					</p>
					<p className="mb-0 fst-italic">06/2012 - 05/2017</p>
					<p className="description mb-0">
						Tốt nghiệp Cử nhân Tài năng Toán học.
					</p>
					<p className="description mb-0">GPA: 2.8 / 4</p>
				</li>
			</ul>
		</InfoCard>
	);
};

export default Education;
