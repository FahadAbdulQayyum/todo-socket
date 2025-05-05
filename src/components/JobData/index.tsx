"use client"

import { fetchData, resetData } from "../lib/features/fetchDataSlice"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../lib/hooks"
import { Card } from "../ui/card";
import { useEffect, useState } from "react";

import { setLoading } from "../lib/features/loader/loaderSlice";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Job from "../Job";

const JobData = () => {

    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);
    const { data, loading, error } = useSelector((state: any) => state.fetchData);

    useEffect(() => {
        // Start the loader
        dispatch(setLoading(true));
        dispatch(resetData());
        dispatch(fetchData({ page, limit: 10, collection: "Job",
            filters: {
                // status: "active",
                // sortBy: "createdAt",
                sortOrder: "desc"
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
        console.log('job - data...', data)
    }, [data]);


    return <>
        {/* {(data.length === 0||isLoading) ? ( */}
        {data.length === 0 ? (
            <div className="loader-container">
            <div className="loader-background-blur"></div>
            <div className="loader-spinner">
                <div className="spinner"></div>
            </div>
        </div>        
        // <div>No clients found</div>
        // </div>
        ) : (
            data.map((user: any) => (
                <Card key={user._id}>
                    <Job
                        svcs={user?.price}
                        payout="$2404"
                        clientname={user?.client?.firstName + " " + user?.client?.lastName}
                        // clientname={user?.Services}
                        clientphone={user?.client?.phoneNumber}
                        clientemail={user?.client?.email}
                        proemail={user?.agent?.email}
                        proephone={user?.agent?.phoneNumber}
                        gender="female"
                        service={user?.services[0]?.name}
                        serviceDetail={user?.services[0]?.selectedServiceVariation?.name}
                        state={user?.state}
                        createdAt={user?.createdAt?.slice(0,10)}
                        proimage={user?.agent?.profilePicture}
                            />
                </Card>
            ))
        )}
        <div
            className="py-3 space-x-1"
        >
        {/* {page > 1 && ( */}
        <Button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page <= 1} // Disable the button if page is less than or equal to 1
        >
            <ChevronLeft />
        </Button>
        {/* )} */}
        <Button
        // onClick={()=>fetchData({ page: 2, limit: 20, collection: "User" })}
        onClick={()=> setPage(prev => prev + 1)}
         >
            <ChevronRight />
            
         </Button>
        </div>
    </>
}


export default JobData