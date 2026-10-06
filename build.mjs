import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const item of ['index.html', 'app.js', 'styles.css', 'assets']) {
  await cp(path.join(root, item), path.join(output, item), { recursive: true });
}

console.log(`Static site ready in ${output}`);
