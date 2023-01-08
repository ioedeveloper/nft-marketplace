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

    struct TokenData {
        string name;
        uint16 price;
        string description;
        string contactAddress;
    }

    struct Token {
        address owner;
        bytes hash;
        TokenData payload;
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

    function safeMint(address to, bytes memory hash, string memory name, uint16 price, string memory contactAddress, string memory description) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        tokensData[tokenId].owner = to;
        tokensData[tokenId].hash = hash;
        tokensData[tokenId].payload.name = name;
        tokensData[tokenId].payload.price = price;
        tokensData[tokenId].payload.contactAddress = contactAddress;
        tokensData[tokenId].payload.description = description;
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}
}
