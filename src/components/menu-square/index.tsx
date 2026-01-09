'use client'
import { Portal } from '@/src/utils'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import { ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Link } from '../link'
import { data } from '@/src/data'

const squareMenuAtomsPositions = [
  'top-0 left-0',
  'bottom-0 left-0',
  'bottom-0 right-0',
  'top-0 right-0'
]

export const MenuSquare = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(prev => !prev)

  return (
    <>
      <motion.button
        className={twMerge(
          'group relative h-4 w-4 cursor-pointer transition-all duration-300 md:hidden',
          open && 'bg-primary rotate-135'
        )}
        whileTap={{
          scale: 0.9
        }}
        onClick={toggleOpen}
      >
        {squareMenuAtomsPositions.map(classname => (
          <MenuSquareAtom key={classname} classname={classname} open={open} />
        ))}
      </motion.button>
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
              className="flex flex-col gap-4 p-4 text-end transition-all duration-500"
            >
              {data.links.map((link, index) => (
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
                  <Link
                    className="text-4xl"
                    href={`#${link}`}
                    onClick={toggleOpen}
                  >
                    {link}
                  </Link>
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
  classname,
  open
}: {
  classname: string
  open?: boolean
}) => (
  <span
    className={twMerge(
      'absolute h-1.5 w-1.5 transition-all duration-500 group-hover:rotate-45',
      open ? 'scale-125 bg-black' : 'bg-primary',
      classname
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
        'fixed inset-0 bg-black/70',
        open ? 'visible' : 'invisible'
      )}
      onClick={onClose}
    >
      <div className="m-auto flex h-svh w-full max-w-[1392px] items-center justify-end backdrop-blur-sm">
        <div onClick={e => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  </Portal>
)
