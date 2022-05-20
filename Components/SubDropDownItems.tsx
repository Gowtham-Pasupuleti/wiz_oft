function SubDropDownItems(props) {
  return (
    <li className="  hover:bg-[#f5f5f5cd] h-10 w-50 flex justify-start text-black bg-white rounded-sm origin-center mt-1 cursor-pointer">
      {props.leftIcon}
      <span className="ml-1">{props.name}</span>
      {props.rightIcon}
    </li>
  );
}

export default SubDropDownItems;
