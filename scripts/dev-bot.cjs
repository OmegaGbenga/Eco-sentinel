const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const run = (cmd) => {
    try {
        // console.log(`Run: ${cmd}`);
        execSync(cmd, { stdio: 'pipe' });
    } catch (e) {
        // console.error(`Cmd failed: ${cmd}`); 
        // Continue usually, maybe branch exists etc
    }
};

const commit = (msg) => {
    try {
        execSync('git add .', { stdio: 'pipe' });
        execSync(`git commit -m "${msg}"`, { stdio: 'pipe' });
    } catch (e) {
        // nothing to commit probably
    }
};

async function executeFeature(feature) {
    console.log(`Starting feature: ${feature.name}`);
    const branchName = `feat/${feature.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    // Create Branch or checkout
    try { execSync(`git checkout -b ${branchName}`, { stdio: 'pipe' }); }
    catch (e) { execSync(`git checkout ${branchName}`, { stdio: 'pipe' }); }

    // Files
    for (const file of feature.files) {
        const filePath = path.join(process.cwd(), file.path);
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        // 1. Create File (if new or overwrite)
        let isNew = false;
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
            commit(`feat: create file ${path.basename(filePath)}`);
            isNew = true;
        } else if (file.overwrite) {
            fs.writeFileSync(filePath, '');
            commit(`refactor: clear ${path.basename(filePath)} for rewrite`);
        }

        // 2. Add Content Micro-Chunks
        const lines = file.content.split('\n');

        // Strategy: Append mode. If file exists, we assume we are appending to the end 
        // or effectively rewriting if we were smart, but append is safer for "simulation".
        // For this specific request, we will overwrite logic by clearing and rewriting if it wasn't new?
        // No, simplest is: if not new, we just append. If it duplicates, it breaks code. 
        // BETTER STRATEGY: We are "implementing". We assume empty or partial files. 
        // We will Write the whole file *gradually*.

        // If it was not new, we truncate it first to simulate rewriting/refactoring? 
        // Or better, we only use this for NEW files.
        // For existing files, we might just append. 
        // Let's assume for this "Setup" phase, files are mostly new.

        let chunk = [];
        const chunkSize = 1; // MAXIMUM GRANULARITY

        for (let i = 0; i < lines.length; i++) {
            chunk.push(lines[i]);
            if (chunk.length >= chunkSize || i === lines.length - 1) {
                const chunkText = chunk.join('\n') + '\n';
                fs.appendFileSync(filePath, chunkText);
                commit(`feat: add logic to ${path.basename(filePath)} - section ${Math.floor(i / chunkSize)}`);
                chunk = [];
            }
        }
    }

    // Merge
    run('git checkout main');
    run(`git merge ${branchName}`);
    console.log(`Merged feature: ${feature.name}`);
}

const planFile = process.argv[2] || 'project-plan.json';
const planPath = path.join(__dirname, planFile);
if (fs.existsSync(planPath)) {
    const plan = require(`./${planFile}`);
    (async () => {
        for (const feature of plan) {
            await executeFeature(feature);
        }
        console.log("Automation Complete.");
    })();
} else {
    console.log("No plan found.");
}
