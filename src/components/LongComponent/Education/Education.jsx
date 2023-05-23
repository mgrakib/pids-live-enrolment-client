/** @format */

import React from "react";

const Education = () => {
	return (
		<div>
			<div className='border border-gray-800 bg-white min-h-[350px]'>
				<div>
					<div className='overflow-x-auto'>
						<table className='table w-full'>
							{/* head*/}
							<thead>
								<tr className='text-black font-bold '>
									<th className='bg-gray-400'>
										Degree Name
									</th>
									<th className='bg-gray-400'>
										Institute Name
									</th>
									<th className='bg-gray-400'>Result</th>
									<th className='bg-gray-400'>Passing Year</th>
									<th className='bg-gray-400'>Roll</th>
									<th className='bg-gray-400'>
										Reg
									</th>
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
				<button className=' px-4 border border-gray-700'>Add</button>
				<button className=' px-4 border border-gray-700'>Edit</button>
				<button className=' px-4 border border-gray-700'>Remove</button>
			</div>
		</div>
	);
};

export default Education;
