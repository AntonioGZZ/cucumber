const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFridayOrMonday(today) {
    if (today === "Friday" | "Monday") {
        return "Nothing";
    } else {
        return "Hello";
    }
}

Given('today is Monday or Friday', function(givenDay) {
    this.today = givenDay;
});

When('I check if today is Monday or Friday', function() {
    this.actualAnswer = isItFridayOrMonday(this.today);
});

Then('I go to his workspace and say {string}', function(expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});