import DropDown from './DropDown';
import SubDropDownItems from './SubDropDownItems';
import { Menu, Transition } from '@headlessui/react';
import { useState, useRef, useContext } from 'react';
import useOutsideClick from './HandleClickOutSide';
import UserIcon from '../Icons/userIcon';
import SupportReqIcon from '../Icons/SupportReqIcon';
import ProductUpdates from '../Icons/ProductUpdates';
import ConfigureUser from '../Icons/ConfigureUser';
import ReportsIcon from '../Icons/ReportsIcon';
import LogoutIcon from '../Icons/LogoutIcon';
import ErrorIcon from '../Icons/ErrorIcon';
import Link from 'next/link';

function UserDropdown() {
    const ref = useRef();
    const [clicked, setClicked] = useState(false);

    useOutsideClick(ref, () => {
        setClicked(false);
    });

    return (
        <>
            <div
            // justify-end px-2 py-1 bg-[#5C20CF]  w-30  antialiased inline-block
                className={`` }
                ref={ref}
            >
                <Menu>
                    <div className='  bg-[#5C20CF]  rounded-sm w-full '>
                        <Menu.Button
                            className={`px-4 text-sm font-poppinsSemi outline-none focus:outline-none
           h-16 rounded-sm 
         w-full flex text-white md:justify-center   items-center 
           hover:bg-[#5317C3] `}
                            onClick={() => setClicked(!clicked)}
                        >
                            <UserIcon />
                            Admin
                            <span className='ml-1'>
                                <svg 
                                    className={`fill-current h-3 w-3 transform 
        transition duration-300 ease-in-out ${clicked ? 'rotate-180' : ''}`}
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                </svg>
                            </span>
                        </Menu.Button>
                    </div>
                    <Transition 
                        enter='transition duration-500 ease-in'
                        enterFrom='transform l-0 t-0 scale-100 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-300 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'
                    >
                        <Menu.Items 
                            className={`flex flex-col text-left
                            font-light
  rounded-md border-white w-40 text-base font-poppins
  absolute top-0 right-0 mt-2 mr-1 min-w-50
  ring-1 ring-black ring-opacity-5 shadow-lg bg-white
  `}
                        >
                            <Link href="/reportsProblem"><a>
                            <DropDown
                                name='Report Problem'
                                icon={<ErrorIcon />}
                            /></a></Link>
                            
                            <Link href="/supportRequest"><a>
                            <DropDown
                                name='Support Request'
                                icon={<SupportReqIcon />}
                            />
                                </a></Link>
                            
                            <Link href="/productUpdates"><a>
                            <DropDown
                                name='Product Updates'
                                icon={<span className='text-black '><ProductUpdates /></span>}
                            />
                                </a></Link>
                            
                            <Link href="/account"><a><DropDown name='Account' icon={<ConfigureUser />} /></a></Link>
                            
                            <Link href="reports"><a><DropDown name='Reports' icon={<ReportsIcon />} /></a></Link>
                            
                            
                            <Link href="/logout"><a><DropDown name='Logout' icon={<LogoutIcon />} /></a></Link>
                           
                            
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
}

export default UserDropdown;
