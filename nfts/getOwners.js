import { Alchemy } from 'alchemy-sdk';

const alchemy = new Alchemy();

// Devs for Revolution "Developer DAO" contract address.
const ADDRESS = '0x25ed58c027921E14D86380eA2646E3a1B5C55A8b';

export async function getOwners() {
  const options = {
    // Omit the NFT metadata for smaller payloads.
    omitMetadata: true,
  }
  const nftAsyncIterator = alchemy.nft.getNftsForContractIterator(ADDRESS, options)

  for await (const nft of nftAsyncIterator) {
    const response = await alchemy.nft.getOwnersForNft(nft.contract.address, nft.tokenId)
    console.log('owner:', response.owners, 'tokenId', nft.tokenId)
  }
}