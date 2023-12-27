const readlineSync = require("readline-sync");
const chalk = require("chalk");
const countriesData = require("./database");
const log = console.log;

function greeting() {
    log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸");
    log(chalk.bgWhite.bold("Hello and Welcome to the CCC my friend"));
    log("🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸");
    userCountry();
}
greeting();

function userCountry() {
    let userInput;
    userInput = readlineSync.question(`${chalk.bgBlue.bold("Please enter your country name:")} `);
    for(let i = 0; i < countriesData.length; i++) {

        if(userInput === countriesData[i].name || userInput === countriesData[i].name.toLowerCase()) {
            const country = countriesData[i].name;
            const famous = countriesData[i].famousFor;
            log(`${chalk.italic.bold(country)} - ${chalk.bold(famous)}`);
            exitOrContinueFunc();
            return;
        };
    };
    log(chalk.bgRed.bold("Invalid entry, Please enter your country name"));
    userCountry();
};

function exitOrContinueFunc() {
    const exitOrContinue = readlineSync.question(`${chalk.bgMagenta.bold("Do you want to know about other countries [y/n]:")} `);
    if(exitOrContinue === "y") {
        countryCapitalCurrency();
    } else if(exitOrContinue === "n") {
        exit();
    } else {
        log(chalk.bgRed.bold("Invalid entry, Please enter [y/n] to continue"));
        exitOrContinueFunc();
    };
};

function countryCapitalCurrency() {
    const wantToKnow = readlineSync.question(`${chalk.bgCyan.bold("Enter name of the country you want to know about:")} `);
    for(let i = 0; i < countriesData.length; i++) {

        if(wantToKnow === countriesData[i].name || wantToKnow === countriesData[i].name.toLowerCase()) {
            const country = countriesData[i].name;
            const capital = countriesData[i].capital;
            const currency = countriesData[i].currency;
            log(chalk.white.bold("Country: ", country));
            log(chalk.white.bold("Capital: ", capital));
            log(chalk.white.bold("Currency: ", currency));
            exitOrContinueFunc();
            return;
        };
    };
    log(chalk.bgRed.bold("Invalid entry, Please enter country name"));
    countryCapitalCurrency();
};

function exit() {
    log("💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮");
    log(chalk.bgWhite.bold("Thank's for using CCC, Have a great day! Goodbye!"));
    log("💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮");
};