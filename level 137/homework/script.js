const num = new Map
num.set(1,2,3,4,5)
num.has(3,5)
num.size()
num.delete(3)
num.clear

num.forEach(value => {
    console.log(value)
})