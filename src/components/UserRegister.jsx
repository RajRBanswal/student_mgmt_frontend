import React, { useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [stud_img, setStudImg] = useState(null)

    // console.log(name,
    //     email,
    //     mobile,
    //     password,
    //     gender,
    //     stud_img,);

    const nameRef = useRef();

    const createStudent = async () => {
        try {
            if (!name) {
                alert("Name is complesory")
                return nameRef.current.focus();
            }
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("mobile", mobile);
            formData.append("password", password)
            formData.append("gender", gender);
            formData.append("stud_img", stud_img)

            const response = await fetch("http://localhost:8000/api/students/create-student", {
                method: "POST",

                body: formData,
                // body: JSON.stringify({
                //     name: name,
                //     email: email
                // })
            })
            const result = await response.json();
            console.log(result);
            if (result.status == 200) {
                alert(result.message);
                navigate("/user-login")
            } else {
                alert(result.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="form-body bg-primary">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Register Today</h3>
                                <p>Fill in the data below.</p>
                                <div className="col-md-12">
                                    <input className="form-control" type="text" ref={nameRef} name="name" placeholder="Full Name" required onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="col-md-12">
                                    <input className="form-control" type="email" name="email" placeholder="E-mail Address" required onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="col-md-12">
                                    <input type="text" className='form-control' placeholder='Mobile No.' onChange={(e) => setMobile(e.target.value)} />
                                </div>


                                <div className="col-md-12">
                                    <input className="form-control" type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                                </div>


                                <div className="col-md-12 my-3">
                                    <select name="" id="" className='form-control form-select' onChange={(e) => setGender(e.target.value)}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label">I confirm that all data are correct</label>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="" className='mb-0'>User IMage</label>
                                    <input className="form-control" type="file" name="image" placeholder="Select Profile Image" required onChange={(e) => setStudImg(e.target.files[0])} />
                                </div>

                                <div className="form-button mt-3">
                                    <button id="submit" type="button" onClick={() => createStudent()} className="btn btn-dark">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserRegister