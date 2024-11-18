import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, onSnapshot, collection, query, where, orderBy, getDocs } from 'firebase/firestore';

const FinancialContext = createContext(null);

export const FinancialContextProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          // Fetch Balance - userInfo is now a collection with uid as document id
          const userRef = doc(db, 'userInfo', user.uid);  // Correct reference
          const unsubscribeBalance = onSnapshot(userRef, (doc) => {
            if (doc.exists()) {
              setBalance(doc.data().balance || 0); 
            } else {
              console.error('No userInfo document found');
              setBalance(0);
            }
          });

          // Fetch Transactions
          const transactionsRef = collection(db, 'transactions');
          const q = query(
            transactionsRef,
            where('userId', '==', user.uid),
            orderBy('timestamp', 'desc')
          );

          const unsubscribeTransactions = onSnapshot(q, (snapshot) => {
            const transactionsList = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
              timestamp: doc.data().timestamp?.toDate().toLocaleDateString()
            }));
            setTransactions(transactionsList);
          });

          setLoading(false);

          return () => {
            unsubscribeBalance();
            unsubscribeTransactions();
          };
        } catch (err) {
          console.error('Error fetching financial data:', err);
        }
      } else {
        setBalance(0);
        setTransactions([]);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  return (
    <FinancialContext.Provider value={{ balance, transactions, loading }}>
      {children}
    </FinancialContext.Provider>
  );
};

export const useFinancial = () => useContext(FinancialContext);

