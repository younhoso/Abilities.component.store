import fs from 'fs';
import ncp from 'ncp';
import path from 'path';

// Check if styled-components is installed
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson;

try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
} catch (error) {
  console.error('⚠️ Cannot read package.json file.');
  process.exit(1);
}

const dependencies = packageJson.dependencies || {};
const devDependencies = packageJson.devDependencies || {};

if (!dependencies['styled-components'] && !devDependencies['styled-components']) {
  console.log(
    '⚠️ styled-components package is not installed. Run the following command to install it:',
  );
  console.log('npm install styled-components');
  process.exit(1);
}

// 컴포넌트 이름 받기
const componentName = process.argv[2];
if (!componentName) {
  console.log('⚠️ Please enter a component name.');
  process.exit(1);
}

// 템플릿 폴더 경로 설정
const templateFolderPath = path.join(process.cwd(), 'src/components', componentName);
if (!fs.existsSync(templateFolderPath)) {
  console.log(`⚠️ Cannot find the ${componentName} folder.`);
  process.exit(1);
}

// 목표 디렉토리 경로 설정
const targetFolderPath = path.join(process.cwd(), 'src/components/ui', componentName);

// 파일 복사
fs.mkdirSync(targetFolderPath, { recursive: true });

ncp(templateFolderPath, targetFolderPath, function (err) {
  if (err) {
    return console.error('⚠️ Copy failed:', err);
  }
  console.log(`✅ ${componentName} component has been successfully copied!`);
});
