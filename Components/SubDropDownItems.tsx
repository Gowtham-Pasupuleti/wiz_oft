function SubDropDownItems(props) {
  return (
    <li className="  hover:bg-[#c0bec4] text-black bg-[#f5f5f5ce] origin-center px-1 py-1 my-1 mx-1 cursor-pointer">
      {props.leftIcon}
      {props.name}
      {props.rightIcon}
    </li>
  );
}

export default SubDropDownItems;
