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
        const MSP = (await auctionInstance.getMSP.call()).toNumber();
    
        //console.log(MSP);
        assert.notEqual(MSP, '', "The MSP was not set");
      });
    
    it('Auction Duration was set', async () => {
        const auctionInstance = await Auction.deployed();
        const duration = await auctionInstance.getAuctionEndTime.call();
    
        assert.notEqual(duration, '', "The Auction duration was not set");
      });

    it('Higher bid was set successfully', async () => {
        const auctionInstance = await Auction.deployed();
        const msp = (await auctionInstance.getMSP.call()).toNumber();
        await auctionInstance.bid(20);
        const new_bid = (await auctionInstance.getHighestBid.call()).toNumber();

        //console.log(msp);
        //console.log(new_bid);
        assert(new_bid > msp, "New bid was not greater than the MSP");

    })
  });
  