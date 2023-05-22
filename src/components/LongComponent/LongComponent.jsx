import React from 'react';
import { useContext } from 'react';
import { FaRegWindowClose, FaUserCheck } from 'react-icons/fa';
import { AuthContextAPI } from '../../AuthProvder/AuthProvder';

const LongComponent = () => {
    const { enrollmentType } = useContext(AuthContextAPI)
    console.log(enrollmentType);
    return (
		<div
			className='p-3 border
         border-r-gray-500 w-full h-[100vh] bg-[#E2E2E2]'
		>
			<div className='flex items-center justify-between'>
				<div className='py-2 px-5 bg-gray-950 text-white flex items-center gap-4 rounded-md'>
					<FaUserCheck className='text-xl' />
					<h1 className='text-2xl'>Enrollment</h1>
				</div>
				<div>
					<FaRegWindowClose className='cursor-pointer' />
				</div>
			</div>

			<div className='my-2 flex items-center gap-10'>
				<div>
					PRISONER ID{" "}
					<span className='font-bold text-xl'>
						UTP:{enrollmentType.inmatId}
					</span>
				</div>
				<div>
					PROFILE STATE{" "}
					<span className='font-bold text-xl'>Active</span>
				</div>
				<div>
					PRISONER STATE{" "}
					<span className='font-bold text-xl'>
						In Prison Under Trial
					</span>
				</div>
			</div>

			<div className='grid md:grid-cols-9 gap-3 border-b border-gray-500'>
				<div className='long-component-tab'>Biometric Info</div>
				<div className='long-component-tab'>Personal Info</div>
				<div className='long-component-tab'>Address</div>
				<div className='long-component-tab'>Family</div>
				<div className='long-component-tab'>Eucation</div>
				<div className='long-component-tab'>Case Info</div>
				<div className='long-component-tab'>Health Info</div>
				<div className='long-component-tab'>Visitor Info</div>
				<div className='long-component-tab'>Call Center</div>
			</div>
		</div>
	);
};

export default LongComponent;