pragma solidity ^0.8.7;

import './marketplace.sol';

contract MyTokenV2 is MyToken {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdCounter;

    struct NFT {
        address owner;
        TokenData payload;
    }

    mapping(uint256 => Token) public nftData;

    function safeMint(address to, string memory name, uint16 price, string memory contactAddress, string memory description) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        nftData[tokenId].owner = to;
        nftData[tokenId].payload.name = name;
        nftData[tokenId].payload.price = price;
        nftData[tokenId].payload.contactAddress = contactAddress;
        nftData[tokenId].payload.description = description;
    }
}