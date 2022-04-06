# flow-remove-types-recursive
Apply [`flow-remove-types`](https://github.com/facebook/flow/tree/main/packages/flow-remove-types) to directories

## Install
```shell
# npm
npm i flow-remove-types-recursive

# yarn add flow-remove-types-recursive
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
