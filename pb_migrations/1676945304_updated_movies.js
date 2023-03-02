migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd")

  // remove
  collection.schema.removeField("2jungozl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yyojprp9",
    "name": "poster",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 256,
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
    "id": "2jungozl",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/svg+xml"
      ],
      "thumbs": []
    }
  }))

  // remove
  collection.schema.removeField("yyojprp9")

  return dao.saveCollection(collection)
})
