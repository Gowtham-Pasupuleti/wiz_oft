import { Menu } from "@headlessui/react";

function DropDown(props) {
  if (!props.children) {
    return (
      <div className="mt-0.5  ">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`min-w-full bg-[#5c20cf] text-white flex flex-1 px-1 py-1 h-9 rounded-sm${
                active && "bg-white hover:bg-[#5325a8] "
              }`}
              href="#"
            >
              {props.name}
            </a>
          )}
        </Menu.Item>
      </div>
    );
  }

  return (
    <>
      <a className="rounded-sm relative block min-w-full h-9 px-1  mt-1  bg-[#5c20cf] text-white hover:bg-[#5325a8] list-none submenu">
        <button className="w-full text-left flex items-center outline-none focus:outline-none">
          <span className="pr-1 flex-1 ">{props.name}</span>
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