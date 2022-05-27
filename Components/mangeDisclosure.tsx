import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import SettingsIcon from '../Icons/settingsIcon'
import Partners from '../Icons/partners'
import Customers from '../Icons/customers'
import RateTemplates from '../Icons/rateTemplates'
import Ports from '../Icons/ports'
import Liners from '../Icons/liners'
import Executives from '../Icons/executives'
import AccessControlIcon from '../Icons/AccessControlIcon'
import AirplaneIcon from '../Icons/AirplaneIcon'
import Link from 'next/link'

export default function ManageDisclosure() {
  return (
    <div className="">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
            <div className=''>
            <Disclosure.Button className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] py-4 px-5 font-poppins text-sm">
            <SettingsIcon />
             <span>Manage</span>
             {/* <svg xmlns="http://www.w3.org/2000/svg" className={` ${open ? 'rotate-180 transform' : ''} h3 w-3 pl-2 fill-white`} viewBox="0 0 512 512"><title>arrow-triangle-down-glyph</title><path d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/></svg> */}
             <svg className={`fill-current h-3 w-3 transform transition duration-500 ease-in-out ${open ? 'rotate-180' : ''}`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
              </Disclosure.Button>
            
        
                  
            <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-white">
                <ul>
                    <Link href="/partners"><li className='px-5 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Partners />&nbsp;Partners</li></Link>
                    <Link href="/customers"><li className='px-5 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Customers />&nbsp;Customers</li></Link>
                    <Link href="/rateTemplates"><li className='px-5 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><RateTemplates />&nbsp;Rate Templates</li></Link>
                    <Link href="/ports"><li className='px-5 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Ports />&nbsp;Ports</li></Link>
                    <Link href="/liners"><li className='px-5 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Liners />&nbsp;Liners</li></Link>
                    <Link href="/executives"><li className='px-5 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Executives />&nbsp;Executives</li></Link>
                    <li className=''>
                    <Disclosure>
          {({ open }) => (

            <>
            <Disclosure.Button className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] px-5 pt-2 pb-3 ">
            <AccessControlIcon />
             <span>&nbsp;Access Control</span>
             <svg className={`fill-current h-3 w-3 transform transition duration-500 ease-in-out ${open ? 'rotate-180' : ''}`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul>
                    <li className='px-5 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Partners/>&nbsp;Configure User</li>
                    <li className='px-5 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Customers/>&nbsp;Configure Group</li>
                </ul>
              </Disclosure.Panel>
              </>)}
              
              
              </Disclosure>
                   
                    </li>
                    
                    { /* <li className=''>
                    <Disclosure>
          {({ open }) => (

            <>
            <Disclosure.Button className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] px-5 pt-2 pb-3 ">
            <AccessControlIcon />
             <span>&nbsp;Bulk RFQ</span>
             <svg xmlns="http://www.w3.org/2000/svg" className={` ${open ? 'rotate-180 transform' : ''} h3 w-3 pl-2 fill-white`} viewBox="0 0 512 512"><title>arrow-triangle-down-glyph</title><path d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/></svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul>
                    <li className='px-4 pt-2 pb-2 flex items-center'><Liners/>&nbsp;Manage RFQ</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><Liners/>&nbsp;Add RFQ Buy Rates</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><Liners/>&nbsp;Add RFQ Sell Rates</li>
                </ul>
              </Disclosure.Panel>
              </>)}
              
              
              </Disclosure>
                    
                    </li>
                     */}
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