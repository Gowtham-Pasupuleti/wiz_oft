import DropDown from './DropDown';
import { Menu, Transition } from '@headlessui/react';
import { useState, useRef } from 'react';
import useOutsideClick from './HandleClickOutSide';
import ConfigureGroup from '../Icons/ConfigureGroup';
import ConfigureUser from '../Icons/ConfigureUser';
import Link from 'next/link';

function WorkSpaceDropDown() {
    const ref = useRef();
    const [clicked, setClicked] = useState(false);

    useOutsideClick(ref, () => {
        setClicked(false);
    });

    return (
        <>
            <div className={``} ref={ref}>
                <Menu>
                    <div className='bg-[#5C20CF] rounded-sm w-full '>
                        
                        <Menu.Button
                            className={` font-light text-sm  outline-none focus:outline-none
           h-16  rounded-sm 
            px-3 pl-5 w-full flex text-[#f5f5f5]  items-center  hover:bg-[#5317C3] transition duration-500
           ${clicked ? 'bg-[#5317C3] ' : ''}`}
                            onClick={() => setClicked(!clicked)}
                        >
                            Workspace
                            <span className='ml-2'>
                                <svg
                                    className={`fill-current h-3 w-3 transform 
        transition duration-500 ease-in-out ${clicked ? 'rotate-180' : ''}`}
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
                            className={`flex flex-col  text-left
  rounded-md border-white  text-sm font-serif
  absolute mt-3  ring-1 ring-black ring-opacity-5 shadow-lg w-40 bg-white`}
                        >
                            <Link href="/myworkspace">
                                <a>
                                <DropDown
                                name='My workspace'
                                icon={<ConfigureUser />}
                            />
                            </a>
                            </Link>
                                
                            <Link href="/workspace360"><a>
                            <DropDown
                                name='Workspace-360°'
                                icon={<ConfigureGroup />}
                            />
                                </a></Link>
                            
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
}

export default WorkSpaceDropDown;
