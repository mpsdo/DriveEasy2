const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners(); // rentalCompany

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // contrato já implantado

  const rent = await hre.ethers.getContractAt("Rent", contractAddress);

  // Dados do carro a ser cadastrado
  const chassisNumber = "456ABC456DEF";
  const licensePlate = "XYZ9A99";
  const manufacturer = "FIAT";
  const model = "UNO";
  const year = 2022;

  // Criação do carro
  const tx = await rent.registerCar(
    chassisNumber,
    licensePlate,
    manufacturer,
    model,
    year
  );
  await tx.wait();
  console.log("✅ Carro cadastrado com sucesso!");

  // Consulta do carro cadastrado
  const car = await rent.getCar(licensePlate);
  console.log("🔍 Carro consultado:");
  console.log(`Chassi: ${car.chassisNumber}`);
  console.log(`Placa: ${car.licensePlate}`);
  console.log(`Fabricante: ${car.manufacturer}`);
  console.log(`Modelo: ${car.model}`);
  console.log(`Ano: ${car.year}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
