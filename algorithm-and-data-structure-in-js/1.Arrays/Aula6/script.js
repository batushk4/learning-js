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

// Removendo elementos do final 
numbers.pop()

// Removendo elementos do começo
numbers.shift()

// remover elementos de uma forma específica

numbers.splice(3, 3)

// Inserindo elementos em uma posição específica
numbers.splice(3, 0, 4, 3, 5, 25)

console.log(numbers)






