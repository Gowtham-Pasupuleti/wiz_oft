import DropDown from "./DropDown";
import SubDropDownItems from "./SubDropDownItems";
import { Menu } from "@headlessui/react";
import { useState, useRef, useContext } from "react";
import useOutsideClick from "./HandleClickOutSide";
import UserIcon from "../Icons/userIcon";
import SupportReqIcon from "../Icons/SupportReqIcon";
import ProductUpdates from "../Icons/ProductUpdates";
import ConfigureUser from "../Icons/ConfigureUser";
import ReportsIcon from "../Icons/ReportsIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import ErrorIcon from "../Icons/ErrorIcon";

function UserDropdown() {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);

  useOutsideClick(ref, () => {
    setClicked(false);
  });

  return (
    <>
      <div className={`  px-2 py-1  w-40  antialiased inline-block `} ref={ref}>
        <Menu>
          <div className="  bg-[#5C20CF]  rounded-sm w-full ">
            <Menu.Button
              className={`text-sm font-normal outline-none focus:outline-none
           h-12  rounded-sm 
            px-2 py-1 w-full flex text-white justify-center   items-center 
           hover:bg-[#5317C3] `}
              onClick={() => setClicked(!clicked)}
            >
              <UserIcon />
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
  antialiased hover:subpixel-antialiased absolute mt-3
  ring-1 ring-black ring-opacity-5 shadow-lg
  `}
          >
            <DropDown name="Account" icon={<ConfigureUser />} />
            <DropDown name="Reports" icon={<ReportsIcon />} />
            <DropDown name="Report Problem" icon={<ErrorIcon />} />
            <DropDown name="Support Request" icon={<SupportReqIcon />} />
            <DropDown name="Product Updates" icon={<ProductUpdates />} />
            <DropDown name="Logout" icon={<LogoutIcon />} />
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}

export default UserDropdown;
