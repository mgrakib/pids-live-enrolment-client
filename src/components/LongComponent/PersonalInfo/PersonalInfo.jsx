/** @format */

import { useForm } from "react-hook-form";
import genderJSon from '../../../../public/gender.json'
import religionJSon from '../../../../public/religion.json'
import nationalityJSon from '../../../../public/nationality.json'
import occupationJSon from '../../../../public/occupation.json'
import natureOfInmateJSon from '../../../../public/natureOfInmate.json'
import yesNoJSon from '../../../../public/yesNo.json'
import bloodGroupJSon from '../../../../public/bloodGroup.json'

import { FaPlus } from "react-icons/fa";
import { useState } from "react";
const PersonalInfo = () => {

    console.log(bloodGroupJSon);
    const value = {
		gender: "r",
		religion: "",
		nationality: "",
		occupation: "",
		natureOfInamte: "",
		hasDivision:""
	};    
    const [selectValue, setSelectValue] = useState(value);

    const handelValue = e => {     
         const { name, value } = e.target;
    
        setSelectValue(prevSelectedOptions => ({
			...prevSelectedOptions,
			[name]: value,
        }));
        console.log(selectValue);
    }

    
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
    }



	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
    const onSubmit = data => {

        data = { ...data, ...selectValue };
        console.log(data)
    };

    return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-4 gap-16'>
					{/* first column */}
					<div>
						{/* name  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Name in English
								</span>
							</label>
							<input
								{...register("englishName")}
								className='input-field'
								required
							/>
						</div>

						{/* gender  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Gender
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

						{/* religion  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Religion
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
						</div>

						{/* age  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Age
								</span>
							</label>
							<input
								{...register("example")}
								className='input-field'
								type='number'
							/>
						</div>

						{/* Nationality  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Nationality
								</span>
							</label>

							<select
								name='nationality'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{nationalityJSon.nationality.map((n, i) => (
									<option
										key={i}
										value={n}
									>
										{n}
									</option>
								))}
							</select>
						</div>

						{/* occupationJSon  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text relative`}>
									Occupation
								</span>
							</label>

							<select
								name='occupation'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{occupationJSon.occupation.map((o, i) => (
									<option
										key={i}
										value={o}
									>
										{o}
									</option>
								))}
							</select>
						</div>

						{/* Nature of inmate  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text relative`}>
									Nature of Inmate
								</span>
							</label>

							<select
								name='natureOfInamte'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{natureOfInmateJSon.natureOfInmate.map(
									(n, i) => (
										<option
											key={i}
											value={n}
										>
											{n}
										</option>
									)
								)}
							</select>
						</div>
						{/* Has division  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text relative`}>
									Has Division
								</span>
							</label>

							<select
								name='hasDivision'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{yesNoJSon.yesNo.map((n, i) => (
									<option
										key={i}
										value={n}
									>
										{n}
									</option>
								))}
							</select>
						</div>
					</div>
					{/* second column  */}
					<div>
						{/* bangla name  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span
									className={`label-text require-field relative`}
								>
									Name in Bangla
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>

						{/* Aliases  */}
						<div className='flex flex-col relative'>
							<label className='blcok'>
								<span className={`label-text relative `}>
									Aliases
								</span>
							</label>
							<textarea
								name=''
								id=''
								{...register("Aliases")}
								value={textAreaValue}
								className='textarea-field input-field relative'
								required
								onKeyDown={handleTextAreaKeyPress}
								onChange={handelTextAreaValueChange}
							></textarea>

							<span
								htmlFor='my-modal-3'
								className='textarea-field-add'
							>
								<FaPlus />
							</span>
						</div>
						{/* date of birth  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text relative`}>
									Date of Birth
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
								type='date'
							/>
						</div>
						{/* bangla name  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text relative`}>
									National ID No
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								required
							/>
						</div>
						{/* Blood Group  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text relative`}>
									Blood Group
								</span>
							</label>

							<select
								name='hasDivision'
								id=''
								className='input-field'
								onChange={handelValue}
							>
								{bloodGroupJSon.bloodGroup.map((b, i) => (
									<option
										key={i}
										value={b}
									>
										{b}
									</option>
								))}
							</select>
						</div>
						{/* Aliases  */}
						<div className='flex flex-col relative'>
							<label className='blcok'>
								<span className={`label-text relative `}>
									Valuable Proparties
								</span>
							</label>
							<textarea
								name=''
								id=''
								{...register("Aliases")}
								value={textAreaValue}
								className='textarea-field input-field relative'
								required
								onKeyDown={handleTextAreaKeyPress}
								onChange={handelTextAreaValueChange}
							></textarea>

							<span
								htmlFor='my-modal-3'
								className='textarea-field-add'
							>
								<FaPlus />
							</span>
						</div>
					</div>
					<div>
						{/* Mobile No  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Mobile No
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								type='number'
							/>
						</div>

						{/* Altarnative Mobile NO  */}
						<div className='flex flex-col relative'>
							<label className='blcok'>
								<span className={`label-text relative `}>
									Altarnative Mobile No
								</span>
							</label>
							<textarea
								name=''
								id=''
								{...register("Aliases")}
								value={textAreaValue}
								className='textarea-field input-field relative'
								required
								onKeyDown={handleTextAreaKeyPress}
								onChange={handelTextAreaValueChange}
							></textarea>

							<span
								htmlFor='my-modal-3'
								className='textarea-field-add'
							>
								<FaPlus />
							</span>
						</div>
						{/* Identify Mark  */}
						<div className='flex flex-col relative'>
							<label className='blcok'>
								<span className={`label-text relative `}>
									Identify Mark
								</span>
							</label>
							<textarea
								name=''
								id=''
								{...register("Aliases")}
								value={textAreaValue}
								className='textarea-field input-field relative'
								required
								onKeyDown={handleTextAreaKeyPress}
								onChange={handelTextAreaValueChange}
							></textarea>

							<span
								htmlFor='my-modal-3'
								className='textarea-field-add'
							>
								<FaPlus />
							</span>
						</div>

						{/* Height  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Height
								</span>
							</label>
							<div className='grid grid-cols-3 gap-1'>
								<span className=''>
									<input
										{...register("banglaName")}
										className='sort-input-field'
										type='number'
									/>

									<span>ft</span>
								</span>

								<span className=''>
									<input
										{...register("banglaName")}
										className='sort-input-field'
										type='number'
									/>

									<span>inc</span>
								</span>

								<span className=''>
									<input
										{...register("banglaName")}
										className='sort-input-field'
										type='number'
										readOnly
									/>

									<span>cm</span>
								</span>
							</div>
						</div>
						{/* Weight  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Weight
								</span>
							</label>
							<div className='grid grid-cols-3 gap-1'>
								<span className=''>
									<input
										{...register("banglaName")}
										className='sort-input-field'
										type='number'
									/>

									<span>kg</span>
								</span>

								<span className=''>
									<input
										{...register("banglaName")}
										className='sort-input-field'
										type='number'
									/>

									<span>po</span>
								</span>
							</div>
						</div>
					</div>
					<div>
						{/* Phone Number  */}
						<div className='flex flex-col'>
							<label className='blcok'>
								<span className={`label-text  relative`}>
									Phone Number
								</span>
							</label>
							<input
								{...register("banglaName")}
								className='input-field '
								type='number'
							/>
						</div>

						{/* Email  */}
						<div className='flex flex-col relative'>
							<label className='blcok'>
								<span className={`label-text relative `}>
									Email
								</span>
							</label>
							<textarea
								name=''
								id=''
								{...register("Aliases")}
								value={textAreaValue}
								className='textarea-field input-field relative'
								required
								onKeyDown={handleTextAreaKeyPress}
								onChange={handelTextAreaValueChange}
							></textarea>

							<span
								htmlFor='my-modal-3'
								className='textarea-field-add'
							>
								<FaPlus />
							</span>
						</div>
						{/* Disabilities  */}
						<div className='flex flex-col relative'>
							<label className='blcok'>
								<span className={`label-text relative `}>
									Disabilities
								</span>
							</label>
							<textarea
								name=''
								id=''
								{...register("Aliases")}
								value={textAreaValue}
								className='textarea-field input-field relative'
								required
								onKeyDown={handleTextAreaKeyPress}
								onChange={handelTextAreaValueChange}
							></textarea>

							<span
								htmlFor='my-modal-3'
								className='textarea-field-add'
							>
								<FaPlus />
							</span>
						</div>
						{/* Remarks  */}
						<div className='flex flex-col relative'>
							<label className='blcok'>
								<span className={`label-text relative `}>
									Remarks
								</span>
							</label>
							<textarea
								name=''
								id=''
								{...register("Aliases")}
								value={textAreaValue}
								className='textarea-field input-field relative'
								required
								onKeyDown={handleTextAreaKeyPress}
								onChange={handelTextAreaValueChange}
							></textarea>

							<span
								htmlFor='my-modal-3'
								className='textarea-field-add'
							>
								<FaPlus />
							</span>
						</div>
						{/* Admin Comment  */}
						<div className='flex flex-col relative'>
							<label className='blcok'>
								<span className={`label-text relative `}>
									Admin Comment
								</span>
							</label>
							<textarea
								name=''
								id=''
								{...register("Aliases")}
								value={textAreaValue}
								className='textarea-field input-field relative'
								required
								onKeyDown={handleTextAreaKeyPress}
								onChange={handelTextAreaValueChange}
							></textarea>

							<span
								htmlFor='my-modal-3'
								className='textarea-field-add'
							>
								<FaPlus />
							</span>
						</div>
					</div>
				</div>
				<button type='submit'>save</button>
			</form>
		</>
	);
};

export default PersonalInfo;
