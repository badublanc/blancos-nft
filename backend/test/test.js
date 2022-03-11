const { expect } = require("chai");

describe("NFT Contract", function () {
  let ContractFactory, contract, balance;
  let mintPrice, maxSupply, totalSupply, baseURI;
  let owner;
  let user1, user2, users;

  beforeEach(async () => {
    [owner, user1, user2, ...users] = await ethers.getSigners();
    ContractFactory = await ethers.getContractFactory("BlancosNFT");
    contract = await ContractFactory.deploy();
    await contract.deployed();
    mintPrice = await contract.PRICE_PER_MINT();
    maxSupply = await contract.MAX_SUPPLY();
    totalSupply = await contract.totalSupply();
    baseURI = await contract.baseURI();
  });

  describe("Setup", async () => {
    it("Name should be: Blancos", async () => {
      expect(await contract.name()).to.equal("Blancos");
    });

    it("Symbol should be: BLANCO", async () => {
      expect(await contract.symbol()).to.equal("BLANCO");
    });
  });

  describe("Deployment", async () => {
    it("Should set the deployer as owner", async () => {
      expect(await contract.owner()).to.equal(owner.address);
    });

    it("Should have no initial supply", async () => {
      expect(totalSupply).to.equal(0);
    });

    it("Should have a max supply of 10 on deploy", async () => {
      expect(maxSupply).to.equal(10);
    });

    it("Should set the mint price to 0.10 eth", async () => {
      expect(mintPrice).to.equal(ethers.utils.parseEther("0.1"));
    });

    it("Should not pause sales upon deploy", async () => {
      expect(await contract.isPaused()).to.equal(false);
    });
  });

  describe("Minting", async () => {
    it("Should not mint when paused", async () => {
      await contract.togglePause();
      await expect(contract.mint(1, { value: mintPrice })).to.be.reverted;

      await contract.togglePause();
      expect(await contract.isPaused()).to.be.equal(false);

      await contract.mint(1, { value: mintPrice });
      expect(await contract.totalSupply()).to.equal(1);

      await expect(contract.connect(user1).togglePause()).to.be.reverted;
    });

    it("Should not mint incorrect token ids", async () => {
      await expect(contract.mint(0, { value: mintPrice })).to.be.reverted;
      await expect(contract.mint(11, { value: mintPrice })).to.be.reverted;
    });

    it("Should not double mint tokens", async () => {
      let id = 5;
      await contract.mint(id, { value: mintPrice });
      await expect(contract.mint(id, { value: mintPrice })).to.be.reverted;
    });

    it("Should not mint with incorrect amounts of ether", async () => {
      let lowerAmount = ethers.utils.parseEther("0.025");
      let greaterAmount = ethers.utils.parseEther("1");

      await contract.mint(1, { value: mintPrice });
      expect(await contract.totalSupply()).to.equal(1);

      await contract.mint(2, { value: greaterAmount });
      expect(await contract.totalSupply()).to.equal(2);

      await expect(contract.mint(3, { value: lowerAmount })).to.be.reverted;
    });

    it("Should mint for owner", async () => {
      await contract.mint(6, {
        value: mintPrice,
      });
      expect(await contract.totalSupply()).to.equal(1);
      expect(await contract.balanceOf(owner.address)).to.equal(1);
      expect(await contract.balanceOf(user1.address)).to.equal(0);
    });

    it("Should mint for other users", async () => {
      await contract.connect(user1).mint(1, { value: mintPrice });
      await contract.connect(user2).mint(2, { value: mintPrice });

      expect(await contract.totalSupply()).to.equal(2);
      expect(await contract.balanceOf(user1.address)).to.equal(1);
      expect(await contract.balanceOf(user2.address)).to.equal(1);
    });

    it("Should update mint price appropriately", async () => {
      let newPrice = ethers.utils.parseEther("2");
      await contract._setMintPrice(newPrice);

      await contract.mint(1, { value: newPrice });
      expect(await contract.totalSupply()).to.equal(1);

      await expect(contract.mint(9, { value: mintPrice })).to.be.reverted;
      await expect(contract.connect(user1)._setMintPrice(newPrice)).to.be
        .reverted;
    });
  });

  describe("Admin", async () => {
    it("Should set tokenURI correctly", async () => {
      let id = 4;
      await contract.mint(id, { value: mintPrice });
      expect(await contract.tokenURI(id)).to.equal(baseURI + id);

      let newURI = "https://google.com/";
      await contract._setBaseURI(newURI);
      expect(await contract.tokenURI(id)).to.equal(newURI + id);

      await expect(contract.connect(user1)._setBaseURI("ipfs://")).to.be
        .reverted;
    });

    it("Should update max supply", async () => {
      await expect(contract._setMaxSupply(maxSupply)).to.be.reverted;

      let newSupply = 50;
      await contract._setMaxSupply(newSupply);
      expect(await contract.MAX_SUPPLY()).to.equal(newSupply);

      await expect(contract._setMaxSupply(newSupply - 10)).to.be.reverted;

      await expect(contract.connect(user1)._setMaxSupply(100)).to.be.reverted;
    });

    it("Should withdraw balance for owner only", async () => {
      let ownerBalance = await ethers.provider.getBalance(owner.address);

      for (let i = 1; i <= maxSupply; i++) {
        await contract.connect(user1).mint(i, { value: mintPrice });
      }

      expect(await contract.totalSupply()).to.equal(maxSupply);

      balance = await ethers.provider.getBalance(contract.address);
      expect(mintPrice.mul(maxSupply)).to.equal(balance);

      await expect(contract.connect(user1).withdraw()).to.be.reverted;
      await contract.withdraw();
      balance = await ethers.provider.getBalance(contract.address);
      expect(balance).to.equal(0);

      // expect(ownerBalance).to.equal(ownerBalance.add(mintPrice.mul(maxSupply)));
    });
  });
});
