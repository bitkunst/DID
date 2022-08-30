// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import './IDID.sol';
import '../../node_modules/@openzeppelin/contracts/access/Ownable.sol';

contract DID is IDID, Ownable {

    // identifier => UserInfo
    mapping(string => UserInfo) private user;

    // identifier => true/false
    mapping(string => bool) private isRegisteredUser;

    function registerUser(string memory _identifier, UserInfo memory _userData) public override {

        require(!isRegisteredUser[_identifier]);
        
        UserInfo memory userInfo;

        userInfo.userCode = _userData.userCode;
        userInfo.name = _userData.name;
        userInfo.birth = _userData.birth;
        userInfo.gender = _userData.gender;
        userInfo.email = _userData.email;

        user[_identifier] = userInfo;
        isRegisteredUser[_identifier] = true;
    }

    function withdrawUser(string memory _identifier) public override {
        require(isRegisteredUser[_identifier]);

        delete user[_identifier];
        isRegisteredUser[_identifier] = false;
    }

    function isRegistered(string memory _identifier) public view override returns (bool) {
        return isRegisteredUser[_identifier];
    }

    function getUserInfo(string memory _identifier) public view override onlyOwner returns (UserInfo memory) {
        require(isRegisteredUser[_identifier]);

        return user[_identifier];
    }
}