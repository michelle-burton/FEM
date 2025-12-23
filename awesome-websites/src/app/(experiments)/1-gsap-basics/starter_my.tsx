"use client";
import gsap from "gsap";
import { useEffect } from "react";


export default function Page() {

    useEffect(() => {
        gsap.fromTo(".title", {
            x: -200,
        }, {
            x: 200,
            onUpdate: () => {
                console.log("ran");
            }
        });
        return () => {

        }
    }, [])

  return (
    <div className="bg-blue-300 text-black">
      <div className="flex h-screen items-end justify-left overflow-hidden">
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          GSAP
          <br />
          tweens
        </h1>
      </div>
    </div>
  );
}
