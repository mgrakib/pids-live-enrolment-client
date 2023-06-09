import { useContext } from 'react';
import { FaRegWindowClose, FaUserCheck } from 'react-icons/fa';
import { AuthContextAPI } from '../../AuthProvder/AuthProvder';
import { NavLink, Outlet } from 'react-router-dom';

const LongComponent = () => {
    const { enrollmentType } = useContext(AuthContextAPI)
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
						In Prison {enrollmentType.inmateType}
					</span>
				</div>
			</div>

			<div className='grid md:grid-cols-9 gap-3 border-b border-gray-500'>
				<NavLink
					to={"/inmate-enrollment/biometric"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Biometric Info
				</NavLink>
				<NavLink
					to={"/inmate-enrollment/personal-info"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Personal Info
				</NavLink>
				<NavLink
					to={"/inmate-enrollment/address"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Address
				</NavLink>
				<NavLink
					to={"/inmate-enrollment/family"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Family
				</NavLink>
				<NavLink
					to={"/inmate-enrollment/education"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Eucation
				</NavLink>
				<NavLink
					to={"/inmate-enrollment/case-info"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Case Info
				</NavLink>
				<NavLink
					to={"/inmate-enrollment/helth"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Health Info
				</NavLink>
				<NavLink
					to={"/inmate-enrollment/visitor"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Visitor Info
				</NavLink>
				<NavLink
					to={"/inmate-enrollment/call-center"}
					className={({ isActive }) =>
						isActive
							? "active-link long-component-tab"
							: "default-link long-component-tab"
					}
				>
					Call Center
				</NavLink>
			</div>

			<div className='py-5'>
				<Outlet />
			</div>
		</div>
	);
};

export default LongComponent;