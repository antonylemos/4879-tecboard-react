type FeatureFlags = {
  USE_NEW_MUI_API: boolean;
};

export const flags: FeatureFlags = {
  USE_NEW_MUI_API: import.meta.env.VITE_FF_NEW_MUI_API === "true"
};

export function isEnabled(flag: keyof FeatureFlags): boolean {
  return flags[flag] ?? false;
}
