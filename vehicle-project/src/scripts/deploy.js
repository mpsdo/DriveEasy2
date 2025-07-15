const hre = require("hardhat");

async function main() {
  // Define um tempo de desbloqueio 1 minuto no futuro
  const unlockTime = Math.floor(Date.now() / 1000) + 60;

  // Cria a fábrica do contrato
  const Lock = await hre.ethers.getContractFactory("Lock");

  // Faz o deploy com o unlockTime e envia 0.01 ether
  const lock = await Lock.deploy(unlockTime, {
    value: hre.ethers.utils.parseEther("0.01"),
  });

  await lock.deployed();

  console.log(`Contrato Lock foi implantado em: ${lock.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
