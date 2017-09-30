var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return = Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return = Object.assign(object, { [key]: value })
}

//Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
function deleteFromObjectByKey(object, key) {
  newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}
