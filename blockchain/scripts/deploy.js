const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const unlockTime = Math.floor(Date.now() / 1000) + 60; // 1 minuto no futuro

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, {
    value: ethers.parseEther("0.1"),
  });

  console.log(`Contrato Lock foi implantado em: ${lock.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
