<<<<<<< HEAD
import React, { useState } from 'react';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        const newMember = { name, email, password };

        try {
            const response = await fetch('http://localhost:5000/members', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMember),
            });

            if (response.ok) {
                alert('Signup successful! Please log in.');
                setName('');
                setEmail('');
                setPassword('');
            } else {
                alert('Error during signup. Please try again.');
            }
        } catch (error) {
            console.error('Signup failed:', error);
            alert('An error occurred during signup. Please try again.');
        }
    };

    return (
        <div className="container page">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
=======
import React from 'react';
import Signup from '../components/Signup'; // Path might vary

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <Signup /> {/* Renders the Signup form */}
    </div>
  );
>>>>>>> loginsignup
};

export default SignupPage;
