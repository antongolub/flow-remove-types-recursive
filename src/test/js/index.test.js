import fs from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { test } from 'uvu'
import * as assert  from 'uvu/assert'

import { removeFlowTypesRecursive } from '../../main/js/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const fixtures = resolve(__dirname, '../fixtures')
const temp = resolve(__dirname, '../temp/api')

test('removes flow types for all files', async () => {
  await removeFlowTypesRecursive(fixtures, temp)
  const contents = `export const foo = (str        )         => str`

  assert.ok(fs.readFileSync(resolve(temp, 'flow/project/file.js'), 'utf8').includes(contents))
  assert.ok(fs.readFileSync(resolve(temp, 'flow/file.js'), 'utf8').includes(contents))
})

test.run()
