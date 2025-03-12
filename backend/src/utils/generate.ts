export function createRandomString(length: number): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result: string = ''
  const randomArray = new Uint8Array(length)
  crypto.getRandomValues(randomArray)
  randomArray.forEach((number) => {
    result += chars[number % chars.length]
  })
  return result
}