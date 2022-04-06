#!/usr/bin/env node

import { removeFlowTypesRecursive } from './index.js'

const [src, dst] = process.argv.slice(2)

await removeFlowTypesRecursive(src, dst)

