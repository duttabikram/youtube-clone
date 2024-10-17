import { useRouter } from "next/router"
import type { Video } from "../videos"
import { Line } from "./Line"

export const VideoCard = ({video}: {video: Video}) => {
    const router = useRouter();
    return <div className="cursor-pointer" onClick={() => {
        router.push("/video/1");
    }}>
        <div className=" rounded-xl overflow-hidden">
            <div>
                <img src={video.thumbnail} />
                <Line progress={10} />
            </div>
        </div>
        <div className="flex" >
        <div >
        <img className={" mt-4 rounded-full w-10 h-10"} src="/image.png" />
        </div>
        <div className={"ml-4"}>
        <div className={" mt-2 text-white-800 text-l font-medium"}>
            {video.title}
        </div>
        
        <div className={"text-gray-400 text-m font-normal		"}>
            {video.description}
        </div>
        <div className="flex">
            <div className={"text-gray-400 text-m font-normal	pr-2	"}>
                {video.viewCount} 
            </div>
            <div className={"text-gray-400 text-m font-normal		"}>
            • {video.timestamp}
            </div>
        </div>
        </div>
        </div>
    </div>
}