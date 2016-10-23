# tap_bail

Stream that receives TAP and exits on first failing test.

## install

```sh
npm install tap_bail
```

## example

```sh
# run tests, format TAP with tap-spec, exit on first failing test
npm test | tap_bail | tap-spec
```

```js
const tapBail = require('tap_bail')

const stream = tapBail()
  .on('error', () => {}) // failing test
  .on('end', () => {}) // all tests passed
```
