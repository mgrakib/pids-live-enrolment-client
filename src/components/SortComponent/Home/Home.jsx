import { FaAngry, FaChartBar, FaKey, FaPollH, FaSearch, FaUserEdit, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return (
		<div className='w-[calc(100%-50px)] h-full bg-[#E2E2E2] p-5'>
			<div>
				<h1 className='text-4xl font-bold'>Home</h1>
			</div>
			<div className='flex flex-col items-end justify-between  h-[calc(100%-40px)]'>
				{/* enrolment section */}
				<div className='py-2 px-6 grid grid-cols-5 gap-6'>
					{/* enrollment  */}
					<div className='text-center'>
						<Link to={"/enrollment"}>
							<div className='action-btn'>
								<FaUserPlus />
							</div>
						</Link>
						<p className='btn-text'>ENROLL</p>
					</div>
					<div className='text-center'>
						<div className='action-btn'>
							{" "}
							<FaUserEdit />{" "}
						</div>
						<p className='btn-text'>UPDATE PROFILE</p>
					</div>
					<div className='text-center'>
						<div className='action-btn'>
							<FaSearch />
						</div>
						<p className='btn-text'>SEARCH</p>
					</div>
					<div className='text-center'>
						<div className='action-btn'>
							<FaChartBar />{" "}
						</div>
						<p className='btn-text'>REPORT</p>
					</div>
					<div className='text-center'>
						<div className='action-btn'>
							<FaPollH />{" "}
						</div>
						<p className='btn-text'>REJECTED PROFILE</p>
					</div>
				</div>

				{/* logout change password  */}
				<div className='py-2 px-6 grid grid-cols-5 gap-6 border-t border-gray-500'>
					{/* logout  */}
					<div className='text-center'>
						<div className='action-btn'>
							<FaAngry />
						</div>
						<p className='btn-text'>LOGOUT</p>
					</div>
					{/* change password  */}
					<div className='text-center'>
						<div className='action-btn'>
							{" "}
							<FaKey />{" "}
						</div>
						<p className='btn-text'>CHANGE PASSWORD</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;