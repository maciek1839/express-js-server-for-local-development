import fs from "fs";
import path from "path";

export default class ResourceService{

    public getResource(fileName:string) {
        const jsonPath = path.join(__dirname, '..', '..', 'resources', fileName);
        return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    }
}