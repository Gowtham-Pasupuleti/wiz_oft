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

export default function ManageDisclosure() {
  return (
    <div className="">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
            <div className=''>
            <Disclosure.Button className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] py-3 ">
            <SettingsIcon />
             <span>Manage</span>
             <svg xmlns="http://www.w3.org/2000/svg" className={` ${open ? 'rotate-180 transform' : ''} h3 w-3 pl-2 fill-white`} viewBox="0 0 512 512"><title>arrow-triangle-down-glyph</title><path d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/></svg>
              </Disclosure.Button>
            
        
                  
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul>
                    <li className='px-4 pt-2 pb-2 flex items-center'><Partners />Partners</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><Customers />Customers</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><RateTemplates />Rate Templates</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><Ports />Ports</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><Liners />Liners</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><Executives />Executives</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'>
                    <Disclosure>
          {({ open }) => (

            <>
            <Disclosure.Button className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] py-3 ">
            <AccessControlIcon />
             <span>Access Control</span>
             <svg xmlns="http://www.w3.org/2000/svg" className={` ${open ? 'rotate-180 transform' : ''} h3 w-3 pl-2 fill-white`} viewBox="0 0 512 512"><title>arrow-triangle-down-glyph</title><path d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/></svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul>
                    <li >Configure User</li>
                    <li>Configure Group</li>
                </ul>
              </Disclosure.Panel>
              </>)}
              
              
              </Disclosure>
                   
                    </li>
                    
                    <li className='px-4 pt-2 pb-2'>
                    <Disclosure>
          {({ open }) => (

            <>
            <Disclosure.Button className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] py-3 ">
            <AccessControlIcon />
             <span>Bulk RFQ</span>
             <svg xmlns="http://www.w3.org/2000/svg" className={` ${open ? 'rotate-180 transform' : ''} h3 w-3 pl-2 fill-white`} viewBox="0 0 512 512"><title>arrow-triangle-down-glyph</title><path d="M3,111.67,247.67,418.4c4,5.06,12.6,5.06,16.65,0L509,111.64a15.21,15.21,0,0,0,2.2-13.9,14.2,14.2,0,0,0-1-2.32,10.66,10.66,0,0,0-9.39-5.62H11.14a10.64,10.64,0,0,0-9.38,5.62,13.93,13.93,0,0,0-1,2.27A15.26,15.26,0,0,0,3,111.67Z"/></svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul>
                    <li >Manage RFQ</li>
                    <li >Add RFQ Buy Rates</li>
                    <li >Add RFQ Sell Rates</li>
                </ul>
              </Disclosure.Panel>
              </>)}
              
              
              </Disclosure>
                    
                    </li>
                    
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