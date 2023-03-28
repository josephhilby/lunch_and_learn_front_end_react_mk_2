import Heart from "react-animated-heart";
import { useState } from "react";

export default function FavoriteButton(props) {
  const [isClick, setClick] = useState(false)
  return(
    <Heart isClick={isClick} onClick={() => setClick(!isClick)}/>
  )
}