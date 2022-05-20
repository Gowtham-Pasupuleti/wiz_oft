import SettingsIcon from "../Icons/settingsIcon";
import BookingsIcon from "../Icons/bookingsIcon";

export default function Button(props) {
  return (
    <div className="flex w-40">
      <button
        className=" text-sm font-normal outline-none 
           h-12  rounded-sm 
            px-2 py-1 w-full flex text-white justify-center items-center 
           hover:bg-[#5317C3]"
      >
        <span className="">{props.iconLeft}</span>
        {props.name}
        {props.iconRight}
      </button>
    </div>
  );
}
// py-5 px-3
//

//  flex text-sm justify-center font-light w-full items-center bg-[#5C20CF]  text-white h-10 hover:bg-[#5317C3]
