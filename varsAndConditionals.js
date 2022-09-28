/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 45
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("John Snow has better attack than Jamie Lannister")
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than jon Snow")
} else {
    console.log("Jamie Lannister has better attack than Jon Snow")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

//jamie lannister has attacked

if (jonSnowHealth <= jamieLannisterAttack) {
    jonSnowHealth = 0
    console.log("Jon Snow has been slain")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    //jonsSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
    //console.log('here is health' + jonSnowHealth)
    //console.log('here is health again)
}
//Jon picks up a sheild, add to his defense
jonSnowDefense += 25

//Jamie attacks again
if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.assert.log("Jon Snow has been slain")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
}