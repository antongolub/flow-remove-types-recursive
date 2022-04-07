import fs from 'node:fs/promises'
import { relative, resolve, dirname } from 'node:path'
import flowRemoveTypes from 'flow-remove-types'
import fastGlob from 'fast-glob'

export const removeFlowTypesRecursive = async (src, dst) => {
  const baseIn = resolve(process.cwd(), src)
  const baseOut = resolve(process.cwd(), dst)
  const inputs = fastGlob.sync(`${slash(src)}/**`, { onlyFiles: true, absolute: true })

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

// https://github.com/sindresorhus/slash/blob/b5cdd12272f94cfc37c01ac9c2b4e22973e258e5/index.js#L1
const slash = (path) => {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path)
  const hasNonAscii = /[^\u0000-\u0080]+/.test(path) // eslint-disable-line no-control-regex

  if (isExtendedLengthPath || hasNonAscii) {
    return path
  }

  return path.replace(/\\/g, "/")
}
