import { SERVER_PORT } from './settings';
import express from 'express';
import ResourceService from './services/resources-service';

const app = express();
const fileParamterName = 'filename';

const resourceService: ResourceService = new ResourceService();

app.get('/', (req, res) => res.send('Server for local development'));

app.get(`/resources/:${fileParamterName}`, (req, res) => {
  const fileName=req.params[fileParamterName];
  console.log(`Fetching file '${fileName}' from server resources...`);
  res.send(resourceService.getResource(fileName));
});


app.listen(SERVER_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${SERVER_PORT}`);
});