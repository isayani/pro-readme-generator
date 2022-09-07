const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, descr, userStory, accCriteria, tech, futureDev, contr, test, install, deplLink, email, issues, user }) => 
        `
        # ${title}

        ## Description

        ${descr}

        ## Table of Contents

        1. Description
        2. Table of Contents
        3. Usage
        4. Installation
        5. License
        6. Technologies Employed
        7. Future Development
        8. Contributing
        9. Tests
        10. Questions

        ## Usage
        ## User Story

        ${userStory}


        ## Acceptance Criteria 

        ${accCriteria}

        ## Installation
        ${install}
        [${title} Live Link](${deplLink})

        The following images shows the web application's appearance and functionality:

        *please include mock-up here after README is generated*

        ## License

        ## Technologies Employed
        ${tech}

        ## Future Development
        ${futureDev}

        ## Contributing
        ${contr}

        ## Tests
        ${test}

        ## Questions
        [Find us on GitHub](https://github.com/${user})

        For additional issues:
        ${issues}

        or email us at ${email}

        - - -
        © 2022 ${title}, Confidential and Proprietary. All Rights Reserved.
        `;

    inquirer
    .prompt([
        {
            message: 'What is the title of your application?',
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
            message: 'Please enter your GitHub username:',
            name: 'user',
        },
        {
            message: 'Please enter the best email to reach you:',
            name: 'email',
        },
        {
            message: 'Where can users report issues',
            name: 'issues',
        },
        {
            type: 'editor',
            message: 'Please explain where contributions can be made:',
            name: 'contr',
        },
        {
            type: 'editor',
            message: 'Please explain the testing of this application:',
            name: 'test',
        },
    ])
    .then ((input) => {
        const readmeContent = generateREADME(input);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully generated README.md!')
        );
    });