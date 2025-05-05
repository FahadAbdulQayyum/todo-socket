import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { Card } from "../ui/card"
import { useEffect, useState } from "react";
import { setLoading } from "../lib/features/loader/loaderSlice";
import { fetchData, resetData } from "../lib/features/fetchDataSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../lib/useAppDispatch";

const Graph = () => {

    // Sample Data for Charts
    const jobData = [
        { name: "Today", jobs: 195 },
        { name: "Tomorrow", jobs: 44 },
        { name: "Yesterday", jobs: 31 },
    ]

    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);
    const { data, loading, error } = useSelector((state: any) => state.fetchData);

    // Calculate today, yesterday, and tomorrow's date ranges
    const todayStart = new Date();
    // todayStart.setHours(0, 0, 0, 0); // Start of today (00:00:00)

    const todayEnd = new Date();
    // todayEnd.setHours(23, 59, 59, 999); // End of today (23:59:59)

    const yesterdayStart = new Date(todayStart);
    yesterdayStart.setDate(todayStart.getDate() - 1); // Start of yesterday

    const yesterdayEnd = new Date(todayStart);
    // yesterdayEnd.setMilliseconds(yesterdayEnd.getMilliseconds() - 1); // End of yesterday

    const tomorrowStart = new Date(todayEnd);
    tomorrowStart.setDate(todayEnd.getDate() + 1); // Start of tomorrow

    const tomorrowEnd = new Date(tomorrowStart);
    // tomorrowEnd.setHours(23, 59, 59, 999); // End of tomorrow

    // Log the calculated dates for debugging
    console.log("Today Start:", todayStart.toISOString().slice(0, 10));
    console.log("Today End:", todayEnd.toISOString().slice(0, 10));
    console.log("Yesterday Start:", yesterdayStart.toISOString().slice(0, 10));
    console.log("Yesterday End:", yesterdayEnd.toISOString().slice(0, 10));
    console.log("Tomorrow Start:", tomorrowStart.toISOString().slice(0, 10));
    console.log("Tomorrow End:", tomorrowEnd.toISOString().slice(0, 10));


    useEffect(() => {
        // Start the loader
        dispatch(setLoading(true));
        dispatch(resetData());
        dispatch(fetchData({ page, limit: 100, collection: "Job",
            filters: {
                    // $gte: new Date("2025-02-03"), // Start date
                    // $lte: new Date("2025-03-09")  // End date

                    createdAt:
                    { 
                        $gte: new Date("2025-03-01"), 
                        $lte: new Date("2025-03-04") 
                    } 

                //      $or: [
                //     { createdAt: { $gte: todayStart, $lte: todayEnd } },       // Today's jobs
                //     { createdAt: { $gte: yesterdayStart, $lte: yesterdayEnd } }, // Yesterday's jobs
                //     { createdAt: { $gte: tomorrowStart, $lte: tomorrowEnd } }   // Tomorrow's jobs
                // ]
            }
         }));
        // Scroll to the top of the list after fetching new data
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: "smooth", // Smooth scrolling animation
        }); 
        dispatch(setLoading(false));
    }, [dispatch, page]);

    useEffect(() => {
        // console.log('users...', users)
        console.log('job graph - data...', data)
        // console.log('job graph - data...', data.filter((v: any)=>console.log('.v.createdAt.slice(0, 10).', v.createdAt.slice(0, 10), yesterdayStart.toISOString().slice(0, 10))))
        console.log('Yesterdays date:', data.filter((v: any)=>v.createdAt.slice(0, 10) === yesterdayStart.toISOString().slice(0, 10)).length)
        console.log('Todays date:', data.filter((v: any)=>v.createdAt.slice(0, 10) === todayStart.toISOString().slice(0, 10)).length)
        console.log('Tomorrow date:', data.filter((v: any)=>v.createdAt.slice(0, 10) === tomorrowStart.toISOString().slice(0, 10)).length)
    }, [data]);


    return <>
            {data.length === 0 ? (
            <div className="loader-container">
            <div className="loader-background-blur"></div>
            <div className="loader-spinner">
                <div className="spinner"></div>
            </div>
        </div> 
        ) :
            (<Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Job Overview</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={jobData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="jobs" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </Card>)
            }
    </>
}

export default Graph;