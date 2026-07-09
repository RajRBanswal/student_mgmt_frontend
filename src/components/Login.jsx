import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const CheckLogin = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/students/user-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            const result = await response.json();
            console.log(result);
            if (result.status === 200) {
                localStorage.setItem("userToken", result.token);
                alert(result.message);
                navigate("/students/student-dashboard")
            } else {
                alert(result.message)
            }

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="card shadow">
                            <div className="card-header">
                                <h3 className='mb-0'>User Login</h3>
                            </div>
                            <div className="card-body p-4">
                                <div className="row g-3">
                                    <div className="col-lg-12">
                                        <label htmlFor="">Email Or Mobile Number</label>
                                        <input type="text" name="username" id="username" className='form-control' onChange={(e) => setUsername(e.target.value)} placeholder='Enter Email or Mobile No.' />
                                    </div>

                                    <div className="col-lg-12">
                                        <label htmlFor="">Password</label>
                                        <input type="password" name="password" id="password" className='form-control' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                                    </div>

                                    <div className="col-lg-12">
                                        <button className='btn btn-primary' onClick={() => CheckLogin()}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login