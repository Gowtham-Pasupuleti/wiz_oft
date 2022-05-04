import Quotes from "../Icons/quotesIcon";
import SettingsIcon from "../Icons/settingsIcon";
import BookingsIcon from "../Icons/bookingsIcon";
import ChevronDown from "../Icons/chevronDown";
import RequestQuote from "./requestQuote";
import WizIcon from "../Icons/wizIcon";
import Button from "./button";

const Navbar=()=>{
    return (
        
            <nav className="  pl-40 items-center bg-[#5C20CF] flex flex-row ">
                <div className=" flex h-full m-0"  > 
                <Button name=""iconLeft={<WizIcon/>}></Button>

                    <Button name="WorkSpace" iconRight={<ChevronDown/>}></Button>
                    <Button name="Quotes" iconLeft={<Quotes/>}></Button>
                    <Button name="Bookings" iconLeft={<BookingsIcon/>}></Button>
                    <Button name="Manage" iconLeft={<SettingsIcon/>} iconRight={<ChevronDown/>}></Button>
                    </div>
                    <div className="flex ml-80 m-0 h-full ">
                        <RequestQuote />
                    <Button name="Wiz Voyage" ></Button>


                    <Button name="Admin" iconRight={<ChevronDown/>}></Button>
                    </div>
                    {
      }
            </nav>
        
    )
}
export default Navbar;

