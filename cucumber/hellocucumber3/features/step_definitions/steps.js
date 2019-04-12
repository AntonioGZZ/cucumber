const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function SergioIsHere(today) {
    if (today === "Friday" | "Monday") {
        return "Isn't here";
    } else {
        return "Is here";
    }
}

Given('today is {string}', function(givenDay) {
    this.today = givenDay;
});

When('Is Sergio with patricia?', function() {
    this.actualAnswer = SergioIsHere(this.today);
});

Then('Sergio {string}', function(expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});