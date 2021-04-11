const contracts = {
  //Mainnet
  1: {
    ERC: { PEER: "0x1", PEERLP: "0x1", USDT: "0x1" },
    POOL: { PEER: "0x1", PEERLP: "0x1" }
  },
  //Ropsten
  3: {
    ERC: {
      PEER: "0x29854184bAa20428219180b2c79986febE556AA1",
      PEERLP: "0x46e3909253bb715fdc324efeb8c52df663eca22e",
      USDT: "0x6D311DF0e297061856C600F4b742B6c712290ACE"
    },
    POOL: { PEER: "0x9A4985b1c753549174958F5ADd5139884C972AE8", PEERLP: "0x1" }
  }
};

export default contracts;
