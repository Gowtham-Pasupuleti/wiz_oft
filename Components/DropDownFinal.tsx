import { Menu } from "@headlessui/react";
import DropDown from "./DropDown";
import SubDropDownItems from "./SubDropDownItems";
import { useState, useRef } from "react";
import useOutsideClick from "./HandleClickOutSide";

function DropDownFinal() {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);

  useOutsideClick(ref, () => {
    setClicked(false);
  });

  return (
    <>
      <div
        className={` w-40 px-2 py-1 antialiased inline-block absolute`}
        ref={ref}
      >
        <Menu>
          <div className="  bg-white  rounded-sm w-full ">
            <Menu.Button
              className={`outline-none focus:outline-none
           h-12  rounded-sm 
            px-2 py-1 w-full flex bg-[#5c20cf] text-white justify-center font-sm  items-center pl-1
            `}
              onClick={() => setClicked(!clicked)}
            >
              Manage
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
  rounded-sm border-white font-medium text-base font-serif
  antialiased hover:subpixel-antialiased `}
          >
            <DropDown name="Partners" isDropDown={true} />
            <DropDown name="Customers" isDropDown={false} />
            <DropDown name="Ports" isDropDown={false} />
            <DropDown name="Liners" isDropDown={false} />
            <DropDown name="Executives" isDropDown={false} />
            <DropDown name="Job Management" isDropDown={false} />
            <DropDown name="Access Control" isDropDown={true} >
              <SubDropDownItems name="Configure Group" />
              <SubDropDownItems name="Configure User" />
            </DropDown>
            <DropDown name="Bulk RFQ" isDropDown={true} >
              <SubDropDownItems name="Manage RFQ" />
              <SubDropDownItems name="Add RFQ Buy Rate" />
              <SubDropDownItems name="Add RFQ Sell Rate" />
            </DropDown>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}

export default DropDownFinal;