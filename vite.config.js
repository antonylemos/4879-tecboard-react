import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      {
        test: {
          name: 'api',
          globals: true,
          include: ['src/test/api-contract.test.ts'],
          environment: 'node',
          setupFiles: ['./src/test/setups.ts']
        }
      }
    ]
  }
})
