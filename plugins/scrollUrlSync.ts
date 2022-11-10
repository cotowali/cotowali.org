import type { FunctionDirective } from 'vue'
import { useScrollUrlSync } from '#imports'
export default defineNuxtPlugin(({ vueApp }) => {
  const { elements, onScroll } = useScrollUrlSync()

  const directiveScrollId: FunctionDirective<HTMLElement, string> = (el, binding) => {
    const oldId = binding.oldValue ?? ''
    const id = binding.value

    el.id = id
    elements.value[id] = el
    delete elements.value[oldId]
  }

  vueApp.directive('scroll-id', directiveScrollId)
  vueApp.directive('scroll-url-sync', {
    created() { window.addEventListener('scroll', onScroll) },
    unmounted() { window.removeEventListener('scroll', onScroll) },
  })
})
