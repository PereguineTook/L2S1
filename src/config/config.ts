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
    cid: "bafybeidan4gd7o2myxv6nvhzyppposkquupint2ggamw3n26ujmjkzqjnm", // Sharkbods 187 code
    nftId: [
      "0xe64fff3c7d8e372ff5a1daefacb98322bb41c619442d56a310760865ac673291",
    ], // You need to own Sharkbods 187 to unlock
  },
];

export { unlockables };
