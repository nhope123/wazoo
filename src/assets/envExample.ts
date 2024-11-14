import fs from 'fs';
import path from 'path';

const envFilePath = path.resolve(__dirname, '../../.env');
const templateFilePath = path.resolve(__dirname, 'envTemplate.ts');

const createEnvTemplate = () => {
  const envContent = fs.readFileSync(envFilePath, 'utf-8');
  const templateContent = envContent
    .split('\n')
    .map((line) => {
      const [key] = line.split('=');
      return key ? `${key}=` : '';
    })
    .join('\n');

  fs.writeFileSync(templateFilePath, templateContent);
};

createEnvTemplate();