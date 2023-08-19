// logic: in the plsease deposite section, after clicking the button of "deposte" the code will 
// * add deposited money to the deposite dsection, 
// * and the total balance will aLSO INCREASE

// console.log('deposite buttonn clicked')

// step 1: add event listerer to the deposte button
document.getElementById('btn-deposite').addEventListener('click', function () {
    // console.log('deposite buttonn clicked')
    // step 2: Get the deposite amount ffrom the deposiute input field
    // note: to get the value from input add: (.value)
    const depositeField = document.getElementById('deposite_field');
    // new deposite total amount
    const newDepositeAmmountString = depositeField.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountString);
    // console.log('newDepositeAmmountString')
    // step 3: Get the current deposite total amount
    // note: for non-input(element other than input, textarea) use (.innerText) to get the text, if not input
    const depositeTotalElement = document.getElementById('depo-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    // calculation of current depposite total

    // step 4: set numbers to get the total (sum) deposite previousDepositeTotal + newDepositeAmmount
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmmount;
    depositeTotalElement.innerText = currentDepositeTotal;

    // step 5: Get the balance current total
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalElemenString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElemenString);



    // step 6: calculate the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmmount;
    
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;



    // *********
    // STEP 7: CLEARN THE DEPOSITE FiELD
    depositeField.value = '';
})
