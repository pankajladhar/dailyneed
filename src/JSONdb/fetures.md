# JSONDB API

- Doc()

  takes a table name and return method those can be performed on the table
  doc(tblName)

- Doc.getAll()

  retuns all documents of that tabel
  doc(tblName).getAll()

- Doc.getById()

  retuns one matching document of that tabel
  doc(tblName).getById(id)

- Doc.add()

  add new document to table and save in DB
  doc(tblName).add(obj) // takes object

- Doc.update()

  update existing document to table and save in DB
  doc(tblName).update(_id, val) // takes parital value, &  _id of document

- Doc.remove()

  remove existing document to table and save in DB
  doc(tblName).remove(_id) // takes _id of document

- Doc.removeAll()

  remove all existing documents to table and save in DB
  doc(tblName).removeAll(_id) // takes _id of document
