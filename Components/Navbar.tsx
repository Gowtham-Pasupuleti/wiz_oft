import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import WizIcon from '../Icons/wizIcon';
import Button from './button';
import Quotes from '../Icons/quotesIcon';
import SettingsIcon from '../Icons/settingsIcon';
import BookingsIcon from '../Icons/bookingsIcon';
import ChevronDown from '../Icons/chevronDown';
import RequestQuote from './requestQuote';
import UserIcon from '../Icons/userIcon';
import ShipIcon from '../Icons/shipIcon';
import DropDownFinal from './DropDownFinal';
import WorkSpaceDropDown from './WorkSpaceDropDown';
import UserDropdown from './UserDropdown';
import Link from 'next/link';

// const getUserType = ["Admin", "User"][Math.floor(Math.random() * 2)];
// export const UserContext = React.createContext(getUserType);
// export const UserProvider = UserContext.Provider;
function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-[#5C20CF] font-poppins'>
            <div className=''>
                <div className='flex items-center justify-between h-16 '>
                    <div className='flex items-center flex-[0.4]'>
                        <Link href="/home">
                        <div className='flex-shrink-0 '>
                            <WizIcon />
                        </div>
                        </Link>
                        <div className='hidden md:block justify-around w-full '>
                            <div className='flex w-full ml-8'>
                                
                                <WorkSpaceDropDown />
                                
                            <Link href="/quotes">
                                <a><Button
                                    name='Quotes'
                                    iconLeft={<Quotes />}
                                ></Button></a>
                                
                                </Link>
                                <Link href="/bookings"><a>
                                <Button
                                    name='Bookings'
                                    iconLeft={<BookingsIcon />}
                                ></Button>
                                    </a></Link>
                                
                                <div>
                                    <DropDownFinal />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center flex-[0.5] '>
                        <div className='hidden md:block w-full '>
                            <div className='flex h-full items-center justify-end'>
                                <Link href="/requestQuote"><a className='w-6/12'><RequestQuote /></a></Link>
                                
                                <a href="#"
              className="flex items-center text-white hover:bg-[#5317C3] h-16 text-sm font-light px-4"
                  >
                  <Link  href="wizVoyage"><a><span className='text-xl '>🚣</span> &nbsp;&nbsp;Wiz voyage!</a></Link>
                  
            </a>
            <a href="#"
              className="flex items-center text-white h-16 text-sm font-light px-4"
                  >
                  <Link href="shipIconClickLanding"><a>
                  <span><ShipIcon/></span> </a></Link>
                  
            </a>
                                <UserDropdown />
                            </div>
                        </div>
                    </div>

                    <div className=' flex md:hidden w-full justify-end'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            className='bg-[#5C20CF] inline-flex items-center justify-center p-2 rounded-md hover:text-gray-400 text-white hover:bg-[#5C20CF]'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter='transition ease-out duration-100 transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                {(ref) => (
                    <div className='md:hidden' id='mobile-menu'>
                        <div
                            ref={ref}
                            className='px-2 pt-2 pb-3 space-y-1 sm:px-3'
                        >
                            {/* <Button
                                name='Workspace'
                                iconRight={<ChevronDown />}
                            ></Button> */}
                            <WorkSpaceDropDown />
                            <Link href="/quotes">
                                <a><Button
                                    name='Quotes'
                                    iconLeft={<Quotes />}
                                ></Button></a>
                                
                                </Link>
                                <Link href="/bookings"><a>
                                <Button
                                    name='Bookings'
                                    iconLeft={<BookingsIcon />}
                                ></Button>
                                    </a></Link>
                            <DropDownFinal />
                            <Link href="/requestQuote"><a className='w-6/12'><RequestQuote /></a></Link>
                                
                                <a href="#"
              className="flex items-center text-white hover:bg-[#5317C3] h-16 text-sm font-light px-4"
                  >
                  <Link  href="wizVoyage"><a><span className='text-xl '>🚣</span> &nbsp;&nbsp;Wiz voyage!</a></Link>
                  
            </a>
                                <UserDropdown />

                            
                            {/* <div className=' '>
                                <Button
                                    name='Wiz Voyage!'
                                    iconLeft={<ShipIcon />}
                                ></Button>
                            </div>

                            <UserDropdown /> */}
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Nav;
