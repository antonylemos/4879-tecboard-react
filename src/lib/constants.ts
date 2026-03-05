export const API_BASE_URL = 'http://localhost:3000'
export const EVENTS_PER_PAGE = 4
export const THEMES = ['Front-end', 'Design', 'Marketing'] as const
export type Theme = (typeof THEMES)[number]
