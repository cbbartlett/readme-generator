import inquirer from 'inquirer';
import fs from 'fs';

// Prompt the user for information
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter license information:',
    },
  ])
  .then((answers) => {
    // Generate the README content
    const content = `
# ${answers.title}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${answers.license}
`;
    // Write the content to a README.md file
    fs.writeFile('README.md', content, (err) => {
      if (err) throw err;
      console.log('README.md file created! Hooray!');
    });
  });
