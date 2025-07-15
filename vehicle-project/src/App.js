import React, {
  useEffect,
  useState,
} from 'react';

import { ethers } from 'ethers';

import { CONTRACT_ABI } from './contracts/LockABI';
import { CONTRACT_ADDRESS } from './contracts/LockAddress';

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [unlockTime, setUnlockTime] = useState(null);
  const [owner, setOwner] = useState(null);
  const [withdrawStatus, setWithdrawStatus] = useState("");

  // Conecta com carteira/metamask
  const connectWallet = async () => {
    if (window.ethereum) {
      const prov = new ethers.providers.Web3Provider(window.ethereum);
      await prov.send("eth_requestAccounts", []);
      const signer = prov.getSigner();
      const address = await signer.getAddress();

      const lockContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      setProvider(prov);
      setSigner(signer);
      setAccount(address);
      setContract(lockContract);
    } else {
      alert("MetaMask não detectado");
    }
  };

  const fetchContractData = async () => {
    if (contract) {
      const unlock = await contract.unlockTime();
      const ownerAddr = await contract.owner();
      setUnlockTime(new Date(Number(unlock) * 1000).toLocaleString());
      setOwner(ownerAddr);
    }
  };

  const handleWithdraw = async () => {
    try {
      const tx = await contract.withdraw();
      await tx.wait();
      setWithdrawStatus("✅ Retirada feita com sucesso!");
    } catch (error) {
      console.error(error);
      setWithdrawStatus("❌ Erro ao retirar. Verifique se o tempo já passou e se você é o dono.");
    }
  };

  useEffect(() => {
    if (contract) {
      fetchContractData();
    }
  }, [contract]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🚗 DriveEasy - Lock Contract</h1>

      {!account ? (
        <button onClick={connectWallet}>Conectar carteira</button>
      ) : (
        <div>
          <p><strong>Carteira conectada:</strong> {account}</p>
          <p><strong>Dono do contrato:</strong> {owner}</p>
          <p><strong>Tempo de desbloqueio:</strong> {unlockTime}</p>

          <button onClick={handleWithdraw}>Retirar ETH (se permitido)</button>
          <p>{withdrawStatus}</p>
        </div>
      )}
    </div>
  );
}

export default App;
