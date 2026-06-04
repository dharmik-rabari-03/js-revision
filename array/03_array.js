//push manually

const fruit = ["mango", "pinapple", "cherry", "apple"]

console.log(fruit)

function pushmanually() {

    let count = 0

    for (let i of fruit) {

        count++

    }

    console.log(count)
    fruit[count] = "banana"
    console.log(fruit)

}

pushmanually()

//pop manually

function popManually() {

    fruit.length = fruit.length - 1

    console.log(fruit)


}

popManually()

//shift manually

function shiftManually() {



    for (let i = 0; i < fruit.length -1; i++) {

        fruit[i] = fruit[i + 1]
    }

    fruit.length--

    console.log(fruit)

}

shiftManually()

//unshift manually

function unshiftManually(){


for (let i = fruit.length-1; i >= 0; i--) {

    fruit[i+1]=fruit[i]

}

fruit[0]="watermelon"

console.log(fruit)
}

unshiftManually()