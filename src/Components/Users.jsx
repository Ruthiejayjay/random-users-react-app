import { useEffect, useState } from 'react';
import axios from "axios";

const Main = () => {
    const [randomUsers, setRandomUsers] = useState([]);
    const apiUrl = 'https://randomuser.me/api/?results=50';

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const response = await axios.get(apiUrl)
        .then((response)=> {
            const data = response.data.results
            setRandomUsers(data);
        })
    }

    return (
        <div className="mx-auto my-auto w-full">
            <div className="relative mt-20 mb-20 bg-white">
                <h2 className="ml-10 text-cyan-700 text-xl font-bold uppercase">Users</h2>
                <section className="px-4 mt-4 flex table">
                    <div className="flex flex-col">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-300 ">
                                            <tr>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black">
                                                   Full Name
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black">
                                                    Email
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black">
                                                    Country
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black">
                                                    Phone
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {randomUsers.map((item, index) => {
                                                return(
                                                    <tr>
                                                    <td className="px-4 py-4 text-sm text-black hover:text-base whitespace-nowrap"><a href="#">{item.name.first} { item.name.last}</a></td>
                                                    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
                                                        <p className="text-xs font-normal text-black">{item.email}</p>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{item.location.country}</td>
                                                    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{item.cell}</td>
                                                </tr>
                                                )
                                            })}
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-gray-100 border rounded-md gap-x-2 hover:bg-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>

                            <span>
                                previous
                            </span>
                        </a>

                        <div className="items-center hidden md:flex gap-x-3">
                            <a href="#" className="px-2 py-1 text-sm text-black rounded-md bg-gray-300">1</a>
                            <a href="#" className="px-2 py-1 text-sm text-black rounded-md hover:bg-gray-300">2</a>
                            <a href="#" className="px-2 py-1 text-sm text-black rounded-md hover:bg-gray-300">3</a>
                            <a href="#" className="px-2 py-1 text-sm text-black rounded-md hover:bg-gray-300">...</a>
                            <a href="#" className="px-2 py-1 text-sm text-black rounded-md hover:bg-gray-300">12</a>
                            <a href="#" className="px-2 py-1 text-sm text-black rounded-md hover:bg-gray-300">13</a>
                            <a href="#" className="px-2 py-1 text-sm text-black rounded-md hover:bg-gray-300">14</a>
                        </div>

                        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-gray-100 border rounded-md gap-x-2 hover:bg-gray-300">
                            <span>
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main