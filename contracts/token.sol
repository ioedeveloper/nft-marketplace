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
        uint256 price;
        string description;
        string contactAddress;
        bool verified;
    }

    mapping(uint256 => Token) public tokensData;

    event MintToken (address _to, uint256 indexed _tokenId, bytes32 _data);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {
        __ERC721_init("NFT-Marketplace", "NFTM");
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}

    function publicMint (address _to, string memory hash, string memory name, uint256 price, string memory contactAddress, string memory description) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(_to, tokenId);
        tokensData[tokenId].owner = _to;
        tokensData[tokenId].ipfsHash = hash;
        tokensData[tokenId].name = name;
        tokensData[tokenId].price = price;
        tokensData[tokenId].contactAddress = contactAddress;
        tokensData[tokenId].description = description;
        tokensData[tokenId].verified = false;
        emit MintToken(_to, tokenId, "Public Mint");
    }

    function verifyMint (uint256 _tokenId) public onlyOwner {
        tokensData[_tokenId].verified = true;
    }

    function transferOwnershipTokensData (address _to, uint256 _tokenId) public {
        tokensData[_tokenId].owner = _to;
    }

}

contract MyTokenV2 is MyToken {
    function getTokenPrice (uint256 _tokenId) public view returns (uint256) {
        return tokensData[_tokenId].price;
    }
}
