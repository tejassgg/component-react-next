import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="flex flex-col px-4 py-4 bg-gray-100 shadow-md shadow-gray-200 h-full">
      <div className="flex items-center jusitfiy-between gap-2 ">
        <div className="rounded-xl p-2 bg-blue-500">
          <h1 className="text-xl font-bold text-white">BC</h1>
        </div>
        <h1 className="text-xl font-bold">Brain Comp</h1>
      </div>
      <div className="flex flex-col gap-4 text-xl">
        <Link
          className="hover:text-blue-500 transition-all ml-2 mt-12"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="hover:text-blue-500 transition-all ml-2"
          href="/all-components"
        >
          Components
        </Link>
        <Link className="hover:text-blue-500 transition-all ml-2" href="/blog">
          Blog
        </Link>
        <Link
          className="hover:text-blue-500 transition-all ml-2"
          href="/blog/zingur"
        >
          Dyna Blog
        </Link>
        <Link
          className="hover:text-blue-500 transition-all ml-2"
          href="/project"
        >
          Project
        </Link>
      </div>
    </aside>
  );
}
