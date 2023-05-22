/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Enrollment = () => {
	return (
		<div className='w-[calc(100%-50px)] h-full bg-[#E2E2E2] p-5'>
			<div>
				<h1 className='text-4xl font-semibold'>ENROLLMENT</h1>
			</div>

			<div className='py-10 h-[calc(100%-40px)] flex flex-col justify-between '>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text'>Prisoner Category</span>
					</label>
					<div>
						<select
							name=''
							id=''
							className='w-[200px] p-1 outline-none'
						>
							<option value='Under trial'>Under trial</option>
							<option value='Convict'>Convict</option>
						</select>
					</div>
					<label className='label'>
						<span className='label-text'>Prisoner ID</span>
					</label>
					<div>
						<input
							name=''
							id=''
							className='w-[200px] p-1 outline-none'
						/>
					</div>
				</div>
				<div className='flex items-center gap-5'>
					<Link to={'/'}>
						{" "}
						<button className='py-2 px-10 bg-gray-500 text-black font-bold'>
							Home
						</button>
					</Link>
					<button className='py-2 px-10 bg-gray-800 text-white font-bold'>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Enrollment;
