const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const orig = content;
    
    content = content.replace(/Shanmukha State & Central Government Contract & Project Services/gi, 'DS Projects');
    content = content.replace(/SHANMUKHA STATE & CENTRAL GOVERNMENT CONTRACT & PROJECT SERVICES/g, 'DS PROJECTS');
    content = content.replace(/Shanmukha Projects/gi, 'DS Projects');
    content = content.replace(/shanmukhaprojects\.com/gi, 'dsprojectss.com');
    content = content.replace(/shanmukhaprojects999@gmail\.com/gi, 'projectds11@gmail.com');
    content = content.replace(/shanmukha_projects999/gi, 'projectds11');
    content = content.replace(/shanmukhaprojects/gi, 'dsprojects');
    content = content.replace(/Shanmukha/g, 'DS Projects');
    
    if (filePath.endsWith('Contact.jsx')) {
        content = content.replace(/93818 80608/g, '9494943261');
        content = content.replace(/9381880608/g, '9494943261');
    }
    
    if (filePath.endsWith('Footer.jsx')) {
        content = content.replace(/93818 80608/g, '9494943261');
        content = content.replace('bg-slate-900', 'bg-[#003366]');
        content = content.replace('className="w-16 h-16 md:w-32 md:h-32 mb-4 shrink-0 flex items-center justify-center"', 'className="w-16 h-16 md:w-32 md:h-32 mb-4 shrink-0 flex items-center justify-center bg-white p-3 rounded-lg"');
        content = content.replace('className="text-gray-400 mt-6 max-w-sm"', 'className="text-gray-400 mt-6 max-w-sm hidden"');
    }

    if (content !== orig) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', filePath);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            replaceInFile(fullPath);
        }
    }
}
walkDir(path.join(__dirname, 'src'));
