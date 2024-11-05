import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({
        user_id: '',
        password: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to the backend server on localhost:8000
            const response = await axios.post('http://localhost:8000/signup', formData);
            console.log("User signed up:", response.data);
            alert('Sign-up successful!'); // Success feedback to the user
        } catch (error) {
            console.error("Signup Error:", error);
            // Provide feedback to the user on error
            alert('Sign-up failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input
                type="text"
                name="user_id"
                placeholder="User ID"
                value={formData.user_id}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;
