import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { Event } from "../features/events/types"
import { api } from "../lib/api"

const mockEvent: Event = {
  id: '1',
  name: 'React Summit 2024',
  date: '15/06/2024',
  theme: 'Front-end',
  image: 'https://placehold.co/282x236',
}

function mockJsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Context-Type': 'application/json' }
  })
}

describe('API Contract', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should return required fields with correct types', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(mockJsonResponse(mockEvent))

    const result = await api.get<Event>('/events/1');

    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('date')
    expect(result).toHaveProperty('theme')
  })

  it('should event structure dont change', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(mockJsonResponse(mockEvent))

    const result = await api.get<Event>('/events/1');

    expect(result).toMatchSnapshot()
  })
})