import ShareIcon from "../../icons/ShareIcon";
interface CardProps {
  title: string;
  type: "youtube" | "twitter";
  link: string;
}
export function Card({ title, type, link }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-md max-w-72 p-3 min-h-48 min-w-60 ">
      <div className="flex justify-between">
        <div className="flex text-gray-500 gap-2 items-center">
          <ShareIcon size={"md"} />
          <p className="text-black">{title}</p>
        </div>
        <div className="flex text-gray-500 gap-1 items-center">
          <a href={link} target="_blank">
            <ShareIcon size={"md"} />
          </a>
          <ShareIcon size={"md"} />
        </div>
      </div>
      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full"
            src= {link.replace("watch?v=","embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com","twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
