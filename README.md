# flow-remove-types-recursive
Apply [`flow-remove-types`](https://github.com/facebook/flow/tree/main/packages/flow-remove-types) to directories

[![CI](https://github.com/antongolub/flow-remove-types-recursive/workflows/CI/badge.svg)](https://github.com/antongolub/flow-remove-types-recursive/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/01d443126088af2769bb/maintainability)](https://codeclimate.com/github/antongolub/flow-remove-types-recursive/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/01d443126088af2769bb/test_coverage)](https://codeclimate.com/github/antongolub/flow-remove-types-recursive/test_coverage)
[![npm (tag)](https://img.shields.io/npm/v/flow-remove-types-recursive)](https://www.npmjs.com/package/flow-remove-types-recursive)

## Install
```shell
# npm
npm i flow-remove-types-recursive

# yarn
yarn add flow-remove-types-recursive
```

## Usage

### CLI
```shell
flow-remove-types-recursive src/main/js target/es6
```

### JS API
```js
import {removeFlowTypesRecursive} from 'flow-remove-types-recursive'

await removeFlowTypesRecursive('src/main/js', 'outdir')
```

## License
[MIT](./LICENSE)
