#!/usr/bin/env node

const { Command } = require("commander");
const execSync = require("child_process").execSync;

const packageJson = require("../package.json");

let projectName;
const program = new Command(packageJson.name)
  .version(packageJson.version)
  .arguments("<project-directory>")
  .usage("<project-directory>")
  .action((name) => (projectName = name))
  .parse();

if (projectName) {
  // console.log(projectName);
  console.log('start creating vilex app ...')
  const result = execSync(
    `git clone -b master https://e.coding.net/worksite/vilex/vilex-app-base.git ${projectName} --depth=1`
  )
    .toString()
    .trim();
  console.log(result);
  try {
    execSync(`rm -rf ./${projectName}/.git`);
  } catch (err) {
    console.log(`Please delete the ${projectName}/.git directory manually`);
  }

  console.log(`creation completed.\n`)
  console.log(`cd ${projectName}`)
  console.log(`pnpm install`)
  console.log(`pnpm dev`)
  
} else {
  console.error("projectName is null");
  process.exit(1);
}
