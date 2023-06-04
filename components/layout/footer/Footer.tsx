import Link from "next/link";
import { navigation } from "./socialMedia";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                {/* <a className="text-base text-gray-500 hover:text-gray-900" > */}
                  {item.name}
                {/* </a> */}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href}>
              {/* <a className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer"> */}
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              {/* </a> */}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
            Empresa del Minion
          {" All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
