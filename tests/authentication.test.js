const chai = require("chai");
const email = 'test@nicasource.com';
const password = 'test123';

describe("Login Form", () => {
  before(() => {
    browser.url(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
  });

  it("should have empty fields", () => {
    let emailContent = $("#email").getValue();
    let passwordContent = $("#passwd").getValue();

    //Check if fields are empty
    chai.expect(!emailContent && !passwordContent).to.equal(true);

    //Set the values for login
    $("#email").addValue(email);
    $("#passwd").addValue(password);
  });

  it("should set the correct credentials", () => {
    let emailContent = $("#email").getValue();
    let passwordContent = $("#passwd").getValue();

    //Check if fields are now filled
    chai
      .expect(
        emailContent == email && passwordContent == password
      )
      .to.equal(true);
  });

  it("should login with correct credentials", () => {
    //Click on the login button  
    $("#SubmitLogin").click();

    $(".logout").waitForDisplayed();

    //Check if the user started session
    chai.expect($(".logout").getText()).to.equal("Sign out");
  });
});
