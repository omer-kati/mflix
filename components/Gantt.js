/**
 * A simple wrap around BryntumScheduler for ref to work
 */
import { BryntumGantt } from "@bryntum/gantt-react";

export default function Gantt({schedulerRef, ...props }) {
    return <BryntumGantt {...props} ref={schedulerRef} />
}