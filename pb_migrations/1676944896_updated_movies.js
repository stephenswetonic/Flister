migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

  // remove
  collection.schema.removeField("6kejsafp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybgxvmai",
    "name": "imdbid",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6kejsafp",
    "name": "director",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ybgxvmai")

  return dao.saveCollection(collection)
})
