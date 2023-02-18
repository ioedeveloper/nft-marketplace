// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./token.sol";
import "hardhat/console.sol";

contract Marketplace is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    MyTokenV2 public token;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(MyTokenV2 _token) initializer public {
        __Ownable_init();
        __UUPSUpgradeable_init();
        token = _token;
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}

    function buy (address _from, address payable _to, uint256 _tokenId) public payable {
        console.log("msg.value: ", msg.value);
        uint256 commission = (msg.value * 10) / 100;
        uint256 _tokenPrice = token.getTokenPrice(_tokenId);
        console.log("tokenPrice: ", _tokenPrice);

        require(msg.value >= _tokenPrice, "Insufficient funds to purchase NFT");
        (bool sent, ) = _to.call{value:msg.value}("");
        require(sent, "Ether transfer failed");
        transferTokenOwnership(_from, _to, _tokenId);
    }

    function transferTokenOwnership (address _from, address _to, uint256 _tokenId) public {
        token.transferFrom(_from, _to, _tokenId);
        token.transferOwnershipTokensData(_to, _tokenId);
    }
}
