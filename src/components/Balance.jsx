function Balance({ amount }) {
    return (
        <div className="mt-8 px-6 py-4 bg-white shadow-md rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <h1 className="text-lg sm:text-2xl font-semibold text-gray-700">
                Your Balance:
            </h1>
            <h5 className="text-xl sm:text-2xl font-bold text-emerald-600 tracking-wide">
                ₹ {amount.toLocaleString()}
            </h5>
        </div>
    );
}

export default Balance;
