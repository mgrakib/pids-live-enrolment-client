/** @format */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextAPI } from "../../AuthProvder/AuthProvder";
import Swal from "sweetalert2";

const Login = () => {
	const { userLogIn } = useContext(AuthContextAPI);
	const [error, setError] = useState("");
	const navigat = useNavigate();

	const handelSingIn = e => {
		e.preventDefault();
		console.log('first')
		const from = e.target;
		const email = from.email.value;
		const password = from.password.value;
		setError('')
		userLogIn(email, password)
			.then(
				res => (
					Swal.fire({
						icon: "success",
						title: "Yeap...",
						text: "Congratulation Successfully Sing UP",
						footer: '<a href="">Why do I have this issue?</a>',
					}),
					navigat("/")
				)
			)
			.catch(err => setError(err.message));
	}
	return (
		<div className='short-component'>
			<div>
				<h1 className='text-4xl font-semibold'>LOGIN</h1>
			</div>

			<form
				onSubmit={handelSingIn}
				className='py-10 h-[calc(100%-40px)] flex flex-col justify-between '
			>
				<div className='form-control'>
					<label className='label'>
						<span className='label-text'>Email</span>
					</label>
					<div>
						<input
							name='email'
							id=''
							className='w-[200px] p-1 outline-none'
							type='email'
						/>
					</div>
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

				<div>
					<p className=''>
						<small className='text-red-500'>{error}</small>
					</p>
					<p className='py-1'>
						Already Have an Accout?{" "}
						<Link
							className='text-[#1F2937] font-bold'
							to={"/register"}
						>
							Sing Up
						</Link>
					</p>
					<div className='flex items-center gap-5'>
						<Link to={"/"}>
							<button className='py-2 px-10 bg-gray-500 text-black font-bold'>
								Exit
							</button>
						</Link>
						<button
							type='submit'
							className='py-2 px-10 bg-gray-800 text-white font-bold'
						>
							Login
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
