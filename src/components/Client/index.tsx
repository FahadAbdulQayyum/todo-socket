"use client"

import React, { useEffect, useState } from 'react'
import { IdCard, BadgeDollarSign, FileUser, ContactRound, Clock, Fan, MapPin, TimerReset, Building2, Phone, AtSign, Dot, Calendar } from 'lucide-react'
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/components/lib/hooks";
import { RootState } from '@/components/lib/store';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator';

interface JobProps {
    svcs?: string;
    payout?: string;
    clientname?: string;
    clientphone?: string;
    clientemail?: string;
    proname?: string;
    proemail?: string;
    proephone?: string; // Fixed from "proephone" (typo in your usage)
    gender?: string;
    status?: "offline" | "online";
    createdAt?: string;
    proimage?: string; // Optional image prop
}

const Client: React.FC<JobProps> = ({
    svcs = "$180",
    payout = "$144",
    clientname = "Ava Desena",
    clientphone = "543 554 9821",
    clientemail = "adsena88@gmail.com",
    proname = "Jillian Ocasio",
    proemail = "jillianocasio@me.com",
    proephone = "456 8993 234",
    gender = "female",
    status = "offline",
    createdAt = "12/12/12",
    proimage = "https://via.placeholder.com/150", // Default placeholder image
}) => {
    return (
        <div
            className="flex space-x-3 bg-white overflow-hidden overflow-x-auto scrollbar-hide p-4 "
        >
            <span className="flex flex-col justify-center items-center space-y-1">
                <span
                    // className="border-4 border-red-500 rounded-full"
                    className={`border-4 ${status === "online" ? "border-green-500" : "border-gray-300"} rounded-full`}
                >
                    <Image
                        src={proimage}
                        alt="pro-profile-img"
                        height={60}
                        width={60}
                        className="rounded-full h-32 w-32 object-cover p-1 shadow-2xl"
                    />
                </span>
                {/* <p className="flex justify-center items-center"><Dot size={60} color={"green"} className="-mr-5" /><small>Online</small></p> */}
                <p className="flex justify-center items-center"><Dot size={60} color={status === "online" ? "green" : "gray"} className="-mr-5" /><small>{status === "online" ? "Online" : "Offline"}</small></p>
            </span>

            <div className="flex flex-col space-y-1">
                <p className="flex space-x-1"><IdCard size={20} /><small>{proname}</small></p>
                <p className="flex space-x-1"><AtSign size={20} /><small>{proemail}</small></p>
                <p className="flex space-x-1"><Phone size={20} /><small>{proephone}</small></p>
                <p className="flex space-x-1"><IdCard size={20} /><small>{gender}</small></p>
                {/* <p className="flex space-x-1"><Clock size={20} /><small>05/07/2020</small></p> */}
                <p className="flex space-x-1"> <Calendar size={20} className="w-5 h-5 text-blue-500" /><small>{createdAt}</small></p>
            </div>


            <div className="flex flex-col space-y-1">
                {/* <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><IdCard size={18} /><p>ID</p></h1> */}
                <Button>View Profile</Button>
                <Button>View Ratings</Button>
                <Button>Set Schedule</Button>
                <Button>Set Password</Button>
                <Button>Clear Schedule</Button>
            </div>

            {/* <Separator orientation="vertical" /> */}


        </div >
    )
}

export default Client
