import { useState } from 'react'
import './App.css'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* https://www.radix-ui.com/docs/primitives/components/dropdown-menu#separator */}
      {/* 整体用Root包裹 */}
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        {/* trigger触发器 包裹触发dropdown的元素 */}
        <DropdownMenu.Trigger className='p-0'>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://www.github.com/Richard-Zhang1019.png" alt="" />
          </div>
        </DropdownMenu.Trigger>

        <AnimatePresence>
          {isOpen && (
            // Portal 传送门 用于将dropdown的内容传送到body下
            <DropdownMenu.Portal forceMount>
              {/* Content为触发后显示的内容 */}
              <DropdownMenu.Content align="start" sideOffset={6}>
                <motion.div
                  className="w-[200px] p-3 text-white border bg-gray-800/70 rounded-md backdrop-blur-sm flex flex-col gap-2 origin-top-left"
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.2 }}
                >
                  <DropdownMenu.DropdownMenuGroup className="flex flex-col gap-1.5">
                    <DropdownMenu.DropdownMenuItem>
                      Your Profile
                    </DropdownMenu.DropdownMenuItem>
                    <DropdownMenu.DropdownMenuItem>
                      Your Repositories
                    </DropdownMenu.DropdownMenuItem>
                    <DropdownMenu.DropdownMenuItem>
                      Your Star
                    </DropdownMenu.DropdownMenuItem>
                  </DropdownMenu.DropdownMenuGroup>
                  <DropdownMenu.Separator className="bg-white h-px" />
                  <DropdownMenu.DropdownMenuGroup className="flex flex-col gap-1.5">
                    <DropdownMenu.DropdownMenuItem>
                      Your Profile
                    </DropdownMenu.DropdownMenuItem>
                    <DropdownMenu.DropdownMenuItem>
                      Your Repositories
                    </DropdownMenu.DropdownMenuItem>
                    <DropdownMenu.DropdownMenuItem>
                      Your Star
                    </DropdownMenu.DropdownMenuItem>
                  </DropdownMenu.DropdownMenuGroup>
                  <DropdownMenu.Separator className="bg-white h-px" />
                  <div className="text-red-500 cursor-pointer">退出登录</div>
                  <DropdownMenu.Arrow className='fill-gray-800/70'/>
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
