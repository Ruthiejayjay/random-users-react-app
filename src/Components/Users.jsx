import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Loader from './Loader';
import './Users.css'

const Main = () => {
    const [randomUsers, setRandomUsers] = useState([]);
    const options = [5, 10];
    const [selected, setSelected] = useState(options[0]);
    const [isLoading, setIsloading] = useState(false)
    const [pages, setPages] = useState(1)
    const apiUrl = `https://randomuser.me/api/?page=${pages}&results=${selected}`;

    useEffect(() => {
        getUsers()
    }, [selected, pages])

    const getUsers = async () => {
        setIsloading(true)
        const response = await axios.get(apiUrl)
            .then((response) => {
                const data = response.data.results
                setRandomUsers(data);
            })
        setIsloading(false)
    }

    return (
        <>

            <div className="flex justify-center items-center">
                {isLoading ? <Loader /> :
                    <div className="relative mt-20 mb-20 bg-white sm:mx-1" style={{ maxWidth: "100%", padding: '8px' }}>
                        <div className="flex justify-between">
                            <h2 className="text-cyan-700 text-xl font-bold uppercase">Users</h2>
                            <div className='flex'>
                                <form action="">
                                    <label htmlFor="" className='rounded bg-gray-200 shadow px-2 py-2'>Select No of Users</label>
                                    <select value={selected}
                                        onChange={e => setSelected(e.target.value)}>
                                        {options.map((value) => (
                                            <option value={value} key={value}>
                                                {value}
                                            </option>
                                        ))}
                                    </select>
                                </form>
                            </div>
                        </div>
                        <section className="mt-4 flex-col flex">
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                                                        return (
                                                            <tr key={index}>
                                                                <td className="px-4 py-4 text-sm text-black hover:text-base whitespace-nowrap"><Link to="/user" state={item}>{item.name.first} {item.name.last}</Link></td>
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
                                <button onClick={() => {
                                    if (pages > 1)
                                        setPages(pages - 1)
                                }} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-gray-100 border rounded-md gap-x-2 hover:bg-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                    </svg>

                                    <span>
                                        previous
                                    </span>
                                </button>


                                <button onClick={() => setPages(pages + 1)} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-gray-100 border rounded-md gap-x-2 hover:bg-gray-300">
                                    <span>
                                        Next
                                    </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </section>
                    </div>
                }
            </div>


        </>
    )
}

export default Main