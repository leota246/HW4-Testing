var Migrations = artifacts.require("./Migrations.sol");
var Courses = artifacts.require('./Courses.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Courses);
};