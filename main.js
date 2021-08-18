console.log('Hello User!!')

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = Math.ceil(Math.random()*31)
const randomMonth = months[Math.ceil(Math.random()*12)]
console.log(`Is today... ${randomMonth} ${days}?`)