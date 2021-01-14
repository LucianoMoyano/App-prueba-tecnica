export const encodeURIBody = (body) => {
  let formBody = []
  for (let property in body) {
    let encodedKey = encodeURIComponent(property)
    let encodedValue = encodeURIComponent(body[property])
    formBody.push(encodedKey + "=" + encodedValue)
  }
  return formBody.join("&")
}
