/** @format */

import { useForm } from "react-hook-form";
import genderJSon from '../../../../public/gender.json'
import religionJSon from '../../../../public/religion.json'
import nationalityJSon from '../../../../public/nationality.json'
import occupationJSon from '../../../../public/occupation.json'
import natureOfInmateJSon from '../../../../public/natureOfInmate.json'
import yesNoJSon from '../../../../public/yesNo.json'
import { useRef, useState } from "react";
const PersonalInfo = () => {
    // handel gender 
    const [genderValue, setGender] = useState("Select");
    const handelGender = e => {
        setGender(e.target.value);
    }

    // handel religion
    const [religionValue, setReligionValue] = useState('Select');
    const handelReligion = e => {
        setReligionValue(e.target.value)
    }
    // handel nationality 
    const [nationalityValue, setNationalityValue] = useState('Bangladesh');
    const handelNationality = e => {
        setNationalityValue(e.target.value)
    }
    // handel Occupation 
    const [occupationValue, setOccupationValue] = useState('Select');
    const handelOccupation = e => {
        setOccupationValue(e.target.value)
    }

    // handel NatureOfInmate 
    const [natureOfInmateValue, setNatureOfInmateValue] = useState('Select');
    const handelNatureOfInmate = e => {
        setNatureOfInmateValue(e.target.value)
    }
   
    // handel HasDivision
    const [hasDivisionValue, setHasDivisionValue] = useState('Select');
    const handelHasDivision = e => {
        setHasDivisionValue(e.target.value)
    }



	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
    const onSubmit = data => {

        
        // console.log(data)
    };

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='grid grid-cols-4 gap-16'>
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
							name=''
							id=''
							className='input-field'
							onChange={handelGender}
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
							name=''
							id=''
							className='input-field'
							onChange={handelReligion}
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
							name=''
							id=''
							className='input-field'
							onChange={handelGender}
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
							name=''
							id=''
							className='input-field'
							onChange={handelGender}
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
							name=''
							id=''
							className='input-field'
							onChange={handelGender}
						>
							{natureOfInmateJSon.natureOfInmate.map((n, i) => (
								<option
									key={i}
									value={n}
								>
									{n}
								</option>
							))}
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
							name=''
							id=''
							className='input-field'
							onChange={handelGender}
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
				<div>rakib</div>
				<div>rakib</div>
				<div></div>
            </div>
            <button type="submit">save</button>
		</form>
	);
};

export default PersonalInfo;
