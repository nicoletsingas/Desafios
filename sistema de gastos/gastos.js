let family = {
    incomes: [3000, 2500],
    expenses: [100, 100, 1000, 500, 80.50, 100]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    const total = calculateIncomes - calculateExpenses

    let balanceText = "negativo"

    if(total >=0){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance() //executa a função