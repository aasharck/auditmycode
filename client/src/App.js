import { ethers } from "ethers";
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAccount, useWalletClient } from 'wagmi';
import Navbar from './components/Navbar';
import './App.css';
import Audits from './components/Audits';
import AuditPage from './AuditPage';
import RequestAudit from './RequestAudit';
import ContractAbi from './abi/AuditMyCode.json'


function App() {
  const { address, isDisconnected } = useAccount();
  const CONTRACTADDRESS = "0x3F352F077Ba0CDf41de470af8021AFF9e1E7Fabb"
  const [darkMode, toggleDarkMode] = useState(false);
  const [contract, setContract] = useState();

  useEffect(() => {
    if(!isDisconnected){
      loadContract();
    }
  },[])

  const loadContract = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const abi = ContractAbi.abi;
      const tx = new ethers.Contract(
        CONTRACTADDRESS,
        abi,
        signer
      )
      setContract(tx);
      console.log(await tx.projectId());
      console.log("Connected to contract")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={`h-screen ${darkMode && "dark"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Routes>
      <Route
          path='/'
          element={
            <Audits />
          }
        />
        <Route
          path='/audits/:projectId'
          element={
            <AuditPage />
          }
        />
        <Route
          path='/request'
          element={
            <RequestAudit />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
