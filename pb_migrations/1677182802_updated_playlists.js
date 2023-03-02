migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fub1i4rxma0qvw")

  collection.updateRule = "user = @request.auth.id"
  collection.deleteRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fub1i4rxma0qvw")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
