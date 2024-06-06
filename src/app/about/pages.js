
import "./globals.css";
import React from 'react'
import Image from "next/image";



export default function AboutPage() {
  return (
    <main>
    <div>About Page</div>
    <p>When I get some free time, I enjoy cooking and having some self care time. </p>
    <main className="min-h-screen ">
      <div>
        <Image
          src={"/GI.jpg"}
          alt="Fun In The Sun"
          width={500}
          height={1000}
          className="mx-auto"
        ></Image>
      </div>
    </main>
    </main>
  )
}
