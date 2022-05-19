import { Menu } from "@headlessui/react";

function DropDown(props) {
  if (!props.children) {
    return (
      <div className="mt-4">
        <Menu.Item>
          {({ active }) => (
            <a
              className={` ${
                active && ""
              }`}
              href="#"
            >
              <span className="flex items-center  text-sm font-normal font-sans"><span className="pr-3 pl-2">{props.icon}</span>{props.name}</span>
            </a>
          )}
        </Menu.Item>
      </div>
    );
  }

  return (
    <>
      <a className="rounded-sm relative block min-w-full text-sm font-sans font-normal px-1  mt-1 bg-white   text-black  list-none submenu">
        <button className="w-full text-left flex items-center outline-none focus:outline-none">
          <span className="pr-1 flex-1 "><div className="flex items-center">{props.icon}{props.name}</div></span>
          <span className="mr-auto">
            <svg
              className={`fill-current h-4 w-4
            transition duration-150 ease-in-out `}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className={`bg-white border rounded-sm absolute top-0 
      transition duration-200 ease-in-out origin-top-${
        props.isRight ? "right-0  mr-2" : "left-0 ml-2"
      } w-40 ${props.isRight ? "right-80" : "right-0 "}
   `}
        >
          {props.children}
        </ul>
      </a>
    </>
  );
}

export default DropDown;
