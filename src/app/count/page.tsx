"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { routes } from "../utils/routes";

export default function Count() {
  const [count, setcount] = useState<number>(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <div className=" flex flex-col gap-4  ml-10 ">
      <Link href={routes.HOME} >
          <Button className="cursor-pointer"> go back to home page </Button>
        </Link>
        </div>
     
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1>count is{count}</h1>
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
    </div>
  );
}
