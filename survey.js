const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const theQuestions = [
  'What your name? Nicknames are also acceptable',
'Whats an activity you like doing?',
'What do you listen to while doing that?',
'Which meal is your favourite (eg: dinner, brunch, etc.)',
'Whats your favourite thing to eat for that meal?',
'Which sport is your absolute favourite?',
'What is your superpower? In a few words, tell us what you are amazing at!'
]
// let answerToQuestions= []

const questionAfter =()=>{

}

rl.question( theQuestions[0], (answer) => {
  const name = answer;
  rl.question(theQuestions[1], (answer)=>{
    const activity = answer;
    rl.question(theQuestions[2], (answer)=>{
      const listen = answer
      rl.question(theQuestions[3], (answer)=>{
        const meal = answer;
        rl.question(theQuestions[4], (answer)=>{
          const favoriteFood = answer
          rl.question(theQuestions[5], (answer)=>{
            const sport = answer
            rl.question(theQuestions[6], (answer)=>{
              const superpower = answer
              console.log(`${theQuestions[0]} = ${name},\n ${theQuestions[1]} = ${activity}, 
              \n ${theQuestions[2]}= ${listen}, \n ${theQuestions[3]} = ${meal}, \n${theQuestions[4]} = ${favoriteFood},
            \n ${theQuestions[5]} = ${sport}, \n ${theQuestions[6]} = ${superpower}`)
              rl.close()
            })
          })
        })

    })
  })


})

});