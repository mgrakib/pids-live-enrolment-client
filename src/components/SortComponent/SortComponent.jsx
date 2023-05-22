
import { Outlet } from 'react-router-dom';
import { FaCreativeCommonsSa, FaLaptop, FaRegWindowClose, FaUserAlt } from "react-icons/fa";

const SortComponent = () => {
    return (
		<div className='border border-black'>
			<div className='short-container'>
				<Outlet />
				<div className='h-full w-[50px] bg-[#0B2447] ml-auto relative'>
					<div className='text-white flex items-center justify-center  p-3 text-[20px]'>
						<FaRegWindowClose className='cursor-pointer' />
					</div>

					<div className='text-white absolute bottom-24 left-1/2 -translate-x-1/2 -rotate-90  text-3xl'>
						<span className='font-bold'>Live</span>Enrollment
					</div>
				</div>
			</div>
			<div className='w-full p-2  flex items-center text-[14px]'>
				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-2'>
						<FaLaptop />
						Online
					</div>
					<div className='flex items-center gap-2 border-l border-gray-500 pl-2'>
						<FaUserAlt />
						Online
					</div>
				</div>
				<div className='flex items-center gap-2 ml-auto border-l border-gray-500 pl-2'>
					<FaCreativeCommonsSa />
					Version 01.00.00
				</div>
			</div>
		</div>
	);
};

export default SortComponent;