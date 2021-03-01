const hello = artifacts.require('./Auction');
//const beneficiary = 0x8c83e4dfe79e07aab6a637a6fd728add9bad595c;

const auctionSettings = {
    _biddingTime: 5,
    //_beneficiary = accounts[0],
    _MSP: 15,
    _productname: "Tomato"

}

module.exports = function(deployer){
    deployer.deploy(hello, auctionSettings._biddingTime, auctionSettings._MSP, auctionSettings._productname );
};