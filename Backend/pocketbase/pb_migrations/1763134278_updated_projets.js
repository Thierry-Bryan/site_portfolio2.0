/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2541086472",
    "maxSelect": 1,
    "name": "theme",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "les-12-fragments",
      "ca-va-trailer",
      "basique",
      "RBA",
      "omnisphere",
      "echo-safe"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2541086472",
    "maxSelect": 1,
    "name": "theme",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "les-12-fragments",
      "ca-va-trailer",
      "basique",
      "RBA",
      "omnisphere"
    ]
  }))

  return app.save(collection)
})
