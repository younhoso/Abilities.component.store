import fs from 'fs';
import ncp from 'ncp';
import path from 'path';

// 컴포넌트 이름 받기
const componentName = process.argv[2];
if (!componentName) {
  console.log('⚠️ 컴포넌트 이름을 입력하세요.');
  process.exit(1);
}

// 템플릿 폴더 경로 설정
const templateFolderPath = path.join(process.cwd(), 'src/components', componentName);
if (!fs.existsSync(templateFolderPath)) {
  console.log(`⚠️ ${componentName} 폴더를 찾을 수 없습니다.`);
  process.exit(1);
}

// 목표 디렉토리 경로 설정
const targetFolderPath = path.join(process.cwd(), 'src/components/ui', componentName);

// 파일 복사
fs.mkdirSync(targetFolderPath, { recursive: true });

ncp(templateFolderPath, targetFolderPath, function (err) {
  if (err) {
    return console.error('⚠️ 복사 실패:', err);
  }
  console.log(`✅ ${componentName} 컴포넌트가 성공적으로 복사되었습니다!`);
});
