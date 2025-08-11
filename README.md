

# ESLint & Prettier Configs

ESLint 9 Flat Config를 지원하는 공유 가능한 ESLint 및 Prettier 설정 패키지입니다.

## 📦 패키지

### `eslint-config`
ESLint 9 Flat Config 기반의 TypeScript + JavaScript 린트 설정

### `prettier-config`
일관된 코드 포맷팅을 위한 Prettier 설정

## 🚀 빠른 시작

### 설치

```bash
# npm
npm install --save-dev eslint-config prettier-config

# pnpm
pnpm add -D eslint-config prettier-config

# yarn
yarn add -D eslint-config prettier-config
```

### 기본 사용법

#### ESLint 설정 (`eslint.config.js`)

```js
import baseConfig from 'eslint-config'

export default [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
]
```

#### React 프로젝트용 설정

```js
import globals from 'globals'
import { globalIgnores } from 'eslint/config'
import baseConfig from 'eslint-config'
import reactConfig from 'eslint-config/mixins/react'

export default [
  globalIgnores(['dist']),
  ...baseConfig,
  ...reactConfig,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
  },
]
```

#### Prettier 설정 (`package.json`)

```json
{
  "prettier": "prettier-config"
}
```

또는 별도 파일로 (`prettier.config.js`):

```js
module.exports = require('prettier-config')
```

## 🛠️ 포함된 규칙

### 기본 ESLint 설정
- **@eslint/js** - JavaScript 기본 권장 규칙
- **typescript-eslint** - TypeScript 권장 규칙
- **no-relative-import-paths** - 상대 경로 import 제한

### React Mixin (`eslint-config/mixins/react`)
- **React** - React 권장 규칙 및 JSX Runtime 지원
- **React Hooks** - Hooks 사용 규칙
- **JSX A11Y** - 접근성 규칙
- **TanStack Query** - React Query 권장 규칙
- **Testing Library** - 테스트 파일 전용 규칙
- **React Refresh** - Vite HMR 호환성

### Prettier 설정
```js
{
  printWidth: 100,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  useTabs: false,
}
```

## 📋 요구사항

- **ESLint**: `>=9.0.0`
- **TypeScript**: `>=5.0.0`
- **Prettier**: `>=3.0.0`

## 🔧 개발 환경

이 프로젝트는 pnpm 워크스페이스를 사용합니다.

```bash
# 의존성 설치
pnpm install

# 예제 프로젝트 실행
pnpm example dev

# 예제 프로젝트 린트 실행
pnpm example lint
```

## 📁 프로젝트 구조

```
├── packages/
│   ├── eslint-config/          # ESLint 설정 패키지
│   │   ├── index.js           # 기본 설정
│   │   ├── mixins/
│   │   │   └── react.js       # React 전용 규칙
│   │   └── patch.js           # 모듈 해석 패치
│   └── prettier-config/        # Prettier 설정 패키지
│       └── index.js
├── example/                    # React + TypeScript + Vite 예제
└── package.json               # 워크스페이스 루트
```

## 🎯 예제

`example/` 디렉토리에서 React + TypeScript + Vite 프로젝트에서 이 설정들이 어떻게 사용되는지 확인할 수 있습니다.

## 🤝 기여

이슈나 개선사항이 있다면 언제든 PR을 보내주세요!

## 📄 라이선스

MIT