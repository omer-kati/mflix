// import clientPromise from '../lib/mongodb'
import React, {Fragment, useEffect, useRef, useState} from "react";
// import {BryntumSplitter} from "@bryntum/gantt-react";
import {histogramConfig, ganttConfig} from "../AppConfig";
import SideBar from "../components/SideBar";
import dynamic from "next/dynamic";

const Gantt = dynamic(
    () => import("../components/Gantt.js"), {ssr: false}
);

const Histogram = dynamic(
    () => import("../components/Histogram.js"), {ssr: false}
);
// const {BryntumSplitter} = dynamic(
//     () => import("@bryntum/gantt-react"), {ssr: false}
// );

export default function Home() {
    const ganttRef = useRef(null);
    const histogramRef = useRef(null);

    const [dateRange, setDateRange] = useState({
        "startDate": "2019-01-14",
        "endDate": "2019-01-21"
    });

    useEffect(() => {
        if (histogramRef.current?.instance && ganttRef.current?.instance)
            histogramRef.current.instance.addPartner(ganttRef.current.instance);
    }, [histogramRef.current, ganttRef.current]);


    useEffect(() => {
        if (dateRange.startDate && ganttRef.current?.instance) {
            ganttRef.current.instance.project.setStartDate(dateRange.startDate)
            ganttRef.current.instance.project.setEndDate(dateRange.endDate)
        }
    }, [dateRange, ganttRef.current])

    return (
        <Fragment>
            <div id={"content"}>
                <SideBar
                    setDataRanges={(e) => setDateRange(e)}

                    // save={saveEvents}
                />
                <Gantt
                    ref={ganttRef}
                    startDate={dateRange.startDate}
                    endData={dateRange.endDate}
                    {...ganttConfig}
                />
                {/*<BryntumSplitter/>*/}
                <Histogram
                    ref={histogramRef}
                    startDate={dateRange.startDate}
                    endData={dateRange.endDate}
                    {...histogramConfig}
                />
            </div>
        </Fragment>

    );
}

// export async function getServerSideProps(context) {
//     try {
//         await clientPromise
//
//         return {
//             props: {isConnected: true},
//         }
//     } catch (e) {
//         console.error(e)
//         return {
//             props: {isConnected: false},
//         }
//     }
// }

