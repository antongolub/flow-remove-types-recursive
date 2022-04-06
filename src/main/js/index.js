import fs from 'node:fs/promises'
import { relative, resolve, dirname } from 'node:path'
import flowRemoveTypes from 'flow-remove-types'
import fastGlob from 'fast-glob'

export const run = async (src, dst) => {
  const baseIn = resolve(process.cwd(), src)
  const baseOut = resolve(process.cwd(), dst)
  const inputs = fastGlob.sync(`${src}/**`, { onlyFiles: true, absolute: true })

  await Promise.all(inputs.map(async (input) => {
    // console.log('input=', input)
    const output = resolve(baseOut, relative(baseIn, input))
    await fs.mkdir(dirname(output), { recursive: true })
    await compile(input, output)
    // console.log('output=', output)
  }))
}

const compile = async (src, dst) => {
  const input = await fs.readFile(src, 'utf8')
  const output = flowRemoveTypes(input)
  await fs.writeFile(dst, output.toString())
}
