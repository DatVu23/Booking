import React, { useState } from 'react';
import './register.css';

export default function Register() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
    });

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const register = () => {
        const usersFromLocalStorage = localStorage.getItem('users');
        const users = JSON.parse(usersFromLocalStorage) || [];

        const newUsers = [...users, userInfo]
        console.log('newUsers', newUsers);

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('users', JSON.stringify(newUsers));
    }

    return (
        <div>
            <header>
                Register Form
            </header>
            <main>
                <div className="register">
                    <form>
                        <p>{userInfo.firstName}</p>
                        <div className="regiser_form-element">
                            <span>First Name</span>
                            <input type="text" name="firstName" onChange={handleChange}></input>
                        </div>
                        <p>{userInfo.lastName}</p>
                        <div className="regiser_form-element">
                            <span>Last Name</span>
                            <input type="text" name="lastName" onChange={handleChange}></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Address</span>
                            <input type="text" name="address" onChange={handleChange}></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Phone</span>
                            <input type="text" name="phone" onChange={handleChange}></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Email</span>
                            <input type="text" name="email" onChange={handleChange}></input>
                        </div>
                        <div className="regiser_form-element">
                            <span>Password</span>
                            <input type="text" name="password" onChange={handleChange}></input>
                        </div>
                        {/* <button type="submit" onClick={register}>Register</button> */}
                    </form>
                    <button onClick={register}>Register</button>
                </div>
            </main >
        </div >
    )
}
