// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/AuditMyCode.sol";

contract CounterScript is Script {
    AuditMyCode myContract;
    function setUp() public {
        
    }

    function run() public{
        vm.broadcast();
        myContract = new AuditMyCode();
    }

}
