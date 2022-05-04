import SettingsIcon from "../Icons/settingsIcon";
import BookingsIcon from "../Icons/bookingsIcon";

export default function Button(props) {
  return(
     <div><button className=" flex flex-wrap bg-[#5C20CF] text-sm text-white  py-5 px-3 h-full hover:bg-[#5317C3]" > 
     
          {props.iconLeft}{props.name}{props.iconRight}</button></div> 
  )
}
