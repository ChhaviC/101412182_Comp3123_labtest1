const fs = require('fs');
const path = require('path');


const logsDir = path.join(__dirname, 'Logs');

// Function to create log files
function addLogs() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }

    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) { 
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(fileName);  
    }
}

// Function to remove log files
function removeLogs() {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);
            console.log(`delete files...${file}`);  // Output like your image
        });

        fs.rmdirSync(logsDir);
        console.log('Logs directory deleted.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

// Command-line argument to determine the action (add/remove)
const action = process.argv[2];

if (action === 'add') {
    addLogs();
} else if (action === 'remove') {
    removeLogs();
} else {
    console.log('Invalid command. Use "add" to create logs or "remove" to delete logs.');
}