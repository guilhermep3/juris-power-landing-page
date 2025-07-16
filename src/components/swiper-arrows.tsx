import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { SwipperArrowsDiv } from "./styled/swper-arrows.style"

export const SwipperArrows = () => {

  return (
    <SwipperArrowsDiv>
      <MdOutlineKeyboardDoubleArrowLeft/>
      <MdOutlineKeyboardDoubleArrowLeft/>
      <MdOutlineKeyboardDoubleArrowRight/>
      <MdOutlineKeyboardDoubleArrowRight/>
    </SwipperArrowsDiv>
  )
}