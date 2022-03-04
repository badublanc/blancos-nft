const hre = require("hardhat");

async function main() {
  const ContractFactory = await hre.ethers.getContractFactory("ERC721Token");
  const contract = await ContractFactory.deploy(
    "Token",
    "TK",
    "https://example.com/token/"
  );

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
