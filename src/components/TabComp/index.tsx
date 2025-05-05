import { Card} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Job from "../Job"
import Client from "../Client"
import Services from "../Services"
import Promotion from "../Promotion"

import { useEffect, useState } from "react";

import {
    ArrowUp,
    ArrowDown
} from "lucide-react"

import ClientData from "../ClientData"
import AgentData from "../AgentData"
import JobData from "../JobData"
import Graph from "../Graph"

// Sample Data for Charts
const jobData = [
    { name: "Today", jobs: 195 },
    { name: "Tomorrow", jobs: 44 },
    { name: "Yesterday", jobs: 31 },
]


export function TabComp() {

    const [todayCount, setTodayCount] = useState(0);
    const [tomorrowCount, setTomorrowCount] = useState(0);
    const [yesterdayCount, setYesterdayCount] = useState(0);

    // Simulate countdown effect using useEffect
    useEffect(() => {
        const targetToday = jobData.find((item) => item.name === "Today")?.jobs || 0;
        const targetTomorrow = jobData.find((item) => item.name === "Tomorrow")?.jobs || 0;
        const targetYesterday = jobData.find((item) => item.name === "Yesterday")?.jobs || 0;

        const interval = setInterval(() => {
            setTodayCount((prev) => (prev < targetToday ? prev + 1 : targetToday));
            setTomorrowCount((prev) => (prev < targetTomorrow ? prev + 1 : targetTomorrow));
            setYesterdayCount((prev) => (prev < targetYesterday ? prev + 1 : targetYesterday));
        }, 20); // Adjust speed of countdown here (e.g., 20ms)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <Tabs defaultValue="jobs" className="flex px-standardSize">
            {/* Main Tabs */}
            <div className="flex flex-col">
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="jobs">Jobs List</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="jobs1">Clients List</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="agent">Agents List</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="service">Services Management</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="promotion">Promotions</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="giftcard">Gift Card</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="review-changes">Review Changes</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="live-table">Live Table</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="referral">Referrals</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="convos">Convos</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="corporate">Corporate Accounts</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="regions">Regions MGMT</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="subregion">SubRegion MGMT</TabsTrigger>
                </TabsList>
                <TabsList className="flex flex-col space-y-5 w-full">
                    <TabsTrigger value="job-graph">Graph</TabsTrigger>
                </TabsList>
            </div>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="jobs" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Today&apos;s Jobs (195)</TabsTrigger>
                        <TabsTrigger value="future-jobs">Tomorrow&apos;s Jobs (44)</TabsTrigger>
                        <TabsTrigger value="yesterday-jobs">Yesterday&apos;s Jobs (44)</TabsTrigger>
                        <TabsTrigger value="cant-find-jobs">Can&apos;t find job?</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">
                        
                        <JobData />
                    
                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Job
                                svcs="$333"
                                payout="$653"
                                clientname="Found Well"
                                clientphone="435 748 9883"
                                clientemail="found@gmail.com"
                                proemail="well@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-650cbccf2002c741aea60db4-profilePic/1698173702135.jpeg"
                            />
                        </Card>
                        <Card>
                            <Job
                                svcs="$333"
                                payout="$653"
                                clientname="Found Well"
                                clientphone="435 748 9883"
                                clientemail="found@gmail.com"
                                proemail="well@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-59e5d608acdb19d82a0e05a4-profilePic/1710826886624.jpeg"
                            />
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="jobs1" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Clients Cancel</TabsTrigger>
                        <TabsTrigger value="future-jobs">Future Clients</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">

                    <ClientData />

                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proemail="tester@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="offline"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-60381ebd4cd7ef60566c9fc7-profilePic/1739003549638.jpeg"
                            />
                        </Card>
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proname="Tester Cheapp"
                                proemail="testeress@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="online"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5c1f038c80a72f0178fdfa19-profilePic/1665599195558.jpeg"
                            />
                        </Card>
                    </TabsContent>

                </Tabs>
            </TabsContent>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="agent" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Agents Cancel</TabsTrigger>
                        <TabsTrigger value="future-jobs">Future Agents</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">
        
                    <AgentData />
        
                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proemail="tester@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="offline"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-60381ebd4cd7ef60566c9fc7-profilePic/1739003549638.jpeg"
                            />
                        </Card>
                        <Card>
                            <Client
                                svcs="$180"
                                payout="$244"
                                clientname="Cheap Tester"
                                clientphone="435 748 9883"
                                clientemail="a@gmail.com"
                                proname="Tester Cheap2"
                                proemail="testeress@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                status="online"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5c1f038c80a72f0178fdfa19-profilePic/1665599195558.jpeg"
                            />
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent>

            <TabsContent value="service" className="space-y-2">
                <Card>
                    <Services
                        svcs="$180"
                        payout="$244"
                        variations={[
                            "Mat Pilates",
                            "Yoga",
                            "Customized Personal Training",
                            "Add More"]}
                        servicename="Workout"
                        offered={true}
                        clientphone="435 748 9883"
                        clientemail="a@gmail.com"
                        proemail="tester@me.com"
                        proephone="434 845 8738"
                        gender="female"
                        status="offline"
                        proimage="https://priv-image-assets.s3.amazonaws.com/nwb/service_fitness_text.jpg"
                    />
                </Card>
                <Card>
                    <Services
                        svcs="$180"
                        payout="$244"
                        variations={[
                            "Mat Pilates",
                            "Yoga",
                            "Customized Personal Training",
                            "Add More"]}
                        servicename="Ear Piercing"
                        offered={true}
                        clientphone="435 748 9883"
                        clientemail="a@gmail.com"
                        proname="Tester Cheap3"
                        proemail="testeress@me.com"
                        proephone="434 845 8738"
                        gender="female"
                        status="online"
                        proimage="https://priv-service-photos-q3-2018.s3.amazonaws.com/R4_SERVICES+2/291x371/JPEGS/PRIV_Ear_Piercing_291x371_R3.jpg"
                    />
                </Card>
                <Card>
                    <Services
                        svcs="$180"
                        payout="$244"
                        variations={[
                            "Hollywood Halloween",
                            "Facial Halloween",
                            "Kid Halloween",
                            "Add More"]}
                        servicename="Halloween"
                        offered={false}
                        clientphone="435 748 9883"
                        clientemail="a@gmail.com"
                        proname="Tester Cheap4"
                        proemail="testeress@me.com"
                        proephone="434 845 8738"
                        gender="female"
                        status="online"
                        proimage="https://service-variation-images.s3.amazonaws.com/services/Halloween+Services/hair-cosplay-wig-application.jpg"
                    />
                </Card>
            </TabsContent>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="live-table" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Today&apos;s Jobs (195)</TabsTrigger>
                        <TabsTrigger value="future-jobs">Tomorrow&apos;s Jobs (44)</TabsTrigger>
                        <TabsTrigger value="yesterday-jobs">Yesterday&apos;s Jobs (44)</TabsTrigger>
                        <TabsTrigger value="cant-find-jobs">Can&apos;t find job?</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">
                        <Card>
                            <Job
                                svcs="$180"
                                payout="$244"
                                clientname="Senior Dsena"
                                clientphone="435 748 9883"
                                clientemail="senior88@gmail.com"
                                proemail="jilliaocasio@me.com"
                                proephone="434 845 8738"
                                gender="female"
                            // proimage="female"
                            />
                        </Card>
                        <Card>
                            <Job
                                svcs="$180"
                                payout="$244"
                                clientname="Yena Lost"
                                clientphone="435 748 9883"
                                clientemail="yena@gmail.com"
                                proemail="picaso@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-66e8f7be8af69f381a61d445-profilePic/1737308490559.jpeg"
                            />
                        </Card>
                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Job
                                svcs="$333"
                                payout="$653"
                                clientname="Found Well"
                                clientphone="435 748 9883"
                                clientemail="found@gmail.com"
                                proemail="well@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-650cbccf2002c741aea60db4-profilePic/1698173702135.jpeg"
                            />
                        </Card>
                        <Card>
                            <Job
                                svcs="$333"
                                payout="$653"
                                clientname="Found Well"
                                clientphone="435 748 9883"
                                clientemail="found@gmail.com"
                                proemail="well@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-59e5d608acdb19d82a0e05a4-profilePic/1710826886624.jpeg"
                            />
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent>

            {/* Jobs Content with Nested Tabs */}
            <TabsContent value="promotion" className="pl-4 space-y-1">
                <Tabs defaultValue="past-jobs">
                    {/* Nested Tabs */}
                    <TabsList className="flex space-x-5 mb-4 w-full">
                        <TabsTrigger value="past-jobs">Today&apos;s Jobs (195)</TabsTrigger>
                        <TabsTrigger value="future-jobs">Tomorrow&apos;s Jobs (44)</TabsTrigger>
                        <TabsTrigger value="yesterday-jobs">Yesterday&apos;s Jobs (44)</TabsTrigger>
                        <TabsTrigger value="cant-find-jobs">Can&apos;t find job?</TabsTrigger>
                    </TabsList>

                    {/* Nested Tabs Content */}
                    <TabsContent value="past-jobs" className="space-y-2">
                        <Card className="h-32 bg-orange-300">
                            <Promotion
                                svcs="0hyreH"
                                payout="4"
                                discountAmount="400"
                                clientname="Senior Dsena"
                                clientphone="435 748 9883"
                                clientemail="senior88@gmail.com"
                                proemail="jilliaocasio@me.com"
                                proephone="434 845 8738"
                                gender="female"
                            // proimage="female"
                            />
                        </Card>
                        <Card>
                            <Promotion
                                svcs="$180"
                                payout="$244"
                                clientname="Yena Lost"
                                clientphone="435 748 9883"
                                clientemail="yena@gmail.com"
                                proemail="picaso@me.com"
                                proephone="434 845 8738"
                                gender="female"

                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-66e8f7be8af69f381a61d445-profilePic/1737308490559.jpeg"
                            />
                        </Card>
                    </TabsContent>

                    <TabsContent value="future-jobs" className="space-y-2">
                        <Card>
                            <Promotion
                                svcs="$333"
                                payout="$653"
                                clientname="Found Well"
                                clientphone="435 748 9883"
                                clientemail="found@gmail.com"
                                proemail="well@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-650cbccf2002c741aea60db4-profilePic/1698173702135.jpeg"
                            />
                        </Card>
                        <Card>
                            <Promotion
                                svcs="$333"
                                payout="$653"
                                clientname="Found Well"
                                clientphone="435 748 9883"
                                clientemail="found@gmail.com"
                                proemail="well@me.com"
                                proephone="434 845 8738"
                                gender="female"
                                proimage="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-59e5d608acdb19d82a0e05a4-profilePic/1710826886624.jpeg"
                            />
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent>
            <TabsContent value="job-graph" className="pl-4 space-y-1">
                
            <Graph />

                <Card className="flex space-x-4">
                    <Card className="flex flex-col justify-center items-center p-4 text-center flex-1">
                        <h4 className="text-sm font-medium text-gray-500">Today</h4>
                        <h3 className="flex justify-center items-center text-2xl font-bold"><ArrowUp className="text-green-600" />{todayCount}</h3>
                    </Card>
                    <Card className="flex flex-col justify-center items-center p-4 text-center flex-1">
                        <h4 className="text-sm font-medium text-gray-500">Tomorrow</h4>
                        <h3 className="flex justify-center items-center text-2x l font-bold"><ArrowDown className="text-red-600" />{tomorrowCount}</h3>
                    </Card>
                    <Card className="flex flex-col justify-center items-center text-center flex-1">
                        <h4 className="text-sm font-medium text-gray-500">Yesterday</h4>
                        <h3 className="flex justify-center items-center text-2xl font-bold"><ArrowDown className="text-red-600" />{yesterdayCount}</h3>
                    </Card>
                </Card>
            </TabsContent>
        </Tabs>
    )
}