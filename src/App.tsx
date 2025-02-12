import './App.css'
import ContributionSquare from "./components/ContributionSquare.tsx";
import Legend from "./components/Legend.tsx"
import styled from "styled-components";
import {useEffect, useState} from "react";
import {eachDayOfInterval, endOfWeek, format, startOfWeek, subWeeks} from "date-fns";
import MonthsLabels from "./components/MonthsLabels";

const Squares = styled.div`
    display: grid;
    width: max-content;
    grid-template-rows: repeat(7, 1fr);
    grid-auto-flow: column;
    gap: 2px;
`
const Days = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 19px;
    flex-direction: column;
    font-size: 12px;
    color: #959494;
`

const Container = styled.div`
    display: flex;
    gap: 10px;
`
export default function App() {
    const [calendarData, setCalendarData] = useState(null);

    useEffect(() => {
        async function fetchCalendar() {
            const res = await fetch("https://dpg.gg/test/calendar.json");
            setCalendarData(await res.json());
        }

        fetchCalendar();
    }, []);

    const calendar = eachDayOfInterval({
        start: startOfWeek(subWeeks(new Date(), 50), {weekStartsOn: 1}),
        end: endOfWeek(new Date(), {weekStartsOn: 1}),
    });

    return (
        <>
            <Container>
                <Days>
                    <span>Пн</span>
                    <span>Ср</span>
                    <span>Пт</span>
                </Days>
                <div>
                    <MonthsLabels/>
                    <Squares>
                        {calendar.map((date) => (
                            <ContributionSquare
                                indexDate={date}
                                value={calendarData?.[format(date, "yyyy-MM-dd")] ?? 'No'}
                            />
                        ))}
                    </Squares>
                    <Legend/>
                </div>
            </Container>

        </>
    );
}