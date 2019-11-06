#!/usr/bin/env node
// https://docs.npmjs.com/files/package.json#bin

'use strict'

const fs = require('fs')
const path = require('path')
const data = fs.readFileSync(path.join(__dirname, 'syed'), 'utf-8');
console.log(data);
