"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";


export default function Page() {

    const containrRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
     
        const ctx = gsap.context(() => {
            gsap.to(".title", {
            x: -200,
            duration: 10,
            });
            gsap.from(".title", {
            x: -200,
            duration: 10,
         });
            }, containrRef)
            
       
        return () => {
            // cleanup
            ctx.revert();
        }
    }, [])

  return (
      <div className="bg-blue-300 text-black">
          <p className="title">Hello</p>
          <div ref={containrRef} className="flex h-screen items-end justify-left overflow-hidden">
        <h1  className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          GSAP
          <br />
          tweens
        </h1>
      </div>
    </div>
  );
}
