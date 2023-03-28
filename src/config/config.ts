import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeidan4gd7o2myxv6nvhzyppposkquupint2ggamw3n26ujmjkzqjnm", // HTML blog example
    nftId: [
      "0x7aa5193e3ed186ee1f6518629a7d69ea73fbcf26c3afdc10bf8a2b58f5d80f58",
    ], // You need to own 'GM #1' to unlock this.
  },
];

export { unlockables };
