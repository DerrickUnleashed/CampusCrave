import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { redeemCoins } from "../Utils/vCoinSlice";

const VCoinWallet = () => {
  const dispatch = useDispatch();
  const balance = useSelector((store) => store.vCoins.balance);
  const transactions = useSelector((store) => store.vCoins.transactions);

  const handleRedeem = (amount) => {
    if (balance >= amount) {
      dispatch(redeemCoins({ amount, description: `Redeemed ${amount} VCoins` }));
    }
  };

  return (
    <div className="pt-28 px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">VCoins Wallet</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Current Balance</h2>
        <p className="text-4xl font-bold text-green-600">{balance} VCoins</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Redeem</h2>
        <div className="flex gap-4">
          <button
            onClick={() => handleRedeem(50)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:bg-gray-300"
            disabled={balance < 50}
          >
            Redeem 50 VCoins
          </button>
          <button
            onClick={() => handleRedeem(100)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:bg-gray-300"
            disabled={balance < 100}
          >
            Redeem 100 VCoins
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <div className="space-y-4">
          {transactions.slice().reverse().map((transaction) => (
            <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-600">{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
              <p className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount} VCoins
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VCoinWallet;
