/** @format */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextAPI } from "../../AuthProvder/AuthProvder";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserNamePhoto } = useContext(AuthContextAPI);
    const [error, setError] = useState('')
    const navigat = useNavigate();
    const handelSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        setError('');
        createUser(email, password)
			.then(res =>
				updateUserNamePhoto(name, photo)
					.then(res =>
						Swal.fire({
							icon: "success",
							title: "Yeap...",
							text: "Congratulation Successfully Sing UP",
							footer: '<a href="">Why do I have this issue?</a>',
                        }),
                        navigat('/')
					)
					.catch(err => setError(err.message))
			)
			.catch(err => setError(err.message));

    }
	return (
		<div className='short-component'>
			<div>
				<h1 className='text-4xl font-semibold'>REGISTER</h1>
			</div>

			<form
				onSubmit={handelSingUp}
				className='py-10 h-[calc(100%-40px)] flex flex-col justify-between '
			>
				<div className='grid grid-cols-2 '>
					{/* user name  */}
					<div>
						<label className='label'>
							<span className='label-text'>User Name</span>
						</label>
						<div>
							<input
								name='name'
								id=''
								className='w-[200px] p-1 outline-none'
							/>
						</div>
					</div>
					{/* user email  */}
					<div>
						<label className='label'>
							<span className='label-text'>User Email</span>
						</label>
						<div>
							<input
								name='email'
								id=''
								className='w-[200px] p-1 outline-none'
								type='email'
							/>
						</div>
					</div>
					{/* user photo  */}
					<div>
						<label className='label'>
							<span className='label-text'>User Photo</span>
						</label>
						<div>
							<input
								name='photo'
								id=''
								className='w-[200px] p-1 outline-none'
							/>
						</div>
					</div>
					{/* password  */}
					<div>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<div>
							<input
								name='password'
								id=''
								className='w-[200px] p-1 outline-none'
								type='password'
							/>
						</div>
					</div>
				</div>
				<div>
					<p className=''>
						<small className='text-red-500'>{error}</small>
					</p>
					<p className='py-1'>
						Already Have an Accout?{" "}
						<Link
							className='text-[#1F2937] font-bold'
							to={"/login"}
						>
							Login
						</Link>
					</p>

					<div className='flex items-center gap-5'>
						<Link to={"/"}>
							<button className='py-2 px-10 bg-gray-500 text-black font-bold'>
								Exit
							</button>
						</Link>
						<button type="submit" className='py-2 px-10 bg-gray-800 text-white font-bold'>
							Register
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Register;
