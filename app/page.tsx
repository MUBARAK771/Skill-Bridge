import Image from "next/image";
import Website from "./website/page";
export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Website />
    </div>
  );
}
