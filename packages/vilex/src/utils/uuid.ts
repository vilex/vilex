export function uuid() {
    var temp_url = URL.createObjectURL(new Blob())
    var uuidStr = temp_url.toString()
    URL.revokeObjectURL(temp_url)
    return uuidStr.slice(uuidStr.lastIndexOf('/') + 1)
}
