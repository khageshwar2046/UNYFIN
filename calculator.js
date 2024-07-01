const SalaryAmount = document.getElementById("salary_amount");
const Monthlyemi = document.getElementById("monthly_memi");
const cardoutstand = document.getElementById("card_outstanding");
const Draftlimit =document.getElementById("draft_limit");

const totaldu = document.querySelector(".deductions");
const applefoir = document.querySelector(".applicable_foir");
const appmulti = document.querySelector(".applicable_multi");
const loanemi = document.querySelector(".loan_emi");

const maxmulti = document.querySelector(".mx_multi");
const emiglig = document.querySelector(".emi_eligibility");
const maxemi = document.querySelector(".maxemi_eligibility");

const submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", function(){

amount = SalaryAmount.value >= 25000 && SalaryAmount.value < 40000 ? "50" : SalaryAmount.value >= 40000 && SalaryAmount.value < 50000 ? "55" : SalaryAmount.value >= 50000 && SalaryAmount.value < 75000 ? 60 : SalaryAmount.value >= 75000 ? "70" : "0" ;
emi = Monthlyemi.value;
card = (cardoutstand.value)*5/100; // card outstanding %
draft = (Draftlimit.value)*1.5/100; //Over Draft Limit %



deductions = Number(emi) + Number(card) + Number(draft);
applicable_foir =(amount);
pun = SalaryAmount.value >=25000 && SalaryAmount.value < 40000 ? "15" : SalaryAmount.value >=40000 && SalaryAmount.value < 50000 ? "18" : SalaryAmount.value >=50000 && SalaryAmount.value < 75000 ? "20" : SalaryAmount.value >=75000 ? "24" : "0";
applicable_multi = pun ;
mx_multi = SalaryAmount.value * pun;
loand =(SalaryAmount.value) * (applicable_foir);
kp = 100
loan_emi = (loand) / kp;
emi_eligibility = (loan_emi - deductions);
love = emi_eligibility <= loan_emi ? emi_eligibility : loan_emi ;
maxemi_eligibility = love;
//console.log(deductions);
//console.log(applicable_foir);
//console.log(applicable_multi);
//console.log(loan_emi);
//console.log(mx_multi);
//console.log(emi_eligibility);
//console.log(maxemi_eligibility);
totaldu.innerHTML = Math.floor(deductions);
geeta = "\u0025";
applefoir.innerHTML = applicable_foir+geeta;
appmulti.innerHTML = Math.floor(applicable_multi);
loanemi.innerHTML = Math.floor(loan_emi);
maxmulti.innerHTML = Math.floor(mx_multi);
emiglig.innerHTML = Math.floor(emi_eligibility);
maxemi.innerHTML = Math.floor(maxemi_eligibility);
      
});
