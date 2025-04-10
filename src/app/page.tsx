import Image from "next/image";
import Count from "./count/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routes } from "./utils/routes";

export default function Home() {
  return (
    <div>
      <div className=" flex flex-col gap-4 h-screen m-10 ">
        <Link href={routes.COUNT}>
          <Button className=" w-28 cursor-pointer"> count </Button>
        </Link>
        <Link href={routes.COUNT}>
          <Button className="w-28 cursor-pointer"> todo </Button>
        </Link>
        <Link href={routes.COUNT}>
          <Button className="w-28 cursor-pointer"> form </Button>
        </Link>
        <Count />
      </div>
    </div>
  );
}
