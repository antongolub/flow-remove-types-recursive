import fs from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { test } from 'uvu'
import * as assert  from 'uvu/assert'

import { run } from '../../main/js/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const fixtures = resolve(__dirname, '../fixtures')
const temp = resolve(__dirname, '../temp')

test('removes flow types for all files', async () => {
  await run(fixtures, temp)
  const contents = `//      

export const foo = (str        )         => str
`

  assert.equal(fs.readFileSync(resolve(temp, 'flow/project/file.js'), 'utf8'), contents)
  assert.equal(fs.readFileSync(resolve(temp, 'flow/file.js'), 'utf8'), contents)
})

test.run()
