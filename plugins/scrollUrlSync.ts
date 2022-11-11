import type { FunctionDirective } from 'vue'
import { useScrollUrlSync } from '#imports'
export default defineNuxtPlugin(({ vueApp }) => {
  const { registerId, removeId, onScroll } = useScrollUrlSync()

  const directiveScrollId: FunctionDirective<HTMLElement, string> = (el, binding) => {
    const oldId = binding.oldValue ?? ''
    const id = binding.value

    el.id = id
    registerId(id)
    removeId(oldId)
  }

  vueApp.directive('scroll-id', directiveScrollId)
  vueApp.directive('scroll-url-sync', {
    created() { window.addEventListener('scroll', onScroll) },
    unmounted() { window.removeEventListener('scroll', onScroll) },
  })
})
