import { ethers } from 'ethers';

import Lock from './contracts/Lock.json';

const CONTRACT_ADDRESS = "COLE_O_ENDERECO_DO_CONTRATO_AQUI";

export const getContract = async () => {
  if (!window.ethereum) throw new Error("Metamask não encontrada");

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, Lock.abi, signer);

  return contract;
};
