import DropDown from "./DropDown";
import { Menu } from "@headlessui/react";
import { useState, useRef } from "react";
import useOutsideClick from "./HandleClickOutSide";
import ConfigureGroup from "../Icons/ConfigureGroup";
import ConfigureUser from "../Icons/ConfigureUser";

function WorkSpaceDropDown() {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);

  useOutsideClick(ref, () => {
    setClicked(false);
  });

  return (
    <>
      <div className={` px-2 py-1 antialiased w-40 inline-block`} ref={ref}>
        <Menu>
          <div className="  bg-[#5C20CF]  rounded-sm w-full ">
            <Menu.Button
              className={`text-sm font-normal outline-none focus:outline-none
           h-12  rounded-sm 
            px-2 py-1 w-full flex text-white justify-center   items-center 
           hover:bg-[#5317C3] `}
              onClick={() => setClicked(!clicked)}
            >
              Workspace
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
            className={`flex flex-col  text-left
  rounded-sm border-white  text-sm font-serif
  antialiased hover:subpixel-antialiased absolute mt-2  ring-1 ring-black ring-opacity-5 shadow-lg w-40 `}
          >
            <DropDown name="My workspace" icon={<ConfigureUser />} />
            <DropDown name="Workspace-360°" icon={<ConfigureGroup />} />
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}

export default WorkSpaceDropDown;
