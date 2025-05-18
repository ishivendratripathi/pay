import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomText from '../components/BottomText';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-800 px-4">
            <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-xl">
                <Heading label="Sign In" />
                <SubHeading 
                    lebel="Enter your information to sign in to your" 
                    subLebel="account"
                />
                <div className="mt-6 space-y-4">
                    <Input 
                        lebel="Email" 
                        placeholder="Enter your email" 
                        type="email" 
                    />
                    <Input 
                        lebel="Password" 
                        placeholder="Enter your password" 
                        type="password" 
                    />
                    <Button label="Sign In" />
                </div>
                <BottomText 
                    label="Don't have an account?" 
                    path="/signup" 
                    text="Sign up" 
                />
            </div>
        </div>
    );
};

export default Login;
