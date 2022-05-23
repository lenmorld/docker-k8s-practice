docker pull redis

docker run redis

docker ps -a  // list all containers

// test connection using a client
const redis = require('redis')

const client = redis.createClient({
  url: 'redis://localhost:6379'
})

await client.connect()

await client.set("name", "lenny")
const a = await client.get("name")
console.log(a)


===

docker pull mongo
docker pull mongo-express

docker network create mongo-network

docker network ls


