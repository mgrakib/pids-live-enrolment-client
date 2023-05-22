/** @format */

import React, { useContext } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { AuthContextAPI } from "../../../AuthProvder/AuthProvder";
import { useForm } from "react-hook-form";

const Enrollment = () => {
	const { setEnrollmentType } = useContext(AuthContextAPI);
	const navigator = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
			
		setEnrollmentType(data);
		navigator("/inmate-enrollment");
	};

	return (
		<div className='short-component'>
			<div>
				<h1 className='text-4xl font-semibold'>ENROLLMENT</h1>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='py-10 h-[calc(100%-40px)] flex flex-col justify-between '
			>
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
							{...register("inmatId")}
						/>
					</div>
				</div>
				<div className='flex items-center gap-5'>
					<Link to={"/"}>
						{" "}
						<button className='py-2 px-10 bg-gray-500 text-black font-bold'>
							Home
						</button>
					</Link>

					<button
						type='submit'
						className='py-2 px-10 bg-gray-800 text-white font-bold'
					>
						Next
					</button>
					
				</div>
			</form>
		</div>
	);
};

export default Enrollment;
