import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className='flex p-2 items-center m-4 justify-between mt-4'>
      <div>
        <Link href={"/"}>
          <Image src='/emp-logo.png' alt='logo' width={65} height={65} />
        </Link>
      </div>
      <div className='flex-grow'>
        <ul className='flex items-center justify-end gap-2'>
          <li>
            <Link
              className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black'
              href='/about'>
              About
            </Link>
          </li>
          {/* <li>
            <Link
              className='px-4 py-2 bg-orange-500 rounded-md text-sm text-white'
              href='/register/client'>
              Client
            </Link>
          </li> */}
          <li>
            <Link
              className='px-4 py-2 bg-orange-500 rounded-md text-sm text-white'
              href='/register/labour'>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
