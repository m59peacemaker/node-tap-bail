# tap-fail-exit

Stream that receives TAP and exits on first failing test.

## install

npm install tap-fail-exit

## example

```sh
# run tests, format TAP with tap-spec, exit on first failing test
npm test | tap-fail-exit | tap-spec
```

```js
const exitOnFail = require('tap-fail-exit')

const stream = exitOnFail()
  .on('error', () => {}) // failing test
  .on('end', () => {}) // all tests passed
```
