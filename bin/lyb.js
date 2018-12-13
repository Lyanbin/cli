#!/usr/bin/env node
const packageJson = require('../package.json');
const program = require('commander');
const shell = require('shelljs');
program.version(packageJson.version)
    .option('-c, --company', 'Change to company env')
    .option('-o, --own', 'Change to own env')
    .option('-v, --v', 'Show version')
    .usage('<env>')
program.parse(process.argv);

if (program.own) {
    shell.exec('git config --global user.name "Lyanbin"');
    shell.exec('git config --global user.email "champagne.lyb@gmail.com"');
    shell.echo('Now you are in Home Env.');
} else if (program.company) {
    shell.exec('git config --global user.name "liyanbin01"');
    shell.exec('git config --global user.email "liyanbin01@baidu.com"');
    shell.echo('Now you are in Own Env.');
} else {
    console.log('so what ?');
}