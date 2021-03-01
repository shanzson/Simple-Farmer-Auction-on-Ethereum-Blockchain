//const { assert } = require("console");

var Auction = artifacts.require("Auction");

contract('Auction', (accounts) => {
    it('Farmer should call the Contract', async () => {
      const auctionInstance = await Auction.deployed();
      const farmer = await auctionInstance.getFarmer.call();
  
      console.log(farmer);
      assert.notEqual(farmer, '', "The Farmer did not call the Contract");
    });

    it('MSP should be set', async () => {
        const auctionInstance = await Auction.deployed();
        const MSP = await auctionInstance.getMSP.call();
    
        console.log(MSP);
        assert.notEqual(MSP, '', "The MSP was not set");
      });
    
    it('Auction Duration was set', async () => {
        const auctionInstance = await Auction.deployed();
        const duration = await auctionInstance.getAuctionEndTime.call();
    
        console.log(duration);
        assert.notEqual(duration, '', "The Auction duration was not set");
      });
  });
  