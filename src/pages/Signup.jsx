import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomText from '../components/BottomText';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
        firstName,
        lastName,
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      alert('Signup successful!');
      // Optionally redirect user here
    } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center px-4">
      <div className="bg-gray-300 rounded-xl shadow-2xl w-full max-w-md p-8">
        <Heading label="Sign Up" />
        <SubHeading lebel="Enter your information to create an" subLebel="account" />
        <div className="mt-6 space-y-5">
          <Input
            lebel="First Name"
            placeholder="Enter your first name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            lebel="Last Name"
            placeholder="Enter your last name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            lebel="Email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            lebel="Password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button label="Sign Up" onClick={handleSignup} />
        </div>
        <div className="mt-6 text-center">
          <BottomText label="Have an account? " path="/login" text="Login" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
