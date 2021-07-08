/**
 * Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c).
 * Always remember that Closures make currying possible as the argument above can be used
 */

function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}

console.log('Curry Product ==> ', multiply(1)(2)(3))

// Advance use case
function discount(discount) {
    return (price) => {
        return price * discount;
    }
}

// we can design such ready to use functions from a main curried function
const twentyPcDiscount = discount(0.2)
