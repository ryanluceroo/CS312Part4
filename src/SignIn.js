import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
    const [credentials, setCredentials] = useState({
        user_id: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signin', credentials);
            console.log("User signed in:", response.data);
        } catch (error) {
            console.error("Signin Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input
                type="text"
                name="user_id"
                placeholder="User ID"
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
            />
            <button type="submit">Sign In</button>
        </form>
    );
}

export default SignIn;
