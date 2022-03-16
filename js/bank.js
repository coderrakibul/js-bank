document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositPrevious = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + depositPrevious;

    const balance = document.getElementById("balance");
    const balanceText = balance.innerText;
    const balanceTotal = parseFloat(balanceText);
    balance.innerText = depositAmount + balanceTotal;

    depositInput.value = "";
});

document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);

    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawPrevious = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + withdrawPrevious;

    const balance = document.getElementById("balance");
    const balanceText = balance.innerText;
    const balanceTotal = parseFloat(balanceText);
    balance.innerText = balanceTotal - withdrawAmount;

    withdrawInput.value = "";
})
