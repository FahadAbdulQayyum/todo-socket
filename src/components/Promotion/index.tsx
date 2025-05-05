"use client"

import React, { useEffect, useState } from 'react'
import { IdCard, BadgeDollarSign, FileUser, ContactRound, Clock, Fan, MapPin, TimerReset, Building2, Phone, AtSign } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator';


interface JobProps {
    svcs?: string;
    payout?: string;
    discountAmount?: string;
    clientname?: string;
    clientphone?: string;
    clientemail?: string;
    proemail?: string;
    proephone?: string; // Fixed from "proephone" (typo in your usage)
    gender?: string;
    proimage?: string; // Optional image prop
}

const Promotion: React.FC<JobProps> = ({
    svcs = "$180",
    payout = "$144",
    discountAmount = "400",
    clientname = "Ava Desena",
    clientphone = "543 554 9821",
    clientemail = "adsena88@gmail.com",
    proemail = "jillianocasio@me.com",
    proephone = "456 8993 234",
    gender = "female",
    proimage = "https://via.placeholder.com/150", // Default placeholder image
}) => {

    // const job = (
    //     svcs = "$180",
    //     payout = "$144",
    //     clientname = "Ava Desena",
    //     clientphone = "543 554 9821",
    //     clientemail = "adsena88@gmail.com",
    //     proemail = "jillianocasio@me.com",
    //     prophone = "456 8993 234",
    //     gender = "female",
    //     proimg = "http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5cf6faaa5c883cc930bb0dca-profilePic/1711243961568.jpeg"

    // ): {
    //     svcs: "string"
    //     payout: "string"
    //     clientname: "string"
    //     clientphone: "string"
    //     clientemail: "string"
    //     proemail: "string"
    //     prophone: "string"
    //     gender: "string"
    // } => {
    // const Job = () => {
    return (
        <div
            className="flex space-x-3 bg-white overflow-hidden overflow-x-auto scrollbar-hide p-2 items-stretch"
        >
            <div className="flex flex-col space-y-1 w-full">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full text-sm whitespace-nowrap"><IdCard size={18} /><p>Code</p></h1>
                <p>{svcs}</p>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center w-full">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full text-sm whitespace-nowrap"><BadgeDollarSign size={18} /><p>Max # of Inputs</p></h1>
                <p>{payout}</p>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center w-full">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full text-sm whitespace-nowrap"><FileUser size={18} /><p>Discount Amount</p></h1>

                <p className="flex space-x-1"><small>{discountAmount}</small></p>
            </div>

            <Separator orientation="vertical" />

            {/* <div className="flex h-full items-stretch"> */}

            <div className="flex flex-col space-y-1 items-center w-full">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full text-sm whitespace-nowrap"><ContactRound size={18} /><p>Total $$ Floating Around</p></h1>
                <p className="flex space-x-1"><small>{payout}</small></p>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center w-full">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full text-sm whitespace-nowrap"><Clock size={18} /><p>Job Time</p></h1>
                <p>Instagram</p>
            </div>

            {/* </div> */}

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center w-full">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full text-sm whitespace-nowrap"><Fan size={18} /><p>Type</p></h1>
                <p>Credit</p>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center w-full">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full text-sm whitespace-nowrap"><MapPin size={18} /><p>Expiry Date</p></h1>
                <p>12/08/2025</p>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center w-full">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full text-sm whitespace-nowrap"><MapPin size={18} /><p>Actions</p></h1>
                <Button className="bg-green-600">Add Promo</Button>
                <Button className="bg-red-600">Remove</Button>
            </div>


        </div >
    )
}

export default Promotion
