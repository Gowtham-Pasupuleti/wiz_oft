import DropDown from "./DropDown";
import SubDropDownItems from "./SubDropDownItems";
import { Menu } from "@headlessui/react";
import { useState, useRef } from "react";
import useOutsideClick from "./HandleClickOutSide";

function UserDropdown() {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);

  useOutsideClick(ref, () => {
    setClicked(false);
  });

  return (
    <>
      <div className={` w-40 px-2 py-1 antialiased inline-block `} ref={ref}>
        <Menu>
          <div className="  bg-[#5C20CF]  rounded-sm w-full ">
            <Menu.Button
              className={`outline-none focus:outline-none
           h-12  rounded-sm 
            px-2 py-1 w-full flex text-white justify-center font-semibold  items-center pl-1
            `}
              onClick={() => setClicked(!clicked)}
            >
              Admin
              <span className="ml-1">
                <svg
                  className={`fill-current h-4 w-4 transform 
        transition duration-150 ease-in-out ${clicked ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </Menu.Button>
          </div>

          <Menu.Items
            className={`flex flex-col w-40 text-left
  rounded-sm border-white  text-base font-serif
  antialiased hover:subpixel-antialiased absolute `}
          >
            <DropDown name="Report Problem" />
            <DropDown name="Support Request" />
            <DropDown name="Product Updates" />
            <DropDown name="Account" />
            <DropDown name="Reports" />
            <DropDown name="Logout" />
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}

export default UserDropdown;
