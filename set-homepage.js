const fs = require('fs');
const path = require('path');

const env = process.env.BUILD_ENV || 'development'; // Could be 'production', 'staging', etc.
const homepage = {
    'production': 'projects/sudoku_solver/',
    'development': '',
    'staging': 'projects/sudoku_solver/'
}[env];

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = require(packageJsonPath);

packageJson.homepage = homepage;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
