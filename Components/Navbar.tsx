import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import WizIcon from "../Icons/wizIcon";
import Button from "./button";
import Quotes from "../Icons/quotesIcon";
import SettingsIcon from "../Icons/settingsIcon";
import BookingsIcon from "../Icons/bookingsIcon";
import ChevronDown from "../Icons/chevronDown";
import RequestQuote from "./requestQuote";
import UserIcon from "../Icons/userIcon";
import ShipIcon from "../Icons/shipIcon";
import DropDownFinal from "./DropDownFinal";
import WorkSpaceDropDown from "./WorkSpaceDropDown";
import UserDropdown from "./UserDropdown";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#5C20CF]  font-sans font-extralight ">
      <div className=" mx-auto pl-2 ̰ sm:pl-4 md:pl-4 lg:pl-6 ">
        <div className="flex  items-center justify-between">
          <div className="flex  h-full items-center">
            <div className="flex-shrink-0 py-3 md:py-2 md:pr-12">
              <WizIcon />
            </div>
            <div className="hidden md:block justify-around w-30 ">
              <div className="flex items-center">
                {/* <Button name="Workspace" iconRight={<ChevronDown/>}></Button> */}
                <WorkSpaceDropDown />
                <Button name="Quotes" iconLeft={<Quotes />}></Button>
                <Button name="Bookings" iconLeft={<BookingsIcon />}></Button>
                <div className="h-15 w-38 flex ">
                  <DropDownFinal />
                </div>
                {/* <Button name="Manage" iconLeft={<SettingsIcon/>} iconRight={<ChevronDown/>}></Button> */}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex h-full items-center">
                <RequestQuote />
                <Button name="Wiz Voyage!" iconLeft={<ShipIcon />}></Button>
                <UserDropdown />
              </div>
            </div>
          </div>

          <div className=" flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#5C20CF] inline-flex items-center justify-center p-2 rounded-md hover:text-gray-400 text-white hover:bg-[#5C20CF]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Button name="Workspace" iconRight={<ChevronDown />}></Button>
              <Button name="Quotes" iconLeft={<Quotes />}></Button>
              <Button name="Bookings" iconLeft={<BookingsIcon />}></Button>
              <Button
                name="Manage"
                iconLeft={<SettingsIcon />}
                iconRight={<ChevronDown />}
              ></Button>

              <RequestQuote />
              <Button name="Wiz Voyage!" iconLeft={<ShipIcon />}></Button>

              <UserDropdown />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
