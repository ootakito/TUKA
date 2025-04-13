import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vue のビルド結果
const source = path.resolve(__dirname, 'dist');

// .NET の wwwroot ← ここが超重要！！！！
const destination = path.resolve(__dirname, '..', 'TUKA', 'wwwroot');

// ログ確認
console.log("📤 コピー元:", source);
console.log("📥 コピー先:", destination);

// コピー処理
try {
  fs.rmSync(destination, { recursive: true, force: true });
  fs.cpSync(source, destination, { recursive: true });
  console.log("✅ Vue dist を .NET プロジェクトにコピーしました！");
} catch (err) {
  console.error("❌ コピー失敗:", err);
}
