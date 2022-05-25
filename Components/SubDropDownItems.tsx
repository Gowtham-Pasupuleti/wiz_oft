function SubDropDownItems(props) {
    return (
        <li className=' hover:bg-[#f5f5f5cd] text-xs h-10 px-2 py-2 pl-2 flex font-light  items-center justify-start text-black bg-white rounded-md origin-center  cursor-pointer'>
            {props.leftIcon}
            <span className='ml-1'>{props.name}</span>
            {props.rightIcon}
        </li>
    );
}

export default SubDropDownItems;
