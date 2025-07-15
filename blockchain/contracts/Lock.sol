// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lock {
    uint256 private s_unlockTime;
    address private s_owner;

    event Withdrawal(uint256 amount, uint256 when);

    constructor(uint256 unlockTime_) payable {
        require(unlockTime_ > block.timestamp, "Unlock time should be in the future");
        s_unlockTime = unlockTime_;
        s_owner = msg.sender;
    }

    function unlockTime() public view returns (uint256) {
        return s_unlockTime;
    }

    function owner() public view returns (address) {
        return s_owner;
    }

    function withdraw() public {
        require(block.timestamp >= s_unlockTime, "You can't withdraw yet");
        require(msg.sender == s_owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);
        payable(s_owner).transfer(address(this).balance);
    }
}
