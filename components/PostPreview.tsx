import { datetime } from "@/lib/TimeFormator";
import Link from "next/link";


const PostPreview = (props: any) => {
  // console.log(props)
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
      bg-white dark:bg-black/10"
    >
      <p className="text-sm text-slate-400">{datetime(props.date)}</p>

      <Link href={`${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.description}</p>
    </div>
  );
};

export default PostPreview;
