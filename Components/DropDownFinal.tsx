// import { Menu } from "@headlessui/react";
// import DropDown from "./DropDown";
// import SubDropDownItems from "./SubDropDownItems";
// import { useState, useRef } from "react";
// import useOutsideClick from "./HandleClickOutSide";
// import SettingsIcon from "../Icons/settingsIcon";
// import Partners from "../Icons/partners";
// import Customers from "../Icons/customers";
// import RateTemplates from "../Icons/rateTemplates";
// import Executives from "../Icons/executives";
// import Liners from "../Icons/liners";
// import Ports from "../Icons/ports";
// function DropDownFinal() {
//   const ref = useRef();
//   const [clicked, setClicked] = useState(false);

//   useOutsideClick(ref, () => {
//     setClicked(false);
//   });

//   return (
//     <>
//       <div
//         className={`  px-2 py-1 antialiased inline-block  `}
//         ref={ref}
//       >
//         <Menu>
//           <div >
//             <Menu.Button
//               className={` text-sm font-normal outline-none focus:outline-none
//            h-full  rounded-sm
//             px-2 py-1 w-full flex bg-[#5c20cf] text-white justify-center   items-center pl-1  hover:bg-[#5317C3]
//             `}
//              onClick={() => setClicked(!clicked)}
//             >
//               <SettingsIcon />
//               Manage
//               <span className="ml-1">
//                 <svg
//                   className={`fill-current h-4 w-4 transform
//         transition duration-150 ease-in-out ${clicked ? "rotate-180" : ""}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//               </span>
//             </Menu.Button>
//           </div>

//           <Menu.Items
//             className={`absolute flex flex-col w-40 text-left
//   rounded-sm border-white font-medium text-base font-serif
//   antialiased hover:subpixel-antialiased `}
//           >
//           <DropDown name="Partners" icon={<Partners/>} isDropDown={true} />
//             <DropDown name="Customers" icon={<Customers/>} isDropDown={false} />
//             <DropDown name="Rate Templates" icon={<RateTemplates/>} isDropDown={false} />
//             <DropDown name="Ports" icon={<Ports/>} isDropDown={false} />
//             <DropDown name="Liners" icon={<Liners/>} isDropDown={false} />
//             <DropDown name="Executives" icon={<Executives/>} isDropDown={false} />
//             {/* <DropDown name="Job Management"icon={<Partners/>}  isDropDown={false} /> */}
//             <DropDown name="Access Control"  isDropDown={true} >
//               <SubDropDownItems name="Configure Group" />
//               <SubDropDownItems name="Configure User" />
//             </DropDown>
//             <DropDown name="Bulk RFQ"  isDropDown={true} >
//               <SubDropDownItems name="Manage RFQ" />
//               <SubDropDownItems name="Add RFQ Buy Rate" />
//               <SubDropDownItems name="Add RFQ Sell Rate" />
//             </DropDown>
//           </Menu.Items>
//         </Menu>
//       </div>
//     </>
//   );
// }

// export default DropDownFinal;

import { Menu } from "@headlessui/react";
import DropDown from "./DropDown";
import SubDropDownItems from "./SubDropDownItems";
import { useState, useRef } from "react";
import useOutsideClick from "./HandleClickOutSide";
import SettingsIcon from "../Icons/settingsIcon";
import Partners from "../Icons/partners";
import Customers from "../Icons/customers";
import RateTemplates from "../Icons/rateTemplates";
import Executives from "../Icons/executives";
import Liners from "../Icons/liners";
import Ports from "../Icons/ports";
import Quotes from "../Icons/quotesIcon";
import AccessControlIcon from "../Icons/AccessControlIcon";
import ConfigureUser from "../Icons/ConfigureUser";
import ConfigureGroup from "../Icons/ConfigureGroup";
import AirplaneIcon from "../Icons/AirplaneIcon";

function DropDownFinal() {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);

  useOutsideClick(ref, () => {
    setClicked(false);
  });

  return (
    <>
      <div
        className={`inline-block text-sm items-center font-normal  bg-[#5C20CF] px-2 py-1 w-40 `}
        ref={ref}
      >
        <Menu>
          <>
            <Menu.Button
              className={` font-normal outline-none focus:outline-none
           h-12  rounded-sm 
            px-2 py-1 w-full flex text-white justify-center items-center 
           hover:bg-[#5317C3]`}
              onClick={() => setClicked(!clicked)}
            >
              <SettingsIcon />
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
          </>

          <Menu.Items
            className={`fixed flex flex-col w-40
  border-white font-medium text-base font-serif mt-5
 antialiased hover:subpixel-antialiased ring-1 ring-black ring-opacity-5 shadow-lg rounded-md`}
          >
            <DropDown name="Partners" icon={<Partners />} isDropDown={true} />
            <DropDown
              name="Customers"
              icon={<Customers />}
              isDropDown={false}
            />
            <DropDown
              name="Rate Templates"
              icon={<RateTemplates />}
              isDropDown={false}
            />
            <DropDown name="Ports" icon={<Ports />} isDropDown={false} />
            <DropDown name="Liners" icon={<Liners />} isDropDown={false} />
            <DropDown
              name="Executives"
              icon={<Executives />}
              isDropDown={false}
            />
            {/* <DropDown name="Job Management"icon={<Partners/>}  isDropDown={false} /> */}
            <DropDown
              name="Access Control"
              icon={<AccessControlIcon />}
              isDropDown={true}
            >
              <SubDropDownItems
                leftIcon={<ConfigureGroup />}
                name="Configure Group"
              />
              <SubDropDownItems
                name="Configure User"
                leftIcon={<ConfigureUser />}
              />
            </DropDown>
            <DropDown
              name="Bulk RFQ"
              icon={<AccessControlIcon />}
              isDropDown={true}
            >
              <SubDropDownItems name="Manage RFQ" leftIcon={<AirplaneIcon />} />
              <SubDropDownItems
                name="Add RFQ Buy Rate"
                leftIcon={<AirplaneIcon />}
              />
              <SubDropDownItems
                name="Add RFQ Sell Rate"
                leftIcon={<AirplaneIcon />}
              />
            </DropDown>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}

export default DropDownFinal;
