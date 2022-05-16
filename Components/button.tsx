import SettingsIcon from "../Icons/settingsIcon";
import BookingsIcon from "../Icons/bookingsIcon";

export default function Button(props) {
  return(
     <button className="flex text-sm font-light items-center bg-[#5C20CF]  text-white h-full py-5 px-3 hover:bg-[#5317C3] "> 
     
          {props.iconLeft}{props.name}{props.iconRight}</button>
  )
}
// py-5 px-3