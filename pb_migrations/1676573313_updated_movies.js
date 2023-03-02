migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

  collection.createRule = ""

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fl81jeoi",
    "name": "playlist",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "7fub1i4rxma0qvw",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

  collection.createRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fl81jeoi",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
