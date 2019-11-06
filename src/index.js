'use strict';

const chalk = require("chalk");
const boxen = require("boxen");
const fs = require('fs');
const path = require('path');

const options = {
    padding: 2,
    margin: 1,
    borderStyle: "round"
};

const label = text => chalk.gray.bold(`${text}:`);
const link = text => chalk.magenta.bold(text);

const data = {
    name: chalk.cyan.bold("Syed Umair"),
    handle: chalk.white("@ideasyed"),
    work: chalk.white.italic("Software Engineer @ FULL Creative, India"),
    portfolio: chalk.cyan.bold("https://syedumair.dev"),
    twitter: link("https://twitter.com/ideasyed"),
    github: link("https://github.com/syed-umair"),
    linkedin: link("https://linkedin.com/in/syed-umair/"),
    npx: chalk.green.bold("npx syed")
};

const output = `
  ${data.name} / ${data.handle}

  ${data.work}

  ${chalk.underline.cyan.bold("https://syedumair.dev")}

  ${label("Twitter")} ${data.twitter}
  ${label("GitHub")} ${data.github}
  ${label("LinkedIn")} ${data.linkedin}

  ${label("Card")} ${data.npx}
`;

fs.writeFileSync(path.join(__dirname, '../', 'bin/syed'), chalk.green(boxen(output, options)));
