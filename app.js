const prompt= require("prompt")
/*
prompt.start()

prompt.get('color', function(err, result){
    if (err){
        return onErr(err);
    }
    console.log("Did you say " + result.color);
})
*/
const number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let first_number = number_list[Math.floor(Math.random()*number_list.length)]
let second_number = number_list[Math.floor(Math.random()*number_list.length)]
console.log(first_number, second_number)

let answer = prompt.get('Answer', function(err, result){
    if (err){
        return onerror(err);
    }
    console.log(answer)
})
