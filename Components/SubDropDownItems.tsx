function SubDropDownItems(props) {
    return (
      <li className=" bg-[#5c20cf] text-white hover:bg-[#5325a8] origin-center px-1 py-1 my-1 mx-1 cursor-pointer">
        {props.leftIcon}
        {props.name}
        {props.rightIcon}
      </li>
    );
  }
  
  export default SubDropDownItems;