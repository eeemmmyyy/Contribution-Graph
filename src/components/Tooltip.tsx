import styled from "styled-components";
import {format} from "date-fns";
import { ru } from 'date-fns/locale'

const Tool = styled.div`
    position: absolute;
    background: black;
    min-width: 130px;
    padding: 8px;
    top: 15px;
    right: -60px;
    border-radius: 3px;
    display: flex;
    gap: 4px;
    flex-direction: column;
    z-index: 2;
    pointer-events: none
`
const Title = styled.span`
    color: white;
    font-size: 12px;
`
const Date = styled.span`
    color: #7C7C7C;
    font-size: 10px;
`
export default function Tooltip({isShow, indexDate, value, label}) {
    if (isShow) {
        return (
            <>
                <Tool>
                    <Title>{label ?? value} contributions</Title>
                    <Date>
                        {indexDate && format(indexDate, "EEEE, MMMM d, yyyy", {locale: ru})}
                    </Date>
                </Tool>
            </>
        )
    }
}

