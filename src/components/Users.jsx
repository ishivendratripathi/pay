import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
    const [User, setUser] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            .then((res) => {
                setUser(res.data.user);
            });
    }, [filter]);

    return (
        <div className="text-gray-800 px-6 sm:px-10 py-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">Users</h1>

            <input
                type="text"
                placeholder="Search user"
                className="w-full max-w-lg mb-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFilter(e.target.value)}
            />

            <ul className="space-y-4">
                {User.map((u) => (
                    <li
                        key={u._id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg bg-white shadow-sm"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700">
                                {u.firstName[0]?.toUpperCase()}
                            </div>
                            <span className="text-base sm:text-lg font-medium">
                                {u.firstName}
                            </span>
                        </div>

                        <button
                            onClick={() =>
                                navigate(`/send?id=${u._id}&name=${u.firstName}`)
                            }
                            className="mt-3 sm:mt-0 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-200"
                        >
                            Send Money
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
