import type { Ref } from 'vue'
import { createInjectionState } from '@vueuse/core'

const [ createDialogContext, useDialogContextWithoutErrorHandling ] = createInjectionState((
  dialog: Ref<HTMLDialogElement | undefined>
) => {
  function showModal() {
    return new Promise((resolve, reject) => {
      if (!dialog.value) {
        reject('Dialog not available')
      } else {
        dialog.value.returnValue = 'cancel'
        dialog.value.addEventListener('close', () => { resolve(dialog.value?.returnValue) }, { once: true })
        dialog.value.showModal()
      }
    })
  }

  function close(returnValue?: string) {
    dialog.value?.close(returnValue)
  }

  return { dialog, showModal, close }
})

function useDialogContext() {
  const context = useDialogContextWithoutErrorHandling()
  if (!context) throw new Error('This component needs to live in the context of a dialog')

  return context
}

export { createDialogContext, useDialogContext }
