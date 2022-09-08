const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, descr, userStory, accCriteria, tech, futureDev, contr, test, install, deplLink, email, issues, user, license}) => 
`# ${title}

## Description

${descr}

## Table of Contents
1. [Description](#description)
2. [Table of Contents](#table-of-contents)
3. [Usage](#usage)
4. [Installation](#installation)
5. [License](#license)
6. [Technologies Employed](#technologies-employed)
7. [Future Development](#future-development)
8. [Contributing](#contributing)
9. [Tests](#tests)
10. [Questions](#questions)

## Usage
### User Story

\`\`\`md
${userStory}
\`\`\`

### Acceptance Criteria 

\`\`\`md
${accCriteria}
\`\`\`

## Installation
${install}
${deplLink.length > 0 ? '[${title} Live Link](${deplLink})' : ""}

The following shows the web application's appearance and functionality:

*please include mock-up here after README is generated*

## License
${license}<br/>
![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)

${tech.length > 0 ? '## Technologies Employed' : ""}
${tech}

${futureDev.length > 0 ? '## Future Development' : ""}

${futureDev}

## Contributing
${contr}

${test.length > 0 ? '## Tests' : ""}
${test}

## Questions
[Find us on GitHub](https://github.com/${user})
[Email us](${email})

For additional issues:
${issues} 

- - -
© 2022 ${title} by ${user}, Confidential and Proprietary. All Rights Reserved.
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
            type: 'editor',
            message: 'Please provide your deployed live link:',
            name: 'deplLink',
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
            message: 'Where can users report issues?',
            name: 'issues',
        },
        {
            message: 'Please explain where contributions can be made:',
            name: 'contr',
        },
        {
            type: 'editor',
            message: 'Please list the testing methods of this application:',
            name: 'test',
        },
        {
            type: 'checkbox',
            message: 'Please choose your licensing method:',
            choices: [  "BSD", new inquirer.Separator(), "GNU", new inquirer.Separator(), "MIT", new inquirer.Separator(), "Other", new inquirer.Separator(), "None",],
            name: 'license',
        },
    ])
    .then ((input) => {
        const readmeContent = generateREADME(input);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully generated README.md!')
        );
    });