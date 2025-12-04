#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const TARGET_EXTENSIONS = [".avif", ".webp"];

function findFiles(dir, extensions) {
  const results = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
      results.push(...findFiles(fullPath, extensions));
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

function main() {
  const scriptDir = __dirname;
  console.log(`Scanning: ${scriptDir}\n`);

  const files = findFiles(scriptDir, TARGET_EXTENSIONS);

  if (files.length === 0) {
    console.log("No .avif or .webp files found.");
    return;
  }

  console.log(`Found ${files.length} file(s) to convert:\n`);

  let converted = 0;
  let failed = 0;

  for (const file of files) {
    const dir = path.dirname(file);
    const basename = path.basename(file, path.extname(file));
    const outputPath = path.join(dir, `${basename}.png`);

    try {
      execSync(`sips -s format png "${file}" --out "${outputPath}"`, { stdio: "pipe" });
      fs.unlinkSync(file);
      console.log(`✓ ${path.relative(scriptDir, file)} → ${basename}.png`);
      converted++;
    } catch (error) {
      console.error(`✗ ${path.relative(scriptDir, file)} - Failed`);
      failed++;
    }
  }

  console.log(`\nDone! Converted: ${converted}, Failed: ${failed}`);
}

main();
