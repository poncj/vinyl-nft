// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';

contract VinylNFT is ERC721Enumerable, Ownable {    

    using Strings for uint256;

    uint256 maxSupply = 10;
    uint256 cost = 0.0001 ether;
    string baseURI = "ipfs://QmcUaMbxeAdW7N263FJkMmwG4HFUQsqsurz345jt1kA5Fn/"; 

    constructor() ERC721("VinylNFT","VNFT") {
        
    }

    function _baseURI() internal override view returns (string memory) {
        return baseURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireMinted(tokenId);
        return string(abi.encodePacked(baseURI, "img", tokenId.toString(), '.json'));
    }

    function changeBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function safeMint(address _to) external payable {
        uint256 _currentSupply = totalSupply();
        require(_currentSupply < maxSupply, "You reached max supply");
        require(msg.value == cost, "Add valid cost amount");
        _safeMint(_to, _currentSupply);
    }

    function withdraw() external onlyOwner() {
        /*
            (bool success, ) = payable(msg.sender).call{
                value: address(this).balance
            }("");
            require success;
        */
       payable(msg.sender).transfer(address(this).balance);
    }

}