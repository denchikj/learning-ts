//These(A, B) = A+B+A*B;
// import { both, that, These, this_ } from 'fp-ts/lib/These';
// import {array} from 'fp-ts/lib/Array'
// import { error, log, warn } from 'fp-ts/lib/Console';
// import { io } from 'fp-ts/lib/IO';

// const greet = (name: string, age: number): These<Error, string> => {
//     if (age <= 0) {        
//         return this_(new Error(`You age cannot be less than zero! You've entered: ${age}`));
//     }
    
//     const greeting = `Hello, ${name}!`;
//     if (age < 18) {
//         return both(new Error('You cannot use our service at that age!'), greeting);
//     }

//     return that(greeting);
// }

// const howIsAlice = greet('Alise', 14)
// const howIsCharlie = greet('Charlie', 20)
// const howIsBob = greet('Bob', -17)

// array.sequence(io)([howIsAlice, howIsCharlie, howIsBob]
//     .map((person) => person.fold(
//         (err) => error(err.message),
//         (greeting) => log(greeting),
//         (err, greeting) => warn(err.message).chain(() => log(greeting)),
//     ))).run()