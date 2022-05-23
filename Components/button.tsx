import SettingsIcon from '../Icons/settingsIcon';
import BookingsIcon from '../Icons/bookingsIcon';

export default function Button(props) {
    return (
        <div className='flex bg-[#5C20CF] font-light text-sm h-full min-w-30 w-auto'>
            <button
                className='outline-none 
           h-16  rounded-sm 
            px-5  w-full flex text-white justify-center items-center 
           hover:bg-[#5317C3] transition duration-250'
            >
                <span>{props.iconLeft}</span>
                <span className='font-light pl-1'>{props.name}</span>
            </button>
        </div>
    );
}
// py-5 px-3
//

//  flex text-sm justify-center font-light w-full items-center bg-[#5C20CF]  text-white h-10 hover:bg-[#5317C3]
