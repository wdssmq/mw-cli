#!/usr/bin/env node
"use strict";
// 调用pkgjson
const pkg = require("../../package.json");
console.log(pkg.version);
// 引用commander
const program = require("commander");
// 引用创建项目逻辑
const createProject = require("../src/core/create");
//版本号 -v --version 选项
program.version(pkg.version, '-v,--version');
createProject();
program.parse(process.argv);
