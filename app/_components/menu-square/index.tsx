'use client'
import { Portal } from '@/app/_utils'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import { ReactNode, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Link } from '../link'

const links = [
  'link - 0',
  'link - 1',
  'link - 2',
  'link - 3',
  'link - 4',
  'link - 5'
]

const positions = [
  'top-0 left-0',
  'top-0 right-0',
  'bottom-0 left-0',
  'bottom-0 right-0'
]

export const MenuSquare = () => {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleOpen = () => setOpen(prev => !prev)

  return (
    <>
      <button
        ref={buttonRef}
        className={twMerge(
          'group relative h-2.5 w-2.5 cursor-pointer transition-all duration-500',
          open && 'rotate-45 bg-white'
        )}
        onClick={toggleOpen}
      >
        {positions.map(position => (
          <MenuSquareAtom key={position} position={position} open={open} />
        ))}
      </button>
      <Modal open={open} onClose={toggleOpen}>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1
              }}
              className={twMerge(
                'flex flex-col gap-1 bg-black p-4 text-white transition-all duration-500'
              )}
            >
              {links.map((link, index) => (
                <motion.div
                  initial={{ translateX: 50, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  exit={{ translateX: 50, opacity: 0 }}
                  transition={{
                    delay: index / 25,
                    duration: 1,
                    type: 'spring'
                  }}
                  key={link}
                >
                  <Link href="">{link}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  )
}

const MenuSquareAtom = ({
  position,
  open
}: {
  position: string
  open?: boolean
}) => (
  <span
    className={twMerge(
      'absolute h-1 w-1 transition-all duration-500',
      open ? 'scale-125 bg-black' : 'bg-white',
      position
    )}
  />
)

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ open, onClose, children }: ModalProps) => (
  <Portal>
    <div
      aria-modal="true"
      role="dialog"
      className={twMerge(
        'fixed inset-0 z-50 flex bg-black/50',
        open ? 'visible' : 'invisible'
      )}
      onClick={onClose}
    >
      <div
        className="absolute top-12 right-10"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  </Portal>
)
