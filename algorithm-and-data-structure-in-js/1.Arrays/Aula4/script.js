var numbers = [0,1,2,3,4,5,6,7,8,9]

// * Não é o melhor método 
//numbers[10] = 10
numbers[numbers.length] = 10
numbers[numbers.length] = 11

// Método nativo para adicionar no final do array
numbers.push(12)
numbers.push(13)
numbers.push(14)
numbers.push(15)

// Método nativo para adicionar antes
numbers.unshift(-1)
numbers.unshift(-2)
numbers.unshift(-3)
numbers.unshift(-4)

//subescreve o valor anterior
numbers[0] = -40

console.log(numbers)






