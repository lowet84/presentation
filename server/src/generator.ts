import { readdirSync, createReadStream, createWriteStream } from "fs";

var clientTypingsDir = '../client/typings/'
var typingsDir = './typings/'
var files = readdirSync(typingsDir)
files.forEach(file => {
  createReadStream(typingsDir+file).pipe(createWriteStream(clientTypingsDir+file));
});
