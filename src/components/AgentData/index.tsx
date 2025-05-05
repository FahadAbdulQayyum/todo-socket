"use client"

import { fetchData, resetData } from "../lib/features/fetchDataSlice"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../lib/hooks"
import { Card } from "../ui/card";
import Client from "../Client";
import { useEffect, useState } from "react";

import { setLoading } from "../lib/features/loader/loaderSlice";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


const AgentData = () => {

    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);

    const { data, loading, error } = useSelector((state: any) => state.fetchData);

    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(resetData());
        dispatch(fetchData({ page, limit: 20, collection: "Agent" }));

        // Scroll to the top of the list after fetching new data
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: "smooth", // Smooth scrolling animation
        });

        dispatch(setLoading(false));
    }, [dispatch, page]);

    return <>
        {data.length === 0 ? (
                <div className="loader-container">
                <div className="loader-background-blur"></div>
                <div className="loader-spinner">
                    <div className="spinner"></div>
                </div>
            </div>
            ) : (
                data.map((user: any) => (
                    <Card key={user._id}>
                        <Client
                            svcs="$180"
                            payout="$244"
                            proname={`${user.firstName} ${user.lastName}`}
                            clientname={`${user.firstName} ${user.lastName}`}
                            clientphone="435 748 9883"
                            clientemail={user.email}
                            proemail={user.email}
                            proephone={user.phoneNumber}
                            gender={user.gender}
                            createdAt={user.dateOfBirth}
                            status={user.active ? "online" : "offline"}
                            proimage={user?.profilePicture || 'http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-60381ebd4cd7ef60566c9fc7-profilePic/1739003549638.jpeg'}
                        />
                    </Card>
                ))
            )}
                    <div
            className="py-3 space-x-1"
        >
        {page>1 && <Button
        onClick={()=> setPage(prev => prev - 1)}
         >
            <ChevronLeft />
            </Button>}
        <Button
        onClick={()=> setPage(prev => prev + 1)}
         >
            <ChevronRight />
         </Button>
        </div>
    </>
}


export default AgentData