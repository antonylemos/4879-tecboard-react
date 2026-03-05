import { useThemeStore } from '../stores/themeStore'

export function useThemeMode() {
  const mode = useThemeStore((s) => s.mode)
  const toggleMode = useThemeStore((s) => s.toggleMode)
  return { mode, toggleMode }
}
