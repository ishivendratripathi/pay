import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name") || "Aman Asati";
    const [amount, setAmount] = useState("");

    const handleTransfer = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/account/transfer",
                {
                    to: id,
                    amount: parseFloat(amount)
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }
            );
            console.log("Transfer Successful:", response.data);
            alert("Money sent successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Transfer failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">Send Money</h2>

                <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-semibold">
                        {name[0].toUpperCase()}
                    </div>
                    <h3 className="text-xl font-medium text-gray-800">{name}</h3>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                            Amount (in ₹)
                        </label>
                        <input
                            id="amount"
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <button
                        onClick={handleTransfer}
                        disabled={!amount || amount <= 0}
                        className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send ₹{amount || "0"}
                    </button>
                </div>
            </div>
        </div>
    );
};
