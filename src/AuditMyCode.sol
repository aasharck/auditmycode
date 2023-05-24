// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract AuditMyCode {
    using SafeERC20 for IERC20;

    struct Project{
        address owner;
        uint256 maxBudget;
        address token;
        string info;
        mapping(address => uint256) auditorPrice;
        address auditor;
        bool finished;
    }

    uint256 public projectId;
    mapping(uint256 => Project) public projects;

    event AuditRequested(address indexed projectOwner, uint256 projId, uint256 maximumBudget);
    event AuditorHired(address indexed projectOwner, address indexed auditor, uint256 projId, uint256 priceOfAudit);
    event ProposalSubmitted(address indexed auditor, uint256 projId);

    // Project call this function to list their project in the marketplace
    // It accepts the maximum budget, a string with information about the audit
    function requestAudit(uint256 maxBudget_, string memory info_, address token_) external{
        uint256 id = ++projectId;
        projects[id].owner = msg.sender;
        projects[id].maxBudget = maxBudget_;
        projects[id].token = token_;
        projects[id].info = info_;
        emit AuditRequested(msg.sender, id, maxBudget_);
    }

    // called by anyone to audit the particulat projectId
    // the price listed will be what the owner of the project should give to the auditor
    function propose(uint256 projectId_, uint256 yourPrice_) external{
        require(!projects[projectId_].finished, "Auditor Hired for this audit");
        require(yourPrice_ > 0, "Price cannot be 0");
        require(projects[projectId_].auditorPrice[msg.sender] <= 0, "Proposal already given for this project");
        projects[projectId_].auditorPrice[msg.sender] = yourPrice_;
        emit ProposalSubmitted(msg.sender, projectId_);
    }

    // if ERC20, approve needs to be called before calling this
    function hireAuditor(uint256 projectId_, address auditorAddress) external payable{
        require(!projects[projectId_].finished, "Already Hired");
        require(projects[projectId_].owner == msg.sender, "not owner");
        require(projects[projectId_].auditorPrice[auditorAddress] > 0, "No proposal from given auditor");
        projects[projectId_].auditor = auditorAddress;
        projects[projectId_].finished = true;
        if(projects[projectId_].token == address(0)){
            require(msg.value >= projects[projectId_].auditorPrice[auditorAddress], "Money sent is wrong");
        }else{
            IERC20(projects[projectId_].token).safeTransferFrom(msg.sender, auditorAddress, projects[projectId_].auditorPrice[auditorAddress]);
        }
        emit AuditorHired(msg.sender, auditorAddress, projectId_, projects[projectId_].auditorPrice[auditorAddress]);
    }

    function cancelAudit(uint256 projectId_) external{
        require(!projects[projectId_].finished, "Already Hired");
        require(projects[projectId_].owner == msg.sender, "not owner");
        projects[projectId_].finished = true;
    }


}
