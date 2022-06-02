import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import UserIcon from '../Icons/userIcon'
import ErrorIcon from '../Icons/ErrorIcon'
import ProductUpdates from '../Icons/ProductUpdates'
import SupportReqIcon from '../Icons/SupportReqIcon'
import ConfigureUser from '../Icons/ConfigureUser'
import ReportsIcon from '../Icons/ReportsIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import Link from 'next/link'
import { useState } from 'react'
import { useRef } from 'react';
import useOutsideClick from './HandleClickOutSide';

export default function AdminDisclosure() {
  const ref = useRef();
    const [clicked, setClicked] = useState(false);

    useOutsideClick(ref, () => {
        setClicked(false);
    });
  return (
    <div className="">
      <div className="" ref={ref}>
        <Disclosure>
          {({ open }) => {
            return (
            <>
            
            <Disclosure.Button onClick={() => setClicked(!clicked)} className="flex  items-center w-full bg-[#5C20CF] text-white font-poppins font-light hover:bg-[#5317C3] py-4 px-5 text-sm">
            <UserIcon />
             <span>Admin</span>
             <svg className={`fill-current h-3 w-3 transform transition duration-500 ease-in-out ${clicked ? 'rotate-180' : ''}`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
              </Disclosure.Button>
            
        
                  
              {clicked && (<Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm text-white">
                <ul>
                    <Link href="/reportsProblem"><li className='px-4 pt-2 pb-2 flex items-center hover:bg-[#5317C3]'><ErrorIcon />&nbsp;Report Problem</li></Link>
                    <Link href="/supportRequest"><li className='px-4 pt-2 pb-2 flex items-center hover:bg-[#5317C3]'><SupportReqIcon />&nbsp;Support Request</li></Link>
                    <Link href="/productUpdates"><li className='px-4 pt-2 pb-2 flex items-center hover:bg-[#5317C3]'><span className='fill-white'><ProductUpdates /></span>&nbsp;Product Updates</li></Link>
                    <Link href="/account"><li className='px-4 pt-2 pb-2 flex items-center hover:bg-[#5317C3]'><ConfigureUser />&nbsp;Account</li></Link>
                    <Link href="/reports"><li className='px-4 pt-2 pb-2 flex items-center hover:bg-[#5317C3]'><ReportsIcon />&nbsp;Reports</li></Link>
                    <Link href="/logout"><li className='px-4 pt-2 pb-2 flex items-center hover:bg-[#5317C3]'><LogoutIcon />&nbsp;Logout</li></Link>
                    
                </ul>
                
              </Disclosure.Panel>)}
                  
              
              
              
              

            
              
            </>
          )}}
        </Disclosure>
        
      </div>
    </div>
  )
}
