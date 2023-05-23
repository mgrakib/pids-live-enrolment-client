
import { FaPlus } from 'react-icons/fa';

import { useForm } from "react-hook-form";
import genderJSon from "../../../../public/gender.json";
import religionJSon from "../../../../public/religion.json";
import nationalityJSon from "../../../../public/nationality.json";
import occupationJSon from "../../../../public/occupation.json";
import natureOfInmateJSon from "../../../../public/natureOfInmate.json";
import yesNoJSon from "../../../../public/yesNo.json";
import bloodGroupJSon from "../../../../public/bloodGroup.json";


import { useState } from "react";
const Address = () => {
     console.log(bloodGroupJSon);
		const value = {
			gender: "r",
			religion: "",
			nationality: "",
			occupation: "",
			natureOfInamte: "",
			hasDivision: "",
		};
		const [selectValue, setSelectValue] = useState(value);

		const handelValue = e => {
			const { name, value } = e.target;

			setSelectValue(prevSelectedOptions => ({
				...prevSelectedOptions,
				[name]: value,
			}));
			console.log(selectValue);
		};

		const [textAreaValue, setInputValue] = useState("");
		const [isValueEditable, setIsValueEditable] = useState(false);
		const handleTextAreaKeyPress = event => {
			const keyPress = event.key;
			if (keyPress === "Backspace") {
				setIsValueEditable(true);
			} else {
				setIsValueEditable(false);
			}
		};

		const handelTextAreaValueChange = e => {
			if (isValueEditable) {
				setInputValue(e.target.value);
			}
		};

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
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-3 gap-36'>
					{/* first column */}
					<div>
						<p>
							<small>Present</small>
						</p>

						{/* District  */}
						{/* <div className='flex flex-col'>
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
								onChange={handelValue}
							>
								{genderJSon.genders.map((g, i) => (
									<option
										key={i}
										value={g}
									>
										{g}
									</option>
								))}
							</select>
						</div> */}

						{/* Thana/Upozila  */}
						{/* <div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Thana/Upozila
								</span>
							</label>

							<select
								name='religion'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{religionJSon.religions.map((r, i) => (
									<option
										key={i}
										value={r}
									>
										{r}
									</option>
								))}
							</select>
						</div> */}

						{/* Ward/Union  */}
						{/* <div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Ward/Union
								</span>
							</label>

							<select
								name='religion'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{religionJSon.religions.map((r, i) => (
									<option
										key={i}
										value={r}
									>
										{r}
									</option>
								))}
							</select>
						</div> */}
						{/* Post Office  */}
						{/* <div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Post Office
								</span>
							</label>

							<select
								name='religion'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{religionJSon.religions.map((r, i) => (
									<option
										key={i}
										value={r}
									>
										{r}
									</option>
								))}
							</select>
						</div> */}
						{/* District  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									District
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Upazila/Thana  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Upazila/Thana
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Union/Ward  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Union/Ward
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Post Office  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Post Office
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Villege/Town  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Villege/Town
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Street  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Street
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* House  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									House
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
					</div>
					{/* second column  */}
					<div className=''>
						<div className='flex items-center justify-between'>
							<p>
								<small>Permanent</small>
							</p>
							<div>
								<input
									type='checkbox'
									name=''
									id=''
								/>{" "}
								<small>Same as Present Address</small>
							</div>
						</div>
						{/* District */}
						{/* <div className='flex flex-col'>
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
								onChange={handelValue}
							>
								{genderJSon.genders.map((g, i) => (
									<option
										key={i}
										value={g}
									>
										{g}
									</option>
								))}
							</select>
						</div> */}
						{/* Thana/Upozila  */}
						{/* <div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Thana/Upozila
								</span>
							</label>

							<select
								name='religion'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{religionJSon.religions.map((r, i) => (
									<option
										key={i}
										value={r}
									>
										{r}
									</option>
								))}
							</select>
						</div> */}
						{/* Ward/Union  */}
						{/* <div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Ward/Union
								</span>
							</label>

							<select
								name='religion'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{religionJSon.religions.map((r, i) => (
									<option
										key={i}
										value={r}
									>
										{r}
									</option>
								))}
							</select>
						</div> */}
						{/* Post Office  */}
						{/* <div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Post Office
								</span>
							</label>

							<select
								name='religion'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{religionJSon.religions.map((r, i) => (
									<option
										key={i}
										value={r}
									>
										{r}
									</option>
								))}
							</select>
						</div> */}
						{/* District  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									District
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Upazila/Thana  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Upazila/Thana
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Union/Ward  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Union/Ward
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Post Office  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Post Office
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Villege/Town  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Villege/Town
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Street  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Street
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* House  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									House
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
					</div>
					<div>
						<p>
							<small>Address of Foreign Citizen</small>
						</p>
						{/* Country  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Country
								</span>
							</label>

							<select
								name='gender'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{genderJSon.genders.map((g, i) => (
									<option
										key={i}
										value={g}
									>
										{g}
									</option>
								))}
							</select>
						</div>

						{/* Street  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Street
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Town  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Town
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* ZipPostal Code  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									ZipPostal Code
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Street  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Street
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* House  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									House
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Social Socity No  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Social Socity No
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
					</div>
				</div>
				<button type='submit'>save</button>
			</form>
		</>
	);
};

export default Address;