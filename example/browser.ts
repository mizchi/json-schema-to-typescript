import fs from 'fs'
import path from 'path'
import {compile} from '../dist/browser-sync'

async function generate() {
  const fpath = path.join(__dirname, 'person.json')
  const person = fs.readFileSync(fpath, 'utf8')
  const ret = compile(JSON.parse(person))
  console.log(ret)
}

generate()
