import styled from "styled-components";
import ContributionSquare from "./ContributionSquare.tsx";

const SquaresLegend = styled.div`
    display: flex;
    width: max-content;
    gap: 2px;
`

const LegendContainer = styled.div`
    margin-top: 12px;
    display: flex;
    gap: 9px;
    align-items: center;

    p {
        color: #959494;
        font-size: 8px;
    }
`
export default function Legend() {
    const color1 = "#EDEDED";
    const color2 = "#ACD5F2";
    const color3 = "#7FA8C9";
    const color4 = "#527BA0";
    const color5 = "#254E77";

    return (
        <>
            <LegendContainer>
                <p>Меньше</p>
                <SquaresLegend>
                    <ContributionSquare color={color1} value="No" label="No"/>
                    <ContributionSquare color={color2} value="8" label="1-9"/>
                    <ContributionSquare color={color3} value="14" label="10-19"/>
                    <ContributionSquare color={color4} value="25" label="20-29"/>
                    <ContributionSquare color={color5} value="34" label="30+"/>
                </SquaresLegend>
                <p>Больше</p>
            </LegendContainer>
        </>
    )
}

