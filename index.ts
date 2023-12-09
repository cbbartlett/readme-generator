import * as inquirer from "inquirer";
import * as fs from "fs";

// Begin prompt for inputting information from the user
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
            message: 'Enter the description of your project:',
        },
        {

        }
    ])
