import { Link } from 'react-router-dom';

function BottomText({ label = "Don't have an account?", path, text }) {
    return (
        <p className="mt-6 text-center text-sm sm:text-base text-gray-700">
            {label}{' '}
            <Link
                to={path}
                className="text-blue-600 font-medium hover:underline transition-colors duration-200"
            >
                {text}
            </Link>
        </p>
    );
}

export default BottomText;
