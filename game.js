const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availablesQuestions = []

let questions = [
	{
		question: "Que vaut 1+1",
		choices1: "3",
		choices1: "2",
		choices1: "1",
		choices1: "12",
		answer:2,
		
	},
		{
		question: "Que signifie mathematique",
		choices1: "science de math",
		choices2: "science de calcul",
		choices3: "science",
		choices4: "operation scientofique",
		answer:1,
		
	},
		{
		question: "Que vaut 4+1",
		choices1: "3",
		choices2: "2",
		choices3: "5",
		choices4: "12",
		answer:3,
		
	},
	{
		question: "Que vaut 1+1",
		choices1: "3",
		choices2: "2",
		choices3: "1",
		choices4: "12",
		answer:2,
		
	},
		{
		question: "Que vaut 5+1",
		choices1: "3",
		choices2: "2",
		choices3: "1",
		choices4: "12",
		answer:2,
		
	},
		
]