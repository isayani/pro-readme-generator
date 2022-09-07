const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, descr, userStory, accCriteria, tech, futureDev, install,  deplLink, mock, issues, repo }) => 
            `
            <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
        </head>
        <body>
        <header class="jumbotron jumbotron-fluid text-center">
        <div class="container">
            <h1 class="display-4">Your ${title}'s README is ready!</h1>
            <p class="lead">Please copy it from below:</p>
        </div>
        </header>

        <main>
            <div class="container card border-secondary bg-light my-5 ">
            <h2>${title}</h2>
            <br/>
            <h3>Description</h3>
            <p>${descr}</p>
            <br/>
            <h3>User Story</h3>
            <p>${userStory}</p>
            <br/>
            <h3>Acceptance Criteria</h3>
            <p>${accCriteria}</p>
            <br/>
            <h3>Technologies Employed</h3>
            <p>${tech}</p>
            <br/>
            <h3>Future Development</h3>
            <p>${futureDev}</p>
            <br/>
            <h3>Installation and Mock-Up</h3>
            <p>${install}</p>
            <p>You can see the deployed application at ${deplLink}</p>
            <p>${mock}</p>
            <br/>
            <h3>Issues</h3>
            <p>To report any issues, visit ${issues}</p>
            <br/>
            <h3>Contributions</h3>
            <p>To contribute to this application, visit ${repo} </p>
            </div>
        </main>

        <footer class="jumbotron jumbotron-fluid">
            <div class="container text-center">
            <h4 class="">This generator was made possible by <a href="https://github.com/isayani/pro-readme-generator"class="badge badge-secondary">isayani</a> and</h4>
            <ul class="list-group w-50 mx-auto">
            <li class="list-group-item">Node.js</li>
            <li class="list-group-item">Inquirer.js</li>
            </ul>
            </div>
        </footer>
        </body>
        </html>
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
            type: 'editor',
            message: 'Please enter a user story in AS A/I WANT/SO THAT format:',
            name: 'userStory',
        },
        {
            type: 'editor',
            message: 'Please enter an acceptance criteria in GIVEN/WHEN/THEN format:',
            name: 'accCriteria',
        },
        {
            type: 'editor',
            message: 'Please list any and all technologies employed:',
            name: 'tech',
        },
        {
            type: 'editor',
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
            type: 'editor',
            message: 'Please provide a mock-up of your application:',
            name: 'mock',
        },
        {
            message: 'Where can users report issues',
            name: 'issues',
        },
        {
            type: 'editor',
            message: 'Please link your GitHub repo or explain where contributions can be made:',
            name: 'repo',
        },
    ])