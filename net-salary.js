const prompt = require('prompt-sync')({sigint: true});
let basicSalary =prompt("enter your basic salary") ;
let benefits =prompt("enter your benefits received");
let grossSalary=parseInt(basicSalary)+ parseInt(benefits);

//function to calculate nhif deductions
function nhif() {
    if (grossSalary >= 0 && grossSalary <= 5999) {
        return 150
    }
    else if (grossSalary >= 6000 && grossSalary <= 7999) {
        return 300;
    } 
    else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return 400;
    } 
    else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return 500;
    } 
    else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return 600;
    } 
    else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return 750;
    } 
    else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return 850;
    } 
    else if (grossSalary >= 30000 && grossSalary <= 34999) {
        return 900;
    } 
    else if (grossSalary >= 35000 && grossSalary <= 39999) {
        return 950;
    } 
    else if (grossSalary >= 40000 && grossSalary <= 44999) {
        return 1000;
    } 
    else if (grossSalary >= 45000 && grossSalary <= 49999) {
        return 1100;
    } 
    else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return 1200;
    } 
    else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return 1300;
    } 
    else if (grossSalary >= 70000 && grossSalary <= 79999) {
        return 1400;
    } 
    else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return 1500;
    } 
    else if (grossSalary >= 90000 && grossSalary <= 99999) {
        return 1600;
    } 
    else if (grossSalary >= 10000) {
        return 1700;
    } 
    else {
        return 0;
    }
}

//function to calculate nssf deduction
function nssf() {
    if (grossSalary <= 6000){
        return 0.06 * grossSalary;
    } 
    else if (grossSalary > 6000 && grossSalary <= 18000){
        return 0.06 * (grossSalary - 6000);
    } 
    else if (grossSalary > 18000) {
        return 720;
    } 
    else {
        return "";
    }
}

//function to calculate payee
function paye(){ 
    if(grossSalary <= 24000){
        return  ( 0.1 * grossSalary);
    }
    else if(grossSalary > 24000 && grossSalary <= 32333){
        return (0.25 * grossSalary);
    }
      else if(grossSalary > 32333){
        return (0.3 * grossSalary);
      }
}

//get the net salary
let netSalary=grossSalary-nhif()-nssf()-paye();
console.log(`gross Salary:${grossSalary};  NHIF:${nhif()};  NSSF:${nssf()};  Payee:${paye()}; net Salary:${netSalary};`);







