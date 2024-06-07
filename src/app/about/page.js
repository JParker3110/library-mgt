
// import "./globals.css";
// import React from 'react'
import Image from "next/image";



export default function AboutPage() {
  return (
    <main>
    <div className="my-9 text-4xl text-center">About Me</div>
    <p className="my-9 text-3xl text-center">When I get some free time, I enjoy cooking and having some self care time. </p>
    <main className="min-h-screen ">
      <div>
        <Image
          src={"/GI.jpg"}
          alt="Fun In The Sun"
          width={5000}
          height={1000}
          className="mx-auto"
        ></Image>
      </div>
    </main>
    </main>
  )
}
