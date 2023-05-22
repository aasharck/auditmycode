// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract AuditMyCode {

    struct Project{
        address owner;
        uint256 maxBudget;
        address token;
        string info;
        address auditor;
        bool hired;
    }

    struct Proposals{
        address auditor;
        uint256 auditPrice;
    }

    uint256 public projectId;
    mapping(uint256 => Project) public projects;
    mapping(uint256 => Proposals[]) public appliedAuditors;

    event AuditRequested(address indexed projectOwner, uint256 projId, uint256 maximumBudget);
    event AuditorHired(address indexed projectOwner, address indexed auditor, uint256 projId, uint256 priceOfAudit);
    event ProposalSubmitted(address indexed auditor, uint256 projId);

    // Project call this function to list their project in the marketplace
    // It accepts the maximum budget, a string with information about the audit
    function requestAudit(uint256 maxBudget_, string memory info_, address token_) external{
        uint256 id = ++projectId;
        projects[id].owner = msg.sender;
        projects[id].maxBudget = maxBudget_;
        projects[id].info = info_;
        projects[id].token = token_;
        emit AuditRequested(msg.sender, id, maxBudget_);
    }

    // called by anyone to audit the particulat projectId
    // the price will be listed will be what the owner of the project has given.
    function propose(uint256 projectId_, uint256 yourPrice_) external{
        // don't allow multiple proposals from the same auditr
        // require();
        appliedAuditors[projectId_].push(Proposals(msg.sender, yourPrice_));
    }

    // can only be called by owner of projectId
    function hireAuditor(uint256 projectId_) external{
        // require(condition);
        // appliedAuditors[projectId_].auditor
        // projectId[id].auditor = 
    }


}
