// const person = {
//     name: 'Олег'
// }

// function info() {
//     console.log(`Ім'я: ${this.name}`)
// }

// // info.bind(person)

// // const bound = info.bind(person)
// // bound()

// const bound = info.bind(person)()


const person = {
    name: 'Олег'
}
function info(phone, email) {
    console.log(`Ім'я: ${this.name}, Тел: ${phone}, Email: ${email}`)
}


// // Demonstration
// info.bind(person)(12345, 'test@gmail.com')
// info.bind(person, 12345)('test@gmail.com')
// info.bind(person, 12345, 'test@gmail.com')()
// console.log(person)



// Спосіб 1 - Простий
// // function bind(fn, context) {
// //     return fn.bind(context)
// // }

// function bind(fn, context, ...rest) {
//     return fn.bind(context, ...rest)
// }



// Спосіб 2 - Без вбудованих методів
// function bind(fn, context, ...rest) {
//     return function() {
//         const uniqId = Date.now().toString() // для більшої унікальності + Math.random()
//         context[uniqId] = fn
//         const result = context[uniqId]()
//         delete context[uniqId] //  видаляє ключ
//         return result
//     }
// }

// function bind(fn, context, ...rest) {
//     return function(...args) {
//         const uniqId = Date.now().toString() // для більшої унікальності + Math.random()
//         context[uniqId] = fn
//         const result = context[uniqId](...rest.concat(args))  //з параметром `...rest`, є н'юанси
//         delete context[uniqId] //  видаляє ключ
//         return result
//     }
// }

// console.log(person) //Для 2 способу



// Спосіб 3 - ES5
// function bind(fn, context) {
//     const rest = Array.prototype.slice.call(arguments, 2)
//     return function() {
//         const args = Array.prototype.slice.call(arguments)
//         return fn.apply(context, rest.concat(args)) // замість `apply` можна спробувати застосувати `call`
//     }
// }



// Спосіб 4 - ES6
// function bind(fn, context, ...rest) {
//     return function(...args) {
//         return fn.apply(context, rest.concat(args))
//     }
// }

function bind(fn, context, ...rest) {
    return function(...args) {
        return fn.call(context, ...rest.concat(args))
    }
}



// Demonstration
bind(info, person)(12345, 'test@gmail.com')
bind(info, person, 12345)('test@gmail.com')
bind(info, person, 12345, 'test@gmail.com')()