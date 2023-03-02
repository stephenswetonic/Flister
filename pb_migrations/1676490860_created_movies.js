migrate((db) => {
  const collection = new Collection({
    "id": "yq3w3whi6v9fgdd",
    "created": "2023-02-15 19:54:20.095Z",
    "updated": "2023-02-15 19:54:20.095Z",
    "name": "movies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1mi0ozjw",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "i2amcu1o",
        "name": "rank",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 100
        }
      },
      {
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
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yq3w3whi6v9fgdd");

  return dao.deleteCollection(collection);
})
