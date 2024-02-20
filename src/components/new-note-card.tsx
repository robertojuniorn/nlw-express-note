import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import {toast} from 'sonner'

export function NewCard() {
  const [shouldShowOnboard, setShouldOnboarding] = useState(true)
  const [content, setContent] = useState('')

  function handleStartEditor() {
    setShouldOnboarding(false)
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)

    if (event.target.value === '') {
      setShouldOnboarding(true)
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()
    console.log(content)

    toast.success('Nota criada com sucesso.')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex-col text-left gap-3 bg-slate-700 p-5 space-y-3 focus:ring-2 focus:ring-lime-400 hover:ring-2 hover:ring-slate-600 outline-none">
        <span className='text-sm font-medium text-slate-200'>
          Adicionar nota
        </span>
        <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-8 fixed bg-black/50' />
        <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 h-[60vh] -translate-y-1/2 max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col'>
          <Dialog.DialogClose className='hover:text-slate-100 absolute right-0 bg-slate-800 p-1.5 text-slate-400'>
            <X className='size-5' />
          </Dialog.DialogClose>

          <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>
            <div className='flex flex-1 flex-col
           gap-3 p-5'>
              <span className='text-sm font-medium text-slate-300'>

              </span>

              {shouldShowOnboard ? (
                <p className='text-sm leading-6 text-slate-400'>Comece <button className='text-lime-400 hover:underline'>gravando uma nota</button> em Audio ou de preferir <button onClick={handleStartEditor} className='text-lime-400 hover:underline'>utilize apenas texto</button>.</p>
              ) : (
                <textarea
                  autoFocus
                  className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                  onChange={handleContentChange}
                />
              )}

            </div>

            <button type="submit" className='font-medium w-full bg-lime-400 py-4 text-center text-sm hover:bg-lime-500 text-slate-800 outline-none'>
              <p>Salvar nota</p>
            </button>
          </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}