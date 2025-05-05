"use client"

import React, { useEffect, useState } from 'react'
import { IdCard, BadgeDollarSign, FileUser, ContactRound, Clock, Fan, MapPin, TimerReset, Building2, Phone, AtSign } from 'lucide-react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator';


interface JobProps {
    svcs?: string;
    payout?: string;
    clientname?: string;
    clientphone?: string;
    clientemail?: string;
    proemail?: string;
    proephone?: string; // Fixed from "proephone" (typo in your usage)
    gender?: string;
    service?: string;
    state?: string;
    serviceDetail?: string;
    createdAt?: string;
    proimage?: string; // Optional image prop
}

const Job: React.FC<JobProps> = ({
    svcs = "$180",
    payout = "$144",
    clientname = "Ava Desena",
    clientphone = "543 554 9821",
    clientemail = "adsena88@gmail.com",
    proemail = "jillianocasio@me.com",
    proephone = "456 8993 234",
    gender = "female",
    service = "Makeup",
    serviceDetail = "Makeup for a wedding",
    state = "state",
    createdAt = "12/12/12",
    proimage = "https://via.placeholder.com/150", // Default placeholder image
}) => {

    return (
        <div
            className="flex space-x-3 bg-white overflow-hidden overflow-x-auto scrollbar-hide p-2 items-stretch"
        >
            <div className="flex flex-col space-y-1">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><IdCard size={18} /><p>ID</p></h1>
                <Button>Reassign Job</Button>
                <Button>Agent Cancel</Button>
                <Button>Agent Cancel w FMAP</Button>
                <Button>Client Cancel</Button>
                <Button>CS Cancel</Button>
                <Button>Make Note</Button>
                <Button>Make FMAP</Button>
                <Button>Client Communication</Button>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><BadgeDollarSign size={18} /><p>Price</p></h1>
                <p>Svcs:{svcs}</p>
                <p>Est Tip: $30</p>
                <p>Est PF: $24</p>
                <p>Act Tip: $0</p>
                <p>Act PF: $0</p>
                <p>Tax: $0</p>
                <p>Travel: $0</p>
                <p>Payout: {payout}</p>
                <Button>Change Price</Button>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><FileUser size={18} /><p>Client</p></h1>

                <p className="flex space-x-1"><IdCard size={20} /><small>{clientname}</small></p>
                <p className="flex space-x-1"><Phone size={20} /><small>{clientphone}</small></p>
                <p className="flex space-x-1"><AtSign size={20} /><small>{clientemail}</small></p>
                <Button>Credit Client</Button>
                <Button>Change Client</Button>
            </div>

            <Separator orientation="vertical" />

            {/* <div className="flex h-full items-stretch"> */}

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><ContactRound size={18} /><p>Agent</p></h1>
                <p className="flex space-x-1"><AtSign size={20} /><small>{proemail}</small></p>
                <p className="flex space-x-1"><Phone size={20} /><small>{proephone}</small></p>
                <p className="flex space-x-1"><IdCard size={20} /><small>{gender}</small></p>
                <Image
                    src={proimage}
                    // src="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5cf6faaa5c883cc930bb0dca-profilePic/1711243961568.jpeg"
                    alt="pro-profile-img"
                    height={40}
                    width={40}
                    className="rounded-full h-10 w-10 object-cover"
                />
                <Button>Press En Route</Button>
                <p className="text-red-500 text-sm">WAS CANCELLED BY ORIGINAL PRO</p>
                <p>Requested Agent: Find Me a Pro</p>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><Clock size={18} /><p>Job Time</p></h1>
                {/* <p>February 21 2025 8:30 AM</p> */}
                <p>{createdAt}</p>
                <label>Change Day:</label>
                <select className="border p-1 rounded">
                    <option value="e" selected></option>
                    <option value="mon">Monday</option>
                    <option value="tue">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thu">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Sat</option>
                    <option value="sun">Sun</option>
                </select>
                <label>Change Time:</label>
                <select className="border p-1 rounded">
                    <option value="e" selected></option>
                    <option value="8">8:00AM</option>
                    <option value="9">9:00AM</option>
                    <option value="10">10:00AM</option>
                </select>
                <Button>Get Available Times</Button>
            </div>

            {/* </div> */}

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><Fan size={18} /><p>Services</p></h1>
                {/* <p>Haircut: Women&apos;s Haircut with</p> */}
                <p>{service}</p>
                <p>{serviceDetail}</p>
                <p>Entrance on 25th St</p>
                <p>between L and M</p>
                <Button>Manage Services</Button>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><MapPin size={18} /><p>Address</p></h1>
                <p>1 Grand Cypress Blvd Orlando FL 32836 undefined</p>
                <Button>Change Addr</Button>
                <Button>Block User</Button>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><BadgeDollarSign size={18} /><p>Fees</p></h1>
                <label>Service Add On</label>
                <input className="border p-1 rounded" />
                <label>Travel Fee</label>
                <input className="border p-1 rounded" value={0} />
                <label>Travel Fee</label>
                <input className="border p-1 rounded" value={0} />
                <label>Late Fee</label>
                <input className="border p-1 rounded" value={0} />
                <label>Offer Bonus</label>
                <input className="border p-1 rounded" />
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><TimerReset size={18} /><p>Last Event</p></h1>
                <p>{state}</p>
                <p>2/22/2025, 3:17:51 PM</p>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col space-y-1 items-center">
                <h1 className="flex justify-center items-center space-x-1 shadow mb-2 font-bold text-center w-full"><Building2 size={18} /><p>City</p></h1>
                <p>Washington</p>
                <p>DC</p>
            </div>

        </div >
    )
}

export default Job
