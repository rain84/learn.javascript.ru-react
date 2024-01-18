import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

type Entry = {
  name: string
  path: string
}

export const fileDirName = () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  return { __dirname, __filename }
}

// TODO: extract into separate 'vite-resolve-alias-plugin'
export const resolveAlias = async () => {
  const { __dirname } = fileDirName()
  const src = path.resolve(__dirname, './src')
  const entries = await fs.readdir(src)
  const resources = (
    await Promise.all(
      entries.map((name) => {
        const p = path.resolve(src, name)
        return new Promise<Entry>((res, rej) => {
          try {
            res({
              name,
              path: p,
            })
          } catch (error) {
            rej(error)
          }
        })
      })
    )
  ).map(({ name, path }) => [name, path])

  const alias = Object.fromEntries(resources)
  return { alias }
}
