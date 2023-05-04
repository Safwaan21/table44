import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
          <h1 className="text-stone-200 font-bold text-6xl">
            Table44
          </h1>
        <div className="text-center justify-center flex flex-col max-w-screen-sm mb-10">
          <p className="text-stone-400 mt-5">
            Finding your perfect table for four.
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/Login"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Login
          </Link>
          <p className="text-white">·</p>
          <a
            href="/Register"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}