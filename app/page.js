import Image from 'next/image'
import { Inter } from '@next/font/google'

export default function Home() {
  return (
<div className="isolate bg-white">
  <div className="px-6 pt-6 lg:px-8">
    <nav className="flex items-center justify-between lg:gap-x-4" aria-label="Global">
      <div className="flex">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="flex">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <Image
              src="/next.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
        </a>
      </div>
      <div className="hover:bg-gray-100 hover:cursor-pointer rounded-full pl-4 pr-6 py-2 hidden lg:flex items-center gap-1.5">
        <svg className="h-7 flex-shrink-0 text-gray-400" x-description="Heroicon name: mini/map-pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd"></path>
        </svg>
        <div className="flex flex-col gap-1 text-sm">
          <span className='text-xs'>Hello</span>
          <b>Select Address</b>
        </div>
      </div>

      <div className="hidden lg:flex grow relative">
        <input type="text" name="search" id="company-website" className="block w-full h-10 bg-indigo-50 flex-1 rounded-full focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />

        <div className="absolute right-0 flex items-center gap-2">
          <p className="rounded-lg bg-slate-50 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 lg:block">Valentine's day</p>
          <p className="rounded-lg bg-slate-50 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 lg:block">vr</p>
          <p className="rounded-lg bg-slate-50 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 lg:block">solid state drive</p>
          <span className="flex items-center justify-center h-10 w-16 rounded-full bg-indigo-500">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white"><path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path></svg>
        </span>
        </div>
      </div>

      <button type="button" className="hidden lg:flex rounded-full p-1 text-gray-400 focus:outline-none ring-1 ring-gray-800 relative">
        <span className="sr-only">View notifications</span>
        <svg className="h-6 w-6" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
        </svg>
        <span className="w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center bg-red-600 text-white rounded-full text-xs">
          1
        </span>
      </button>

      <button type="button" className="rounded-full h-7 w-7 hidden lg:flex items-center justify-center text-gray-400 hover:text-white focus:outline-none ring-1 ring-gray-800">
        <Image
              src="/flag.png"
              alt="multi lang"
              width={20}
              height={20}
              priority
            />
      </button>
      <button type="button" className="hidden lg:flex items-center justify-center gap-2 rounded-full text-gray-400 hover:text-white focus:outline-none ring-1 ring-gray-800 relative">
        <span className="rounded-full w-8 h-8 shadow-lg bg-white"></span>
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-slate-400 dark:stroke-slate-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-slate-400 dark:stroke-slate-500"></path></svg>
      </button>

      <div className="hover:bg-gray-100 hover:cursor-pointer rounded-full pl-4 pr-6 py-2 hidden lg:flex items-center gap-1.5">
        <svg className="h-7 flex-shrink-0 text-gray-400" x-description="Heroicon name: mini/map-pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd"></path>
        </svg>
        <div className="flex flex-col text-sm">
          <span className="text-xs">Welcome</span>
          <b>Sign In / Register</b>
        </div>
      </div>
        <div className="hidden lg:flex flex-col text-sm">
          <span className="text-xs">Returns</span>
          <b>& Orders</b>
        </div>

        <button type="button" className="hidden lg:flex rounded-full p-1 text-gray-400 ">
        <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: outline/shopping-bag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
        </svg>
      </button>

    </nav>

  </div>
  <div className='px-6 pb-3 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between text-xs mt-2 shadow-sm'>
    <div className="hidden lg:flex lg:gap-x-4" >
      <a href="#" className="font-bold leading-6 text-gray-900">Today's best deals</a>
      <a href="#" className="font-bold leading-6 text-gray-900">Best Sellers</a>
      <a href="#" className="font-bold leading-6 text-gray-900">Big Game TV Deals</a>
      <a href="#" className="font-bold leading-6 text-gray-900">RTX 4080/4090 Gaming Laptops</a>
      <a href="#" className="font-bold leading-6 text-red-500">Valentine's Day</a>
      <a href="#" className="font-bold leading-6 text-gray-900">PC Builder</a>
      <a href="#" className="font-bold leading-6 text-gray-900">Browsing History</a>
      <a href="#" className="font-bold leading-6 text-gray-900">Gaming PC Finder</a>
    </div>

    <div className="hidden lg:flex lg:gap-x-4 items-center">
      <a href="#" className="font-semibold leading-6 text-gray-900 font-bold italic uppercase"> <span className="text-indigo-700">Newegg</span> Business</a>
      <span> | </span>
      <button type="button" className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-3 py-1 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <svg className="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
          </svg>
          FEEDBACK
      </button>
      <span> | </span>
      <button type="button" className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-3 py-1 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <svg className="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
          </svg>
          HELP CENTER
      </button>
    </div>

  </div>

    <div className="px-6 pt-5 pb-3 bg-gray-100 border-1 border-indigo-100 border-b-indigo-500 text-sm">
    Home {'>'} Computer Systems {'>'} Laptops / Notebooks {'>'} Laptops / Notebooks {'>'} ASUS {'>'} <b>Item#: N82E16834236180</b>
    </div>

  <main>

<div className="bg-white">
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
      <div className="flex flex-col-reverse">
        <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
            <button id="tabs-1-tab-1" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 ring-4 ring-indigo-700 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 p-2" aria-controls="tabs-1-panel-1" role="tab" type="button">
              <span className="sr-only"> Angled view </span>
              <span className="absolute inset-0 rounded-md overflow-hidden">
              <Image
                src="/laptop.jpg"
                alt="Vercel Logo"
                className="w-full h-full object-center object-cover"
                width={100}
                height={24}
                priority
              />
              </span>

              <span className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
            </button>

            <button id="tabs-2-tab-2" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 p-2" aria-controls="tabs-1-panel-1" role="tab" type="button">
              <span className="sr-only"> Angled view </span>
              <span className="absolute inset-0 rounded-md overflow-hidden">
              <Image
                src="/laptop2.jpg"
                alt="Vercel Logo"
                className="w-full h-full object-center object-cover"
                width={100}
                height={24}
                priority
              />
              </span>

              <span className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
            </button>


            <button id="tabs-3-tab-3" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 p-2" aria-controls="tabs-1-panel-1" role="tab" type="button">
              <span className="sr-only"> Angled view </span>
              <span className="absolute inset-0 rounded-md overflow-hidden">
              <Image
                src="/laptop3.jpg"
                alt="Vercel Logo"
                className="w-full h-full object-center object-cover"
                width={100}
                height={24}
                priority
              />
              </span>

              <span className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
            </button>

            <button id="tabs-4-tab-4" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 p-2" aria-controls="tabs-1-panel-1" role="tab" type="button">
              <span className="sr-only"> Angled view </span>
              <span className="absolute inset-0 rounded-md overflow-hidden">
              <Image
                src="/laptop4.jpg"
                alt="Vercel Logo"
                className="w-full h-full object-center object-cover"
                width={100}
                height={24}
                priority
              />
              </span>

              <span className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
            </button>

          </div>
        </div>

        <div className="w-full aspect-w-1 aspect-h-1 flex flex-col lg:flex-row items-center gap-4">

          <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
          <Image
                src="/laptop.jpg"
                alt="Vercel Logo"
                className="w-full h-full object-center object-cover"
                width={500}
                height={800}
                priority
              />
          </div>

        </div>
      </div>

      <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">ASUS ZenBook Pro 15 OLED Laptop 15.6" FHD Touch Display, AMD Ryzen 7 5800H CPU, NVIDIA GeForce RTX 3050 Ti GPU, 16GB RAM, 1TB PCIe SSD, Windows 11 Pro, Pine Grey, UM535QE-NH71T</h1>

        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl text-gray-900">$140</p>
        </div>

        <div className="mt-3">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center">

              <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg className="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg className="h-5 w-5 flex-shrink-0 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

            </div>
            <p className="sr-only">4 out of 5 stars</p>
            <span>(53)</span>
            <u className="font-semibold"> Write a Review See 13 Questions | 8 Answers</u>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Description</h3>

          <div className="text-base text-gray-700 space-y-6">
            <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
          </div>
        </div>

        <form className="mt-6">
          <div>
            <h3 className="text-sm text-gray-600">Color</h3>

            <fieldset className="mt-2">
              <legend className="sr-only">Choose a color</legend>
              <div className="flex items-center space-x-3">
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700">
                  <input type="radio" name="color-choice" value="Washed Black" className="sr-only" aria-labelledby="color-choice-0-label" />
                  <p id="color-choice-0-label" className="sr-only">Washed Black</p>
                  <span aria-hidden="true" className="h-8 w-8 bg-gray-700 border border-black border-opacity-10 rounded-full"></span>
                </label>

                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-1-label" />
                  <p id="color-choice-1-label" className="sr-only">White</p>
                  <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                </label>

                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500">
                  <input type="radio" name="color-choice" value="Washed Gray" className="sr-only" aria-labelledby="color-choice-2-label" />
                  <p id="color-choice-2-label" className="sr-only">Washed Gray</p>
                  <span aria-hidden="true" className="h-8 w-8 bg-gray-500 border border-black border-opacity-10 rounded-full"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="mt-10 flex sm:flex-col1">
            <button type="submit" className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">Add to bag</button>

            <button type="button" className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="sr-only">Add to favorites</span>
            </button>
          </div>
        </form>

        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="sr-only">Additional details</h2>

          <div className="border-t divide-y divide-gray-200">
            <div>
              <h3>
                <button type="button" className="group relative w-full py-6 flex justify-between items-center text-left" aria-controls="disclosure-1" aria-expanded="false">
                  <span className="text-gray-900 text-sm font-medium"> Features </span>
                  <span className="ml-6 flex items-center">
                    <svg className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div className="pb-6 prose prose-sm" id="disclosure-1">
                <ul role="list">
                  <li>Multiple strap configurations</li>

                  <li>Spacious interior with top zip</li>

                  <li>Leather handle and tabs</li>

                  <li>Interior dividers</li>

                  <li>Stainless strap loops</li>

                  <li>Double stitched construction</li>

                  <li>Water-resistant</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  </div>
</div>

  </main>
</div>
  )
}
