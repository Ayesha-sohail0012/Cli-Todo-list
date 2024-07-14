#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
while (condition) {
    let toDos = await inquirer.prompt([{
            name: 'first',
            type: 'input',
            message: chalk.green('What you want to Add in your todo list?')
        },
        {
            name: 'second',
            type: 'confirm',
            message: chalk.bgYellow('Would you like to add more in your todos?'),
            default: 'true'
        },
    ]);
    todoList.push(toDos.first);
    condition = (toDos.second);
    console.log(todoList);}