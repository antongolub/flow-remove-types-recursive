import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'
import { test } from 'uvu'
import * as assert  from 'uvu/assert'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fixtures = path.resolve(__dirname, '../fixtures')
const temp = path.resolve(__dirname, '../temp/cli')
const makeDeferred = () => {
  let resolve
  let reject
  const promise = new Promise((res, rej) => { resolve = res; reject = rej })
  return {resolve, reject, promise}
}

test('removes flow types for all files', async () => {
  const {promise, resolve} = makeDeferred()
  const task = spawn('node', ['src/main/js/cli.js', fixtures, temp])
  task.on('close', resolve)

  await promise

  const contents = `//      

export const foo = (str        )         => str
`

  assert.equal(fs.readFileSync(path.resolve(temp, 'flow/project/file.js'), 'utf8'), contents)
  assert.equal(fs.readFileSync(path.resolve(temp, 'flow/file.js'), 'utf8'), contents)
})

test.run()
