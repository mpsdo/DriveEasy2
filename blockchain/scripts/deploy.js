const hre = require("hardhat");

async function main() {
  const unlockTime = Math.floor(Date.now() / 1000) + 60; // agora + 60 segundos

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: hre.ethers.parseEther("0.01") });

  await lock.waitForDeployment();

  console.log("Lock deployed to:", lock.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
