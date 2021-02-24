#!/usr/bin/env node

const actions = require("./actions/actions");

const commander = require("commander");
const program = new commander.Command();

const {
  ADD_COMMAND_DESCRIPTION,
  GO_COMMAND_DESCRIPTION,
} = require("./translations/en");

program
  .command("add")
  .alias("save")
  .option("-u, --url", "Add a link to a repository to projects")
  .description(ADD_COMMAND_DESCRIPTION)
  .action(actions.add);

program
  .command("rm")
  .alias("remove")
  .description(GO_COMMAND_DESCRIPTION)
  .action(actions.remove);

// program.command("go").description(GO_COMMAND_DESCRIPTION).action(actions.go);

// program
//   .command("open")
//   .description(GO_COMMAND_DESCRIPTION)
//   .action(actions.open);

// program
//   .command("purge")
//   .description(GO_COMMAND_DESCRIPTION)
//   .action(actions.purge);

program.parse(process.argv);
