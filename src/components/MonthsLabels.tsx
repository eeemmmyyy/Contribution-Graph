import styled from "styled-components";
import {eachMonthOfInterval, endOfWeek, format, startOfWeek, subWeeks} from "date-fns";
import {ru} from "date-fns/locale";

const MonthsHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
`;

const MonthLabel = styled.div`
    font-size: 12px;
    text-align: center;
    color: #959494;
    text-transform: capitalize;
    width: calc(100% / 12);
`;

function MonthsLabels() {
    const start = startOfWeek(subWeeks(new Date(), 50), { weekStartsOn: 1 });
    const end = endOfWeek(new Date(), { weekStartsOn: 1 });
    const months = eachMonthOfInterval({ start, end });

    return (
        <MonthsHeader>
            {months.map((month) => (
                <MonthLabel>
                    {format(month, "LLL", {locale: ru})}
                </MonthLabel>
            ))}
        </MonthsHeader>
    );
}

export default MonthsLabels;