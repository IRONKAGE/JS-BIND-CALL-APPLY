const person = {
    name: 'Олег'
}
function info(phone, email) {
    console.log(`Ім'я: ${this.name}, Тел: ${phone}, Email: ${email}`)
}



function call(fn, context, ...args) {
    const uniqId = Date.now().toString() // для більшої унікальності + Math.random()
    context[uniqId] = fn
    const result = context[uniqId](...args)
    delete context[uniqId] //  видаляє ключ
    return result
}

call(info, person, 12345, 'test@gmail.com')