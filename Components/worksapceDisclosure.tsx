// import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/solid'
// import ConfigureUser from '../Icons/ConfigureUser'
// import ConfigureGroup from '../Icons/ConfigureGroup'
// import Partners from '../Icons/partners'
// import Customers from '../Icons/customers'
// import Link from 'next/link'
// import { useEffect } from 'react'
// import { useState, useRef } from 'react';
// import useOutsideClick from './HandleClickOutSide';
// import { Transition } from '@headlessui/react'




// export default function WorksapceDisclosure() {
//   const ref = useRef();
//     const [clicked, setClicked] = useState(false);

//     useOutsideClick(ref, () => {
//         setClicked(false);
//     });
//   return (
//     <div className="" >
//       <div className="" ref={ref} >
        
//         <Disclosure>
        
          
//             <>
//             <div className='' >
//             <Disclosure.Button  onClick={() => setClicked(!clicked)} className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] py-4 px-5 text-sm" >
//             <ConfigureGroup /><span className='px-1'>Workspace</span>
//             <svg className={`fill-current h-3 w-3 transform transition duration-500 ease-in-out ${clicked ? 'rotate-180' : ''}`}
//                 xmlns='http://www.w3.org/2000/svg'
//                 viewBox='0 0 20 20'>
//               <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
//               </svg>
//               </Disclosure.Button>
            
        
                  
//             {/* <Disclosure.Panel className="px-10 pt-4 pb-3 text-sm text-white flex items-center hover:bg-[#5317C3]">
//             <Link href="/myworkspace"><a className='flex items-center'><Partners /> &nbsp;My Workspace</a></Link>
//               </Disclosure.Panel>
                  
//               <Disclosure.Panel className="px-10 pt-4 pb-3 text-sm text-white flex items-center hover:bg-[#5317C3]">
//               <Link href="/workspace360"><a className='flex items-center'><Customers />&nbsp;Workspace 360</a></Link>
//               </Disclosure.Panel> */}

           
              
//               <Disclosure.Panel className={`px-4 pt-2 pb-2 text-sm text-white `} >
              
//                 <ul >
//                 <Link href="/myworkspace"><li className='px-6 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Partners />&nbsp;My workspace</li></Link>
//                 <Link href="/workspace360"><li className='px-6 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Customers />&nbsp;Workspace 360</li></Link>
//                   </ul>
                  
//                   </Disclosure.Panel>
                  
                  
              

//             </div>
              
//             </>
        
//         </Disclosure>
        
//       </div>
//     </div>
//   )
// }


import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import ConfigureUser from '../Icons/ConfigureUser'
import ConfigureGroup from '../Icons/ConfigureGroup'
import Partners from '../Icons/partners'
import Customers from '../Icons/customers'
import Link from 'next/link'
import { useState } from 'react'
import { useRef } from 'react';
import useOutsideClick from './HandleClickOutSide';

export default function WorksapceDisclosure() {
  const ref = useRef();
    const [clicked, setClicked] = useState(false);

    useOutsideClick(ref, () => {
        setClicked(false);
    });
  return (
    
      <div className="" ref={ref}>
        <Disclosure>

          {({ open }) =>{
            console.log("open state of worksapce=",clicked);
            return  (
            <>
            <div className='' >
            <Disclosure.Button onClick={() => setClicked(!clicked)} className="flex  items-center w-full bg-[#5C20CF] text-white hover:bg-[#5317C3] py-4 px-5 text-sm">
            <ConfigureGroup /><span className='px-1'>Workspace</span>
            <svg className={`fill-current h-3 w-3 transform transition duration-500 ease-in-out ${clicked ? 'rotate-180' : ''}`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
              </Disclosure.Button>
            

          
{clicked && (
              <Disclosure.Panel static className="px-4 pt-2 pb-2 text-sm text-white">
                <ul>
                <Link href="/myworkspace"><li className='px-6 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Partners />&nbsp;My workspace</li></Link>
                <Link href="/workspace360"><li className='px-6 pt-2 pb-3 flex items-center hover:bg-[#5317C3]'><Customers />&nbsp;Workspace 360</li></Link>
                  </ul>
                  </Disclosure.Panel>
)}


            </div>
              
            </>

          )}}
        </Disclosure>
        
      </div>
    
  )
}

