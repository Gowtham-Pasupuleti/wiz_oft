import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import UserIcon from '../Icons/userIcon'
import ErrorIcon from '../Icons/ErrorIcon'
import ProductUpdates from '../Icons/ProductUpdates'
import SupportReqIcon from '../Icons/SupportReqIcon'
import ConfigureUser from '../Icons/ConfigureUser'
import ReportsIcon from '../Icons/ReportsIcon'
import LogoutIcon from '../Icons/LogoutIcon'

export default function AdminDisclosure() {
  return (
    <div className="">
      <div className="">
        <Disclosure>
          {({ open }) => (
            <>
            
            <Disclosure.Button className="flex  items-center w-full bg-[#5C20CF] text-white font-poppins font-light hover:bg-[#5317C3] py-4 px-5 text-sm">
            <UserIcon />
             <span>Admin</span>
             <svg className={`fill-current h-3 w-3 transform transition duration-500 ease-in-out ${open ? 'rotate-180' : ''}`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
              </Disclosure.Button>
            
        
                  
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <ul>
                    <li className='px-4 pt-2 pb-2 flex items-center'><ErrorIcon />&nbsp;Report Problem</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><SupportReqIcon />&nbsp;Support Request</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><span className='fill-white'><ProductUpdates /></span>&nbsp;Product Updates</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><ConfigureUser />&nbsp;Account</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><ReportsIcon />&nbsp;Reports</li>
                    <li className='px-4 pt-2 pb-2 flex items-center'><LogoutIcon />&nbsp;Logout</li>
                    
                </ul>
                
              </Disclosure.Panel>
                  
              
              
              
              

            
              
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
