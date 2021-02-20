#!/usr/bin/env node

const actions = require("./actions/actions");

const commander = require("commander");
const program = new commander.Command();

const {
  ADD_COMMAND_DESCRIPTION,
  GO_COMMAND_DESCRIPTION,
} = require("./translations/en");

program.command("add").description(ADD_COMMAND_DESCRIPTION).action(actions.add);
program.command("go").description(GO_COMMAND_DESCRIPTION).action(actions.go);
program.command("open").description(GO_COMMAND_DESCRIPTION).action(actions.open);
program.command("rm").description(GO_COMMAND_DESCRIPTION).action(actions.remove);

program.parse(process.argv);
