/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_458473246")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Frontend",
      "Backend",
      "Design"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_458473246")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Frontend",
      "Backend"
    ]
  }))

  return app.save(collection)
})
