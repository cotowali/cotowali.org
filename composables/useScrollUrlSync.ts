import { useState } from '#imports'

type Range = { top: number, bottom: number }

function getActiveItem(range: Range, elements: { [id: string]: HTMLElement }) {
  let activeItem = { id: '', pos: -Infinity }
  Object.entries(elements).forEach(([id, el]) => {
    const pos = el.getBoundingClientRect().top

    // .          .
    // . #elem1   . outside of viewport
    // . #elem2   . <- sub target (activate if main target doesn't exist)
    // +----------+
    // | #elem3   | <- main target element
    // | ........ |
    // |          |
    // | outside  |
    // |   of     |
    // |  range   |
    // |          |
    // | #elem4   | <- this is not target (too low)
    // +----------+
    // . #elem5   . outside of viewport
    // .          .

    if (Math.max(activeItem.pos, pos) < range.top && activeItem.pos < pos) {
      // sub target
      activeItem = { id, pos }
    }
    if (range.top < pos && pos < range.bottom && pos < activeItem.pos) {
      // main target
      activeItem = { id, pos }
    }
  })
  return activeItem
}

export default () => {
  const range = useState('scrollUrlSyncRange', () => ({ top: 0, bottom: 20 }))
  const elements = useState<{ [id: string]: HTMLElement }>(
    'scrollUrlSyncElements',
    () => ({}),
  )

  const onScroll = () => {
    const { id } = getActiveItem(range.value, elements.value)
    const hash = id.length > 0 ? '#' + id : ''
    window.history.replaceState(null, '', new URL(hash, window.location.href))
  }

  return { range, elements, onScroll }
}
