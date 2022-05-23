// test local mongo on docker

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'

const dbName = 'lenny-db'
let db

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log("err!:", err)

  // Storing a reference to the database so you can use it later
  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}†`)
  console.log(`Database: ${dbName}`)
})

//----------
// test connection to mongo running on docker, exposed on port 27017
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://admin:password@localhost:27017', (err, client) => {
  if (err) throw err

  const db = client.db('test')
  // find all using {}
  db.collection('coffee').find({}).toArray((err, dbResult) => {
      if (err) throw err
      client.close()
      console.log("found documents: ", JSON.stringify(dbResult))
  })
})