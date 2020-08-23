// Project 1, Assignment 1
// https://codepen.io/leesel/pen/bGpBMPd?editors=0011

const weeklyIncome = parseInt(prompt("What is your weekly income?:"));

const foodCost = parseInt(prompt("How much is your weekly food cost?:"));
const housingCost = parseInt(prompt("How much is your weekly housing cost?:"));
const transportationCost = parseInt(prompt("How much is your weekly transportation cost?:"));
const otherCost = parseInt(prompt("How much are your other weekly costs?:"));

const yearSavings = parseInt(prompt("How much would you like to save in a year?:"));

const desiredWeeklySavings = yearSavings / 52;
const totalWeeklyCost = foodCost + housingCost + transportationCost + otherCost;

// const yearRevenue = weeklyIncome * 52;
const actualWeeklySavings = weeklyIncome - totalWeeklyCost;

let needToSave = desiredWeeklySavings - actualWeeklySavings;

if(actualWeeklySavings > desiredWeeklySavings){
    console.log("You're on track!");
} else {
    console.log("Looks like you've derailed - You need to save $" + needToSave + " more a week to get back on track.");
}