# Nic - Vite, React, Typescript Website

first set up vite, react, typescript
npm create vite@latest  
npm i   (To install the packages)
npm i -D @types/node   (This package contains TypeScript definitions for Node.js, which allows you to use Node.js built-in modules with TypeScript. The -D flag is short for --save-dev, which means the package will be saved in your package.json file under the devDependencies section. This is typically used for packages that are only needed during development and not in production.)

# path alias
1. `"baseUrl": "./src"`
   - The `"baseUrl"` option specifies the base directory for resolving module imports.
   - In this case, the base directory is set to `"./src"`, which means that when importing modules, TypeScript will look for them relative to the `src` directory.
   - For example, if you have a module located at `src/components/Button.ts`, you can import it using `import { Button } from 'components/Button';` instead of specifying the full path.

2. `"paths": { "components/*": ["components/*"] }`
   - The `"paths"` option allows you to define custom module resolution mappings.
   - In this case, there is one mapping defined: `"components/*": ["components/*"]`.
   - This mapping tells TypeScript that when importing a module starting with `"components/"`, it should look for it in the `"components/"` directory.
   - For example, if you have a module located at `src/components/Button.ts`, you can import it using `import { Button } from 'components/Button';` instead of specifying the full path.

These configuration options can help simplify module imports in your TypeScript project by providing a base directory and custom module resolution mappings.
