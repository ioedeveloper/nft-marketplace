export const shortenAddress = (address: string) => {
  const len = address.length

  return address.slice(0, 8) + '...' + address.slice(len - 6, len)
}
