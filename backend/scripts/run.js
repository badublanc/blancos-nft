const hre = require("hardhat");
const { provider, BigNumber } = hre.ethers;

const printData = async (contract) => {
  console.log("================");
  console.log(
    "Balance:",
    hre.ethers.utils.formatEther(await provider.getBalance(contract.address)),
    "ether"
  );
  console.log(
    "Price:",
    hre.ethers.utils.formatEther(await contract.PRICE_PER_MINT()),
    "ether"
  );
  console.log(
    "Max Supply:",
    BigNumber.from(await contract.MAX_SUPPLY()).toNumber()
  );
  console.log(
    "Minted:",
    BigNumber.from(await contract.totalSupply()).toNumber()
  );
  console.log("================");
};

async function main() {
  const [owner, user1, user2] = await hre.ethers.getSigners();
  const BlancosContractFactory = await hre.ethers.getContractFactory(
    "BlancosNFT"
  );
  const Blancos = await BlancosContractFactory.deploy();
  await Blancos.deployed();
  console.log("Blancos NFT Contract deployed to:", Blancos.address);
  console.log("Contract owner:", await Blancos.owner());

  let txn;
  await printData(Blancos);

  for (let i = 1; i < 11; i++) {
    try {
      txn = await Blancos.mint(i, {
        value: hre.ethers.utils.parseEther("0.06"),
      });
      await txn.wait();
    } catch (e) {
      console.error(`Token #${i}:`, e);
    }
  }

  await printData(Blancos);

  txn = await Blancos.withdraw();
  txn.wait();

  console.log(
    "Balance:",
    hre.ethers.utils.formatEther(await provider.getBalance(Blancos.address)),
    "ether"
  );

  console.log(await Blancos.tokenURI(6));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
