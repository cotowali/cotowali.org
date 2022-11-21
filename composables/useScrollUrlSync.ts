import { useState } from '#imports'

type Range = { top: number, bottom: number }

function getActiveItem(range: Range, elementIds: { [id: string]: boolean }) {
  let activeItem = { id: '', pos: -Infinity }
  Object.entries(elementIds)
    .filter(([_, enabled]) => enabled)
    .forEach(([id, _]) => {
      const el = document.getElementById(id)
      if (el === null) {
        throw new Error(`#${ id } not found`)
      }
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
  const targetIds = useState<{ [id: string]: boolean }>(
    'scrollUrlSyncElements',
    () => ({}),
  )
  const activeId = useState('scrollUrlSyncActiveId', () => '')

  const onScroll = () => {
    const { id } = getActiveItem(range.value, targetIds.value)
    activeId.value = id
    const hash = id.length > 0 ? '#' + id : ''
    history.replaceState(history.state, '', new URL(hash, window.location.href))
  }

  const registerId = (id: string) => {
    targetIds.value[id] = true
  }

  const removeId = (id: string) => {
    delete targetIds.value[id]
  }

  return { range, targetIds, activeId, registerId, removeId, onScroll }
}
