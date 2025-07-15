
🚗 DriveEasy2 - Sistema de Aluguel de Veículos com Blockchain
=============================================================

Este projeto é uma aplicação descentralizada (dApp) para aluguel de veículos, utilizando **smart contracts** em blockchain, integração com **MetaMask**, e frontend em **React** com Web3.

---

📦 Estrutura do Projeto
-----------------------

- `vehicle-project/`: frontend React com conexão blockchain
- `contracts/`: contratos inteligentes em Solidity
- `scripts/`: deploy e interações com o contrato
- `hardhat.config.js`: configuração de redes e deploy

---

🚀 Como Rodar o Projeto
-----------------------

### 1. Clone o repositório
```bash
git clone https://github.com/mpsdo/DriveEasy2.git
cd DriveEasy2/vehicle-project
```

### 2. Instale as dependências
```bash
npm install --legacy-peer-deps
```

### 3. Compile os contratos
```bash
npx hardhat compile
```

### 4. Rode um nó local (opcional para testes locais)
```bash
npx hardhat node
```

---

💾 Deploy do Smart Contract
---------------------------

### Para rede local:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### Para rede de teste Sepolia (via Infura ou Alchemy):
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

> 💡 Configure `.env` com:
> - `PRIVATE_KEY=chave_da_sua_carteira`
> - `INFURA_API_KEY=sua_chave_infura`

---

🦊 Integração com MetaMask
--------------------------

1. Abra MetaMask e selecione **Sepolia Testnet**.
2. Importe uma conta local (caso use `npx hardhat node`):
   ```bash
   npx hardhat accounts
   ```
3. Copie uma das **chaves privadas** e importe na MetaMask.

---

🧪 Criação de Carteira (Opcional)
---------------------------------

Use o script abaixo com `ethers.js`:

```js
const ethers = require("ethers");
const wallet = ethers.Wallet.createRandom();
console.log("Endereço:", wallet.address);
console.log("Mnemonic:", wallet.mnemonic.phrase);
console.log("Chave privada:", wallet.privateKey);
```

---

💻 Rodando o Frontend
---------------------

```bash
cd vehicle-project
npm start
```

Acesse em: `http://localhost:3000`

---

🔐 Exemplo de Deploy com script
-------------------------------

`scripts/deploy.js`:

```js
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Contract = await ethers.getContractFactory("SeuContrato");
  const instance = await Contract.deploy();
  console.log("Contrato em:", instance.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

---

🛠️ Comandos úteis
------------------

```bash
npx hardhat accounts                      # Lista contas
npx hardhat clean                         # Limpa artefatos compilados
npx hardhat test                          # Roda testes
npx hardhat compile                       # Compila contratos
npx hardhat node                          # Sobe blockchain local
npx hardhat run scripts/deploy.js        # Deploy
npm start                                 # Inicia o frontend
```

---

👨‍💻 Tecnologias usadas
------------------------

- React + Vite
- Solidity
- Hardhat
- Ethers.js
- MetaMask
- Web3 / Wagmi / Viem

---

✅ Status
---------

✔️ Frontend funcionando  
✔️ Deploy automatizado  
✔️ Conexão com MetaMask  
✔️ Suporte para rede local e Sepolia  

---

🧠 Observações
--------------

- Verifique se sua carteira MetaMask está na mesma rede configurada.
- Lembre-se de adicionar o endereço do contrato no frontend para a interação correta.
