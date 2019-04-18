var Courses = artifacts.require("./Courses.sol");

contract('Courses', function(accounts) {

  it("should set Instructor", function(done) {
    Courses.deployed().then(function(contract) {
      contract.setInstructor(accounts[0], 100, "Leo", "Ta");
      return contract.instructors.call(accounts[0]);
    }).then(function(result){
      assert.isTrue(result[0].toNumber() === 100);
      assert.isTrue(result[1] === "Leo");
      assert.isTrue(result[2] === "Ta");
      done();
    })
  });

  it("should return account", function(done) {
    Courses.new().then(function(contract) {
      contract.setInstructor(accounts[0], 100, "Leo", "Ta");
      return contract.getInstructors.call();
    }).then(function(result){
      var accountsArray = [accounts[0]];
      assert((result.length == accountsArray.length) && result.every(function(element, index) {
      return element === accountsArray[index]; 
      }))
      done();
    })
  });


  it("should return instructor", function(done) {
    Courses.new().then(function(contract) {
      contract.setInstructor(accounts[0], 100, "Leo", "Ta");
      return contract.getInstructor.call(accounts[0]);
    }).then(function(result){
      assert(result[0].toNumber() === 100);
      assert(result[1] === "Leo");
      assert(result[2] === "Ta");
      done();
    })
  });

  it("should return number of instructor", function(done) {
    Courses.new().then(function(contract) {
      contract.setInstructor(accounts[0], 100, "Leo", "Ta");
      contract.setInstructor(accounts[1], 300, "Juan", "Banda");
      return contract.countInstructors.call();
    }).then(function(result){
      assert(result.toNumber() === 2);
      done();
    })
  });
});
