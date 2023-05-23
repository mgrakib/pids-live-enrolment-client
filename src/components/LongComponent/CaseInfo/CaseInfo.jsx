/** @format */

import { useForm } from "react-hook-form";
import genderJSon from "../../../../public/gender.json";
const CaseInfo = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		data = { ...data, ...selectValue };
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='border border-gray-800 bg-white min-h-[350px]'>
				<div>
					<div className='overflow-x-auto'>
						<table className='table w-full'>
							{/* head*/}
							<thead>
								<tr className='text-black font-bold '>
									<th className='bg-gray-400'>Degree Name</th>
									<th className='bg-gray-400'>
										Institute Name
									</th>
									<th className='bg-gray-400'>Result</th>
									<th className='bg-gray-400'>
										Passing Year
									</th>
									<th className='bg-gray-400'>Roll</th>
									<th className='bg-gray-400'>Reg</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr className='cursor-pointer'>
									<th>Md. Jobbar</th>
									<td>জব্বার</td>
									<td>0187457845</td>
									<td></td>
									<td>Father</td>
									<td>Yes</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-end gap-4 mt-5'>
				<label
					htmlFor='my-modal-5'
					className=' px-4 border border-gray-700 cursor-pointer'
				>
					Add
				</label>
				<button className=' px-4 border border-gray-700'>Edit</button>
				<button className=' px-4 border border-gray-700'>Remove</button>
			</div>

			{/* modal */}
			<div>
				{/* Put this part before </body> tag */}
				<input
					type='checkbox'
					id='my-modal-5'
					className='modal-toggle'
				/>
				<div className='modal'>
					<div className='modal-box bg-[#E2E2E2] p-0 w-11/12 max-w-7xl'>
						<div className='bg-black px-5 py-1 '>
							<h3 className='text-white'>CASE INFO</h3>
						</div>
						<div className='px-5 py-3 grid grid-cols-[3fr_6fr] gap-5'>
							{/* Basic Info  */}
							<div>
								<h4 className='text-gray-600 font-bold border-b-2 border-gray-600'>
									BASIC INFO
								</h4>

								<div>
									<div className='grid grid-cols-2 gap-x-10'>
										{/* Crime Type  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text require-field relative`}
												>
													Crime Type
												</span>
											</label>

											<select
												name='gender'
												id=''
												className='input-field'
											>
												{genderJSon.genders.map(
													(g, i) => (
														<option
															key={i}
															value={g}
														>
															{g}
														</option>
													)
												)}
											</select>
										</div>

										{/* Section  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text  relative`}
												>
													Section
												</span>
											</label>
											<input
												{...register("banglaName")}
												className='input-field '
												required
											/>
										</div>
									</div>
									<div className='grid grid-cols-2 gap-x-10'>
										{/* Court Type  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text require-field relative`}
												>
													Court Type
												</span>
											</label>

											<select
												name='gender'
												id=''
												className='input-field'
											>
												{genderJSon.genders.map(
													(g, i) => (
														<option
															key={i}
															value={g}
														>
															{g}
														</option>
													)
												)}
											</select>
										</div>

										{/* Court Name  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text  relative`}
												>
													Court Name
												</span>
											</label>
											<input
												{...register("banglaName")}
												className='input-field '
												required
											/>
										</div>
									</div>

									<div className='grid grid-cols-2 gap-x-10'>
										{/* District  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text require-field relative`}
												>
													District
												</span>
											</label>

											<select
												name='gender'
												id=''
												className='input-field'
											>
												{genderJSon.genders.map(
													(g, i) => (
														<option
															key={i}
															value={g}
														>
															{g}
														</option>
													)
												)}
											</select>
										</div>
										{/* Thana  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text require-field relative`}
												>
													Thana
												</span>
											</label>

											<select
												name='gender'
												id=''
												className='input-field'
											>
												{genderJSon.genders.map(
													(g, i) => (
														<option
															key={i}
															value={g}
														>
															{g}
														</option>
													)
												)}
											</select>
										</div>
									</div>

									<div className='grid grid-cols-2 gap-x-10'>
										{/* Case No  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text  relative`}
												>
													Case No
												</span>
											</label>
											<input
												{...register("banglaName")}
												className='input-field '
												required
											/>
										</div>

										{/* Date  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text  relative`}
												>
													Date
												</span>
											</label>
											<input
												{...register("banglaName")}
												className='input-field '
												required
											/>
										</div>
									</div>

									<div className='grid grid-cols-2 gap-x-10'>
										{/* Charged with(Crime)  */}
										<div className='flex flex-col'>
											<label className='blcok'>
												<span
													className={`label-text require-field relative`}
												>
													Charged with(Crime)
												</span>
											</label>

											<select
												name='gender'
												id=''
												className='input-field'
											>
												{genderJSon.genders.map(
													(g, i) => (
														<option
															key={i}
															value={g}
														>
															{g}
														</option>
													)
												)}
											</select>
										</div>
									</div>
									{/* Case Details  */}
									<div className='flex flex-col'>
										<label className='blcok'>
											<span
												className={`label-text  relative`}
											>
												Case Details
											</span>
										</label>
										<input
											{...register("banglaName")}
											className='input-field '
											required
										/>
									</div>
									{/* First Sentence  */}
									<div className='flex flex-col'>
										<label className='blcok'>
											<span
												className={`label-text  relative`}
											>
												First Sentence
											</span>
										</label>
										<input
											{...register("banglaName")}
											className='input-field h-[80px]'
											required
										/>
									</div>
									{/* Modified Sentence  */}
									<div className='flex flex-col'>
										<label className='blcok'>
											<span
												className={`label-text  relative`}
											>
												Modified Sentence
											</span>
										</label>
										<input
											{...register("banglaName")}
											className='input-field h-[80px]'
											required
										/>
									</div>
								</div>
							</div>

							{/* Admission Info */}
							<div className=''>
								<h4 className='text-gray-600 font-bold border-b-2 border-gray-600 mb-2'>
									ADMISSION INFO
								</h4>
								<div className=''>
									<div className='overflow-x-auto'>
										<table className='table w-full'>
											{/* head */}
											<thead>
												<tr className='divide-x'>
													<th className='bg-gray-500 py-0 rounded-none'>
														Admitted
													</th>
													<th className='bg-gray-500 py-0'>
														Received
													</th>
													<th className='bg-gray-500 py-0'>
														Marks Rule
													</th>
													<th className='bg-gray-500 py-0'>
														Remission
													</th>
													<th className='bg-gray-500 py-0'>
														Personal Lawyer
													</th>
													<th className='bg-gray-500 py-0  rounded-none'>
														Arrested By
													</th>
												</tr>
											</thead>
											<tbody>
												{/* row 1 */}
												<tr>
													<td>23052023</td>
													<td>23052023</td>
													<td></td>
													<td>No</td>
													<td>No`</td>
													<td>Police</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>

								<h4 className='text-gray-600 font-bold border-b-2 border-gray-600 mb-2'>
									COURT VISIT
								</h4>
								<div>
									<div className='overflow-x-auto'>
										<table className='table w-full'>
											{/* head */}
											<thead>
												<tr className='divide-x'>
													<th className='bg-gray-500 py-0 rounded-none'>
														Admitted
													</th>
													<th className='bg-gray-500 py-0'>
														Received
													</th>
													<th className='bg-gray-500 py-0'>
														Marks Rule
													</th>
													<th className='bg-gray-500 py-0'>
														Remission
													</th>
													<th className='bg-gray-500 py-0'>
														Personal Lawyer
													</th>
													<th className='bg-gray-500 py-0  rounded-none'>
														Arrested By
													</th>
												</tr>
											</thead>
											<tbody>
												{/* row 1 */}
												<tr>
													<td>23052023</td>
													<td>23052023</td>
													<td></td>
													<td>No</td>
													<td>No`</td>
													<td>Police</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<h4 className='text-gray-600 font-bold border-b-2 border-gray-600 mb-2'>
									REMAND
								</h4>
								<div>
									<div className='overflow-x-auto'>
										<table className='table w-full'>
											{/* head */}
											<thead>
												<tr className='divide-x'>
													<th className='bg-gray-500 py-0 rounded-none'>
														Admitted
													</th>
													<th className='bg-gray-500 py-0'>
														Received
													</th>
													<th className='bg-gray-500 py-0'>
														Marks Rule
													</th>
													<th className='bg-gray-500 py-0'>
														Remission
													</th>
													<th className='bg-gray-500 py-0'>
														Personal Lawyer
													</th>
													<th className='bg-gray-500 py-0  rounded-none'>
														Arrested By
													</th>
												</tr>
											</thead>
											<tbody>
												{/* row 1 */}
												<tr>
													<td>23052023</td>
													<td>23052023</td>
													<td></td>
													<td>No</td>
													<td>No`</td>
													<td>Police</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<h4 className='text-gray-600 font-bold border-b-2 border-gray-600 mb-2'>
									APPEALS
								</h4>
								<div>
									<div className='overflow-x-auto'>
										<table className='table w-full'>
											{/* head */}
											<thead>
												<tr className='divide-x'>
													<th className='bg-gray-500 py-0 rounded-none'>
														Admitted
													</th>
													<th className='bg-gray-500 py-0'>
														Received
													</th>
													<th className='bg-gray-500 py-0'>
														Marks Rule
													</th>
													<th className='bg-gray-500 py-0'>
														Remission
													</th>
													<th className='bg-gray-500 py-0'>
														Personal Lawyer
													</th>
													<th className='bg-gray-500 py-0  rounded-none'>
														Arrested By
													</th>
												</tr>
											</thead>
											<tbody>
												{/* row 1 */}
												<tr>
													<td>23052023</td>
													<td>23052023</td>
													<td></td>
													<td>No</td>
													<td>No`</td>
													<td>Police</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<h4 className='text-gray-600 font-bold border-b-2 border-gray-600 mb-2'>
									RELEASI
								</h4>
								<div>
									<div className='overflow-x-auto'>
										<table className='table w-full'>
											{/* head */}
											<thead>
												<tr className='divide-x'>
													<th className='bg-gray-500 py-0 rounded-none'>
														Admitted
													</th>
													<th className='bg-gray-500 py-0'>
														Received
													</th>
													<th className='bg-gray-500 py-0'>
														Marks Rule
													</th>
													<th className='bg-gray-500 py-0'>
														Remission
													</th>
													<th className='bg-gray-500 py-0'>
														Personal Lawyer
													</th>
													<th className='bg-gray-500 py-0  rounded-none'>
														Arrested By
													</th>
												</tr>
											</thead>
											<tbody>
												{/* row 1 */}
												<tr>
													<td>23052023</td>
													<td>23052023</td>
													<td></td>
													<td>No</td>
													<td>No`</td>
													<td>Police</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>

						<div className='modal-action px-5 py-3'>
							<label
								htmlFor='my-modal-5'
								className='btn'
							>
								Yay!
							</label>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default CaseInfo;
