import { Appbar } from "@/components/Appbar";
import { VideoCard } from "@/components/VideoCard";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/videos";


export default function VideoPage() {
    return <div className="p-4">
        <Appbar />
        <div className="grid gap-4 grid-cols-12 pt-5">
            <div className="col-span-12 md:col-span-9 sm:col-span-8">
                <video width={"100%"} height={"720px"} controls src="https://dxip4wcd8mhk4.cloudfront.net/These+Coding+Projects+Give+You+An+Unfair+Advantage.mp4" />
                <div className="flex" >
        <div >
        <img className={" mt-4 rounded-full w-10 h-10"} src="/image.png" />
        </div>
        <div className={"ml-4"}>
        <div className={" mt-2 text-white-800 text-xl font-medium"}>
            {"Exploring the Cosmos: Journey Through Space"}
        </div>
        
        <div className={"text-gray-400 text-m font-normal		"}>
            {"Neso Academy"}
        </div>
        <div className="flex">
            <div className={"text-gray-400 text-m font-normal	pr-2	"}>
                {"2.54M"} 
            </div>
            <div className={"text-gray-400 text-m font-normal		"}>
            • {"8 hours ago"}
            </div>
        </div>
        </div>
        </div>
            </div>
            <div className="col-span-12 md:col-span-3 sm:col-span-4">
                {VIDEOS.map(x => <VideoCardHorizontal video={x} />)}
            </div>
        </div>
    </div>
}