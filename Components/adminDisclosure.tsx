import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import UserIcon from '../Icons/userIcon'

export default function AdminDisclosure() {
  return (
    <div className="">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
            <div className=''>
            <Disclosure.Button className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] py-3 ">
            <UserIcon />
             <span>Admin</span>
             <svg xmlns="http://www.w3.org/2000/svg" className={` ${open ? 'rotate-180 transform' : ''} h3 w-3 pl-2 fill-white`} viewBox="0 0 512 512"><title>arrow-triangle-down-glyph</title><path d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/></svg>
              </Disclosure.Button>
            
        
                  
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul>
                    <li className='px-4 pt-2 pb-2'>Report Problem</li>
                    <li className='px-4 pt-2 pb-2'>Support Request</li>
                    <li className='px-4 pt-2 pb-2'>Product Updates</li>
                    <li className='px-4 pt-2 pb-2'>Account</li>
                    <li className='px-4 pt-2 pb-2'>Reports</li>
                    <li className='px-4 pt-2 pb-2'>Logout</li>
                    
                </ul>
                
              </Disclosure.Panel>
                  
              
              
              
              

            </div>
              
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
