// Concatenando arrays

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
// const a3 = a1.concat(a2, [7, 8, 9], 'Luis')
// ... rest -> ... spread (spread é bem melhor do que o concat)
const a3 = [...a1,'Luiz', ...a2, ...[7, 8, 9]]

console.log(a3)





