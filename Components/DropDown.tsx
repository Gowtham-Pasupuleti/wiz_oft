import { Menu } from '@headlessui/react';

function DropDown(props) {
    if (!props.children) {
        return (
            <div className='mt-1'>
                <Menu.Item>
                    {({ active }) => (
                        <a className={` ${active && ''}`} href='#'>
                            <span className='flex items-center  text-xs font-light hover:bg-[#f5f5f5cd] h-10 p-4 font-poppins'>
                                <span className='pr-2 pl-1'>{props.icon}</span>
                                {props.name}
                            </span>
                        </a>
                    )}
                </Menu.Item>
            </div>
        );
    }

    return (
        <>
            <a className='rounded-sm relative block min-w-full text-sm font-sans font-light mt-1 hover:bg-[#f5f5f5cd] h-10  bg-white   text-black  list-none submenu'>
                <button className='w-full  flex justify-between items-center pl-2 pr-1 pt-2 outline-none focus:outline-none'>
                    <span className='grow-[0.4] flex'>
                        <div className='flex items-center justify-center'>
                            <div className='rotate-0'>{props.icon}</div>
                            <div className='w-full ml-2.5 font-light'>
                                {props.name}
                            </div>
                        </div>
                    </span>
                    <span className=''>
                        <svg
                            className={`fill-current h-4 w-4
            transition duration-150 ease-in-out rotate-[-90deg]`}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            strokeWidth='1'
                        >
                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                    </span>
                </button>
                <ul
                    className={`bg-white  rounded absolute top-0 
      transition duration-200 ease-in-out origin-top-${
          props.isRight ? 'right-0  mr-2' : 'left-0 ml-2'
      } w-40 ${props.isRight ? 'right-80' : 'right-0 '}
   `}
                >
                    {props.children}
                </ul>
            </a>
        </>
    );
}

export default DropDown;
//  <>
//             <a className='rounded-sm relative block min-w-full text-sm font-sans font-light mt-1 hover:bg-[#f5f5f5cd] h-10  bg-white   text-black  list-none submenu'>
//                 <button className='w-full text-left flex justify-between items-center pl-2 pr-1 pt-2 outline-none focus:outline-none'>
//                     <span className='grow-[0.4] flex'>
//                         <div className='flex items-center justify-center'>
//                             <div className='rotate-0'>{props.icon}</div>
//                             <div className='w-full ml-2.5 font-light'>
//                                 {props.name}
//                             </div>
//                         </div>
//                     </span>
//                     <span className=''>
//                         <svg
//                             className={`fill-current h-4 w-4
//             transition duration-150 ease-in-out rotate-[-90deg]`}
//                             xmlns='http://www.w3.org/2000/svg'
//                             viewBox='0 0 20 20'
//                             strokeWidth='1'
//                         >
//                             <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
//                         </svg>
//                     </span>
//                 </button>
//                 <ul
//                     className={`bg-white border rounded-sm absolute top-0
//       transition duration-200 ease-in-out origin-top-${
//           props.isRight ? 'right-0  mr-4' : 'left-0 ml-5 '
//       } w-40 ${props.isRight ? 'right-80' : 'right-0 ml-4'}
//    `}
//                 >
//                     {props.children}
//                 </ul>
//             </a>
//         </>

//  transition duration-200 ease-in-out origin-top-${
//       props.isRight ? 'right-0  mr-4' : 'left-0  '
//   } w-40 ${props.isRight ? 'right-80' : 'right-0 '}
