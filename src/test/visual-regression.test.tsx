import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { EventCard } from '../components/EventCard'
import type { Event } from '../features/events/types'

afterEach(cleanup)

vi.mock('../lib/featureFlags', () => ({
  isEnabled: vi.fn(() => false),
}))

const mockEvent: Event = {
  id: '42',
  name: 'React Summit 2024',
  date: '15/06/2024',
  theme: 'Front-end',
  image: 'https://placehold.co/282x236',
}

function renderEventCard(event: Event) {
  return render(
    <MemoryRouter>
      <EventCard event={event} />
    </MemoryRouter>
  )
}

describe('Visual Regression', () => {
  it('should test card changes', () => {
    const { container } = renderEventCard(mockEvent);

    expect(container).toMatchSnapshot();
  })
})