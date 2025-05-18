function SubHeading({ label, subLabel }) {
    return (
        <div className="text-center my-4">
            <h4 className="text-base sm:text-lg font-semibold text-gray-700">
                {label}
            </h4>
            <h4 className="text-sm sm:text-base font-medium text-gray-600 mt-1">
                {subLabel}
            </h4>
        </div>
    );
}

export default SubHeading;
