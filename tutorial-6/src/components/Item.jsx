function Item({name, isPacked}) {
    // controller part/logical part
    const isCheckMark = isPacked && "✅";
  
    //view part
    return (
      <li className="item">{name} {isCheckMark}</li>
    )
}

export default Item;