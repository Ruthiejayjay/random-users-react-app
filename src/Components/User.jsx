import { useLocation, Link } from "react-router-dom"

const User = () => {
    const location = useLocation();
    const state = location.state;

    return (
        <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-200">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="my-20 flex justify-center align-center">
                    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl" style={{width: "1000px"}}>
                        <img src={state.picture.large} alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                        <div className="sm:w-7/12 pl-0 p-5">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold text-cyan-900">{state.name.first} {state.name.last}</h4>
                                    <div className="flex flex-col gap-1">
                                    <h6 className="text-gray-600">Email: {state.email}</h6>
                                    <h6 className="text-gray-600">Date of Birth: {state.dob.date}</h6>
                                    <h6 className="text-gray-600">Country: {state.location.country}</h6>
                                    <h6 className="text-gray-600">Date of Birth: {state.nat}</h6>
                                    <h6 className="text-gray-600">City: {state.location.city}</h6>
                                    </div>
                                </div>
                                <Link to='/' className="block w-max text-cyan-600">Back Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User