#!/usr/bin/env node

const exitOnFail = require('../')

process.stdin
  .pipe(exitOnFail())
  .on('error', err => process.exit(1))
  .pipe(process.stdout)
