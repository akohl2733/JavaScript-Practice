import { timeStamp } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define file and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// define where the data will be going
const logPath = path.join(__dirname, "../settings-log.json");

// new entry example
const newEntry = {
    theme: "dark",
    username: "akohl" + Math.floor(Math.random() * 1000),
    timestamp: new Date().toISOString(),
};

// initialize an empty array and filling it with existing sync-settings JSON data
let log = [];
if (fs.existsSync(logPath)){
    const content = fs.readFileSync(logPath, 'utf-8');
    log = JSON.parse(content);
};

// push new entry and write the whole thing back
log.push(newEntry);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2));

console.log("Appended new settings entry to log.");