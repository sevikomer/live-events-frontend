import React from 'react';
import Header from './Header';

// import axios from "axios";

const Informations = () => {

    // const [events, setEvents] = useState([])

    // useEffect(() => {
    //   axios
    //     .get("http://localhost/live-events/wp-json/tribe/events/v1/events")
    //     .then((res) => {
    //       const data = res.data
    //       setEvents(data.events);
    //     });
    // }, [])

    return (
        <>
            <Header />
            <div className='text-orange p-8'>
                <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>informations</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div className='m-10 p-5 flex flex-col border border-solid border-black rounded-md'>
                    <h2 className='text-center text-xl font-bold leading-9 tracking-tight text-black'>Ajouter une information</h2>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-black">
                                    Titre
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="title"
                                        name="title"
                                        type="title"
                                        autoComplete="title"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="start_date" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date de début
                                    </label>
                                    <div className="text-sm">
                                        {/* <a href="#" className="font-semibold text-orange hover:text-orange">
                                        Forgot password?
                                    </a> */}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="start_date"
                                        name="start_date"
                                        type="start_date"
                                        autoComplete="start_date"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                                >
                                    Ajouter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-span-2 m-10 p-5 border border-solid border-black rounded-md'>
                    <h2 className='text-center text-xl font-bold leading-9 tracking-tight text-black'>Liste des informations</h2>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                        {/* {events?.map(event => (
          <div key={event.id} className='bg-black text-white  p-20 text-center'>
            <div className='flex justify-center '>
              <img src={event.image?.url} alt='' className='w-60 h-40' />
            </div>
            <div>
              <h3 className='font-bold text-xl'>{event.title}</h3>
            </div>
            <div className='font-bold'>{event.start_date}</div>
          </div>
        ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Informations