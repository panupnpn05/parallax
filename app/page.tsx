'use client'



import Link from "next/link"
import TrailText from "./parallax/trail"
import BouncingArrow from "./parallax/arrow"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <div className="title">
        Read <Link href="/shop" className=" bg-slate-700 text-white hover:opacity-70 duration-150">this page!</Link>
        <div>
        <Link href="/parallax" className=" pl-3">GO to Parallax</Link>
        </div>
        <TrailText/>
        <BouncingArrow/>

      </div>
      </div>
    </main>
  )
}
