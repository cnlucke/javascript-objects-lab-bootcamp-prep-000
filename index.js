var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return = Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return = Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

//Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
