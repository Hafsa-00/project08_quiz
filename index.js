#! /usr/bin/env node
import inquirer from 'inquirer';
//MCQ's quetions
const questions = [{
        name: 'userAnswer1',
        type: 'list',
        message: 'What is the capital of Pakistan?',
        choices: ['Islamabad', 'Karachi', 'Lahore', 'Rawalpindi'],
    },
    {
        name: 'userAnswer2',
        type: 'list',
        message: 'Which is the largest city of Pakistan?',
        choices: ['Islamabad', 'Karachi', 'Lahore', 'Rawalpindi'],
    },
    {
        name: 'userAnswer3',
        type: 'list',
        message: 'Which city name is the same as an Indian city?',
        choices: ['Islamabad', 'Karachi', 'Lahore', 'Hyderabad'],
    },
    {
        name: 'userAnswer4',
        type: 'list',
        message: 'What is the second-largest mountain in the world?',
        choices: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
    },
    {
        name: 'userAnswer5',
        type: 'list',
        message: 'What is the capital of France?',
        choices: ['Paris', 'Marseille', 'Lyon', 'Nice'],
    },];
// Define the quiz questions and correct answers
// Check answers
async function askQuestion() {
    const answers = await inquirer.prompt(questions);
    if (answers.userAnswer1 === 'Islamabad') {
        console.log('Answer to question 1 is correct');
    }
    else {
        console.log('Answer to question 1 is not correct');
    }
    if (answers.userAnswer2 === 'Karachi') {
        console.log('Answer to question 2 is correct');
    }
    else {
        console.log('Answer to question 2 is not correct');
    }
    if (answers.userAnswer3 === 'Hyderabad') {
        console.log('Answer to question 3 is correct');
    }
    else {
        console.log('Answer to question 3 is not correct');
    }
    if (answers.userAnswer4 === 'K2') {
        console.log('Answer to question 4 is correct');
    }
    else {
        console.log('Answer to question 4 is not correct');
    }
    if (answers.userAnswer5 === 'Paris') {
        console.log('Answer to question 5 is correct');
    }
    else {
        console.log('Answer to question 5 is not correct');
    }
    console.log('User selected answers:', answers);
}
askQuestion();
