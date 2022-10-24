export const shortenAddress = (address: string) => {
  const len = address.length

  return address.slice(0, 5) + '...' + address.slice(len - 5, len)
}
