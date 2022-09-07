const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, descr, userStory, accCriteria, tech, futureDev, install,  deplLink, mock, issues, repo }) => 
    `
    `

    inquirer
    .prompt([
        {
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            message: "Give a description of your app, how do you use it? What is it's purpose?",
            name: 'descr',
        },
        {
            message: 'Please enter a user story in AS A/I WANT/SO THAT format:',
            name: 'userStory',
        },
        {
            message: 'Please enter an acceptance criteria in GIVEN/WHEN/THEN format:',
            name: 'accCriteria',
        },
        {
            message: 'Please list any and all technologies employed:',
            name: 'tech',
        },
        {
            message: 'Please list any plans for future development:',
            name: 'futureDev',
        },
        {
            message: 'How does user install your application?',
            name: 'install',
        },
        {
            message: 'If applicable, please link your deployed application:',
            name: 'deplLink',
        },
        {
            message: 'Please provide a mock-up of your application:',
            name: 'mock',
        },
        {
            message: 'Where can users report issues',
            name: 'issues',
        },
        {
            message: 'Please link your GitHub repo or explain where contributions can be made:',
            name: 'repo',
        },
    ])