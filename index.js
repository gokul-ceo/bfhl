const express = require('express')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const port = process.env.PORT || 8080;
function isletter(str){
    return str.length === 1 && str.match(/[a-z]/i)
}
function greatestalpha(array){
    let charactercode = [];
    let highest = []
    array.forEach(element => {
        charactercode.push(element.charCodeAt())
    })
    let sortedarray = charactercode.sort()
    console.log("Sorted array: ",sortedarray)
    const max = sortedarray[sortedarray.length - 1]
    console.log("Max: ",max)
    const char = String.fromCharCode(max)
    // console.log(char)
    highest.push(char)
    if(sortedarray.length > 1){
        return highest;

    }else{
        highest = []
        return highest
    }
} 
// function largestCharacter(arr)
// {

//     let uppercase = new Array(26);
//     uppercase.fill(false);
//     let lowercase = new Array(26);
//     lowercase.fill(false);

//     for (let c = 0; c < arr.length; c++) {

//         if (arr == arr.toLowerCase())
//             lowercase[arr.charCodeAt() - 97] = true;

//         if (arr == arr.toUpperCase())
//             uppercase[arr.charCodeAt() - 65] = true;
//     }
//     for (let i = 25; i >= 0; i--) {
//         if (uppercase[i] && lowercase[i])
//             return String.fromCharCode(i +
//             'A'.charCodeAt()) + "";
//     }
// }
app.post('/bfhl',(req,res)=>{
    let numbers = [];
let alphabets = [];
    const requestbody = req.body.data;
    console.log("request body: ",requestbody)
    requestbody.forEach(element => {
        if(isletter(element)){
            alphabets.push(element)
        }else{
            numbers.push(element)
        }
        
    });
    console.log("Alphabets: ",alphabets)
    console.log("Numbers: ",numbers)
    const highest = greatestalpha(alphabets)
    res.json({
        "is_success": true,
"user_id": "gokulg_20062003",
 "email" : "gg4585@srmist.edu.in",
"roll_number":"RA2011050010019",
"numbers": numbers,
"alphabets": alphabets,
"highest_alphabet": highest
    })

})
app.get('/bfhl',(req,res)=>{
    res.json({
    operation_code:1
    })
})
app.listen(port,()=>{
    console.log('Server is running')
})
