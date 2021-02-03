#!/usr/bin/env node

const actions = require("./actions/actions");

const commander = require("commander");
const program = new commander.Command();

program
  .command("add")
  .description("option to add project in list")
  .action(actions.add);

program
  .command("go")
  .description("option to go to project in list")
  .action(actions.go);

program.parse(process.argv);
