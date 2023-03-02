migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
