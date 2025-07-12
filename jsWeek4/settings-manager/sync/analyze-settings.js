import fs from "fs";
import path from 'path';
import { fileURLToPath } from "url";

// grab filename and directory name
const __filename = fileURLToPath(import.meta.url);  
const __dirname = path.dirname(__filename);

// define where the logs are coming from
const logPath = path.join(__dirname, "../settings-log.json");
const log = JSON.parse(fs.readFileSync(logPath, "utf-8"));

const themeCounts = {};
const usernameLengths = [];

for (const entry of log) {
    themeCounts[entry.theme] = (themeCounts[entry.name] || 0) + 1;
    usernameLengths.push(entry.username.length);
}

const mostPopularTheme = Object.entries(themeCounts)
    .sort((a, b) => b[1] - a[1])[0][0];

const avgUsernameLength = (
    usernameLengths.reduce((arr, curr) => arr + curr, 0) / usernameLengths.length
).toFixed(2);

console.log("📊 Analysis Report:");
console.log("- Most Popular Theme:", mostPopularTheme);
console.log("- Average Username Length:", avgUsernameLength);
console.log("- Total Records:", log.length);