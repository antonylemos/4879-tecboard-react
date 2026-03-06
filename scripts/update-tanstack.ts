import { run } from 'npm-check-updates';
import { execSync } from 'child_process';

async function updateTanStack() {
  // 1. Bump
  const upgraded = await run({
    filter: "@tanstack/*",
    target: "latest",
    upgrade: true,
    cwd: process.cwd(),
  })

  if (Object.keys(upgraded ?? {}).length === 0) {
    return console.info("Tanstack já atualizado!");
  }

  console.info("Tanstack atualizado:", upgraded);

  // 2. Install
  execSync("pnpm install", { stdio: "inherit" });

  // 3. Apply codemod
  try {
    execSync(
      'npx jscodeshift ./src/ --extensions=ts,tsx --parser=tsx --transform=./node_modules/@tanstack/react-query/codemods/v4/replace-import-specifier.js',
      { stdio: "inherit" }
    );
  } catch (error) {
    console.warn("Codemod não disponível, prosseguindo...");
  }

  // 4. Lint fix
  execSync("pnpm lint --fix", { stdio: "inherit" });

  // 5. Test
  // TODO

  console.info("Pipeline de atualização completa!");
}

updateTanStack()
