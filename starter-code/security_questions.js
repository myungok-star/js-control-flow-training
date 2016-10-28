console.log("security_questions.js loaded");

var securityQuestions = [
  {question: "In what city or town did your mother and father meet?", expectedAnswer: "San Francisco"},
  {question: "What was your high school mascot?", expectedAnswer: "Huskey"},
  {question: "Who is your favorite movie character?", expectedAnswer: "Furiosa"},
  {question: "What year did you buy your first car?", expectedAnswer: "2016"}
]

//console.log(securityQuestions[0].question);
for(var i = 0; i <= 4; i++) {
  console.log("hello");

}

//
// var userAnswer = "";
// var wrongUser= false; //How do I come up with this variable?
//
// for (var i=0; i < securityQuestions.length; i++){
//     userAnswer = prompt(securityQuestions[i].question);
//       if (userAnswer !== securityQuestions[i].expectedAnswer){
//           alert("Incorrect security quesiton response!");
//
//       wrongUser = true; //Why do we need this assignment?
//         break;
//       }
//
// }
//
// if (wrongUser) {
//   console.log("Stop!");
// }
