import * as fs from "fs-extra"
import * as path from "path"

import readline from "readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("In which path you want to add the theme files?", (response) => {
	const args = process.argv.slice(2);
	console.log("args", args);
	const dest = path.join(process.cwd(), response, "app-theme");
	fs.ensureDirSync(dest);
	fs.copySync(path.join(__dirname, "../templates/ui"), dest, { errorOnExist: true });

	const renameAllFiles = (rootDir) => {
		fs.readdirSync(rootDir).forEach(file => {
			const fullPath = path.join(rootDir, file);
			if (fs.lstatSync(fullPath).isDirectory()) {
				console.log(fullPath);
				renameAllFiles(fullPath);
			} else {
				fs.renameSync(fullPath, fullPath.replace(".hbs", ""));
				console.log(fullPath);
			}
		});
	}

	renameAllFiles(path.join(process.cwd(), response));
})
