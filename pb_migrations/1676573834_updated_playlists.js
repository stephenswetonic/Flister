migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fub1i4rxma0qvw")

  collection.createRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7fub1i4rxma0qvw")

  collection.createRule = null

  return dao.saveCollection(collection)
})
