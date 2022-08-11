/**
 * A simple wrap around BryntumScheduler for ref to work
 */

import {BryntumResourceHistogram} from "@bryntum/gantt-react";

export default function Gantt({schedulerRef, ...props }) {
    return <BryntumResourceHistogram {...props} ref={schedulerRef} />
}