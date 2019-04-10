function getEnv(name: string) {
  const value = process.env[name]
  if (!value) throw new Error(`${name} is undefined.`)
  return value
}

export default getEnv
