export function uuid() {
  const temp_url = URL.createObjectURL(new Blob())
  const uuidStr = temp_url.toString()
  URL.revokeObjectURL(temp_url)
  return uuidStr.slice(uuidStr.lastIndexOf('/') + 1)
}
