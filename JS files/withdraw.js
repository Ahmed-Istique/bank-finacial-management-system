// step 1: add event listerer to the deposte button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // for test result: console.log('mf')

    // step 2: Get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw_field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);


    // step 3: Get the current deposite total amount
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawpTotalString = withdrawTotalAmount.innerText;
    const previousWithdrawpTotalAmount = parseFloat(previousWithdrawpTotalString);

    // step 4: set numbers to get the total deposite , sum of the newWithdrawAmmount + previousWithdrawpTotalAmount
    const currentWithdrawTotal = newWithdrawAmmount + previousWithdrawpTotalAmount;
    withdrawTotalAmount.innerText = currentWithdrawTotal;

    // step 5: Get the balance current total
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalElemenString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElemenString);


    // step 6: calculate the total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // STEP 7: CLEARN THE withdraw FiELD
    withdrawField.value = '';













})