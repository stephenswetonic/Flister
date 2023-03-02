migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fl81jeoi",
    "name": "field",
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
