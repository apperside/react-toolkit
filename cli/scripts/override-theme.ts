import * as fs from "fs-extra"
import * as path from "path"

const args = process.argv.slice(2);
console.log("args", args);
fs.copySync(path.join(__dirname, "../templates/ui"), path.join(process.cwd(), "src/ui"), { errorOnExist: true })