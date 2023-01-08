pragma solidity ^0.8.7;

import './marketplacev2.sol';

contract MyTokenV3 is MyTokenV2 {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdCounter;
    
    function publicMint (address to, string memory name, uint16 price, string memory contactAddress, string memory description) public {
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