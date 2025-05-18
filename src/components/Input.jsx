function Input({ label, placeholder, type = "text", onChange }) {
    return (
        <div className="flex flex-col mt-4">
            <label className="text-sm font-semibold text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-800 transition duration-200"
            />
        </div>
    );
}

export default Input;
