import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { pt, ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

interface NoteCardProps {
  note: {
    date: Date,
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left focus:ring-2 focus:ring-lime-400 hover:ring-2 hover:ring-slate-600 bg-slate-800 p-5 space-y-3 overflow-hidden relative">
        <span className='text-sm font-medium text-slate-200'>
          {note.date.toISOString()}
        </span>
        <p className='text-sm leading-6 text-slate-300'>
          {note.content}
        </p>
        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-white/0' />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-8 fixed bg-black/50' />
        <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 h-[60vh] -translate-y-1/2 max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col'>
          <Dialog.DialogClose className='hover:text-slate-100 absolute right-0 bg-slate-800 p-1.5 text-slate-400'>
            <X className='size-5'/>
          </Dialog.DialogClose>
          <div className='flex flex-1 flex-col
           gap-3 p-5'>
            <span className='text-sm font-medium text-slate-300'>
              {formatDistanceToNow(note.date, {locale: ptBR, addSuffix: true})}
            </span>
            <p className='text-sm leading-6 text-slate-400'>{note.content}</p>
          </div>
              
          <button className='font-medium w-full bg-slate-800 py-4 text-center text-sm group text-slate-300 outline-none' type='button'>
              <p>Dejesa <span className='text-red-400 group-hover:underline'> apagar essa nota</span>?</p>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}