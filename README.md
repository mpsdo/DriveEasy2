# 🚗 DriveEasy2 - Sistema de Aluguel de Veículos com Blockchain

Este é um projeto em desenvolvimento com o objetivo de criar um sistema de aluguel de carros com verificação de disponibilidade via **blockchain**, inspirado na arquitetura do [driveen](https://github.com/GabeMoraes/driveen). Utiliza **React** no frontend e será integrado com **contratos inteligentes** utilizando Web3.

---

## 📁 Estrutura do Projeto

```
project_vehicle/
│
├── vehicle-project/       # Frontend React
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
└── smart-contracts/       # (em breve) contratos inteligentes em Solidity
```

---

## 🚀 Funcionalidades (em desenvolvimento)

- ✅ Interface de listagem de veículos disponíveis
- ✅ Integração com carteira MetaMask
- 🔒 Verificação de disponibilidade via blockchain (em breve)
- 📜 Deploy de contratos inteligentes (em breve)

---

## 🛠️ Como Rodar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/mpsdo/DriveEasy2.git
cd DriveEasy2/project_vehicle/vehicle-project
```

### 2. Instale as dependências

⚠️ Para evitar conflitos de dependência entre `typescript` e `react-scripts`, execute com a flag abaixo:

```bash
npm install --legacy-peer-deps
```

### 3. Rode a aplicação

```bash
npm start
```

Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

---

## 📦 Principais Dependências

- `react`
- `react-dom`
- `react-scripts`
- `typescript`
- `wagmi`
- `ethers`
- `viem`
- `@walletconnect/*`

---

## 🦊 Requisitos para Web3

- Navegador com a extensão [MetaMask](https://metamask.io/) instalada
- Conectado à rede de testes (ex: Sepolia)
- Conta com saldo de ETH de teste (disponível em [faucets públicos](https://sepoliafaucet.com/))

---

## 📌 Notas

- O projeto está em fase inicial.
- A pasta `smart-contracts/` será usada em breve para incluir os contratos Solidity.
- Em caso de erros de instalação, execute:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
