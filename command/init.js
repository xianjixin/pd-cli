const exec = require("child_process").exec;
const inquirer = require("inquirer");
const chalk = require("chalk");
const {promisify} = require("util");
module.exports =async ()=> {
    let projectName = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "请输入项目的名字："
    }])
    let gitUrl = "https://github.com/xianjixin/pd_vue_template.git";
    let cmdStr = `git clone ${gitUrl} ${projectName.name}`
    console.log(chalk.default.white('\n start generating...'));
    let promisifyExec = promisify(exec);
    try {
        let std = await promisifyExec(cmdStr);
        console.log(std.stderr)
    } catch (error) {
        console.log("error", error)
        process.exit();
    }
    console.log(chalk.default.green("\n √ Generation completed!"));
    console.log(chalk.default.green(`\n √ cd ${projectName.name}`));
    console.log(chalk.default.green("\n √ npm install"));
    process.exit();
}