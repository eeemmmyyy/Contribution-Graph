import styled from "styled-components";
import {useState} from "react";
import Tooltip from "./Tooltip.tsx";
const Square = styled.div`
        width: 15px;
        height: 15px;
        background-color: ${({ color }) => color};
        position: relative;
            &:hover {
                border: 1px solid rgba(0, 0, 0, 0.9);
            }
        `
function getColorByValue(value) {
    if (value == 'No') {
        return "#EDEDED";
    } else if (value <= 9) {
        return "#ACD5F2";
    } else if (value >= 10 && value <= 19) {
        return "#7FA8C9";
    } else if (value >= 20 && value <= 29) {
        return "#527BA0";
    } else {
        return "#254E77";
    }
}
export default function ContributionSquare({indexDate, value, label}) {
    const color = getColorByValue(value);

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <Square color={color} onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}>
                <Tooltip isShow={isHover} indexDate={indexDate} value={value} label={label}/>
            </Square>
        </>
    )
}

