import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Download, Search } from 'lucide-react';
import { useFinancial } from '../context/FinancialContext';

const ActivityPage = () => {
  const { transactions, balance, loading } = useFinancial();
  const [searchTerm, setSearchTerm] = useState('');
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    // Helper function to generate four random numbers that sum to the total balance
    const generateRandomSplit = (total, parts) => {
      if (total <= 0) return Array(parts).fill(0); // Handle cases where balance is 0 or negative

      let values = [];
      let sum = 0;

      for (let i = 0; i < parts - 1; i++) {
        // Generate a random value between 0 and the remaining balance
        const value = parseFloat((Math.random() * (total - sum) / (parts - i)).toFixed(2));
        values.push(value);
        sum += value;
      }

      // Add the remaining balance to the last part
      values.push(parseFloat((total - sum).toFixed(2)));

      return values;
    };

    // Generate the random splits for the balance
    const splitBalances = generateRandomSplit(balance, 4);

    // Create transaction objects for each split balance
    const balanceTransactions = splitBalances.map((amount, index) => ({
      id: `balance-${index + 1}`,
      timestamp: new Date().toLocaleDateString(),
      description: `Deposit`,
      amount: amount,
      type: 'balance',
      status: 'completed',
    }));

    // Combine split balance transactions with other transactions
    setAllTransactions([...balanceTransactions, ...transactions]);
  }, [transactions, balance]);

  const filteredTransactions = allTransactions.filter(transaction =>
    transaction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.recipient?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:px-36">
      <div className="flex items-center gap-5 mb-8">
        <div className="search-container w-full border rounded-full flex items-center gap-3 py-5 px-3">
          <button>
            <Search size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Search by name or email" 
            className="outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 p-3 rounded-full">
          <SlidersHorizontal size={20} className="text-blue-800" />
        </div>
        <div className="bg-gray-100 p-3 rounded-full">
          <Download size={20} className="text-blue-800" />
        </div>
      </div>

      <div>
        <h1 className="mb-8 text-xl">Filter by</h1>
        <span className="text-blue-800 bg-blue-50 text-sm font-semibold px-3 py-4 rounded-full">
          Date: Last 90 days
        </span>
      </div>

      <div className="mt-8">
        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-gray-100 rounded"></div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {filteredTransactions.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className={transaction.type === 'balance' ? 'bg-blue-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap">{transaction.timestamp}</td>
                      <td className="px-6 py-4">{transaction.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {transaction.type === 'balance' ? (
                          <span className="text-blue-600">
                            ${transaction.amount.toLocaleString('en-US', { 
                              minimumFractionDigits: 2, 
                              maximumFractionDigits: 2 
                            })}
                          </span>
                        ) : (
                          <span className={transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}>
                            {transaction.type === 'credit' ? '+' : '-'}$
                            {Math.abs(transaction.amount).toLocaleString('en-US', { 
                              minimumFractionDigits: 2, 
                              maximumFractionDigits: 2 
                            })}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No transactions found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;