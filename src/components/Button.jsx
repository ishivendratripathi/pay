function Button({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-64 mt-4 py-2 px-4 bg-black text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-200 text-sm sm:text-base font-medium"
        >
            {label}
        </button>
    );
}

export default Button;
