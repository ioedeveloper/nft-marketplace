// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

contract MyToken is Initializable, ERC721Upgradeable, OwnableUpgradeable, UUPSUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdCounter;

    struct Token {
        address owner;
        string ipfsHash;
        string name;
        uint16 price;
        string description;
        string contactAddress;
        bool verified;
    }

    mapping(uint256 => Token) public tokensData;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {
        __ERC721_init("NFT-Marketplace", "NFTM");
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function safeMint(address to, string memory hash, string memory name, uint16 price, string memory contactAddress, string memory description) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        tokensData[tokenId].owner = to;
        tokensData[tokenId].ipfsHash = hash;
        tokensData[tokenId].name = name;
        tokensData[tokenId].price = price;
        tokensData[tokenId].contactAddress = contactAddress;
        tokensData[tokenId].description = description;
        tokensData[tokenId].verified = true;
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}

    function publicMint (address to, string memory hash, string memory name, uint16 price, string memory contactAddress, string memory description) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        tokensData[tokenId].owner = to;
        tokensData[tokenId].ipfsHash = hash;
        tokensData[tokenId].name = name;
        tokensData[tokenId].price = price;
        tokensData[tokenId].contactAddress = contactAddress;
        tokensData[tokenId].description = description;
        tokensData[tokenId].verified = false;
    }

    function verifyMint (uint256 tokenId) public onlyOwner {
        tokensData[tokenId].verified = true;
    }
}
