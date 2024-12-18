/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()

const environments_variables_keys = []

let envConfigFile = `export const environment = {\n`

environments_variables_keys.forEach(key => {
  envConfigFile += `  ${key}: '${process.env[key] ?? ''}',\n`
})

envConfigFile += '}\n'

fs.writeFile('./src/environments/environment.ts', envConfigFile, error => {
  if (error !== null) {
    console.error('Error writing environment.ts file', error)
  } else {
    console.log('Environment file generated successfully.')
  }
})
