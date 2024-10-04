import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Programmation = () => {

  const [events, setEvents] = useState([])

  const [selectedDate, setSelectedDate] = useState([])
  const [selectedVenue, setSelectedVenue] = useState([])

  const filteredList = useMemo(getFilteredList, [selectedDate, selectedVenue, events]);

  function getFilteredList() {
    if (selectedDate?.length > 0 && selectedVenue?.length === 0) {
      return events?.filter((event) => selectedDate?.includes(event.start_date))
    } else if (selectedVenue?.length > 0 && selectedDate?.length === 0) {
      return events?.filter((event) => selectedVenue?.includes(event.venue.name))
    } else if (selectedVenue?.length > 0 && selectedDate?.length > 0) {
      return events?.filter((event) => selectedVenue?.includes(event.venue.name) && selectedDate?.includes(event.start_date))
    }
    else return events;
  };

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    setIsLoading(true);

    axios
      .get(`https://${process.env.REACT_APP_API_URL}/api/event`)
      .then((res) => {
        const data = res.data
        setEvents(data);
        setIsLoading(false);
      });
  }, [])

  const [isFilterOpen, setIsFilterOpen] = useState(true)

  function FilterSelect({ label, id, divClassName, onChange, options, value }) {
    return (
      <div className={divClassName}>
        <label htmlFor={id} className='text-white'>{label} </label>
        <select name={id} id={id} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.label} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <>
      <div className='text-orange p-8 bg-black'>
        <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>programmation</h1>
      </div>

      {
        isLoading ? <div className="bg-black text-white text-xl font-bold text-center">CHARGEMENT EN COURS</div>
          :
          <>
            <div className='pt-4 bg-black'>
              <h2 className='text-orange underline text-2xl text-center font-extrabold uppercase'>
                filtres
                <button onClick={() => setIsFilterOpen((prev) => !prev)}>+</button>
              </h2>
              <div className='pt-2 md:text-xl flex justify-around'>
                <div className='block'>
                  <FilterSelect
                    divClassName={isFilterOpen ? "showFilter" : "hideFilter"}
                    label="Scènes"
                    id="venue"
                    value={selectedVenue}
                    options={[
                      { label: "Toutes", value: "" },
                      { label: "Scène 1", value: "Scène 1" },
                      { label: "Scène 2", value: "Scène 2" },
                      { label: "Scène 3", value: "Scène 3" },
                      { label: "Scène 4", value: "Scène 4" },
                    ]}
                    onChange={e => setSelectedVenue(e.target.value)}
                  />
                </div>
                <div className='block'>
                  <FilterSelect
                    divClassName={isFilterOpen ? "showFilter" : "hideFilter"}
                    label="Dates"
                    id="start_date"
                    value={selectedDate}
                    options={[
                      { label: "Toutes", value: "" },
                      { label: "2024-10-05", value: "2024-10-05T22:00:00.000Z" },
                      { label: "2024-01-05", value: "2024-01-05T23:00:00.000Z" },
                      { label: "2024-06-06", value: "2024-06-06T00:00:00.000Z" },
                    ]}
                    onChange={e => setSelectedDate(e.target.value)}
                  />
                </div>

              </div>
              <style>{`
        .hideFilter {
          display: none;
        }
        .showFilter {
          display: block;
          width: 100%;
        }
      `}</style>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-black'>
              {filteredList?.map(event => (
                <div key={event._id} className='bg-black text-white  p-20 text-center'>
                  <Link to={`/programmation/${event._id}`}>
                    <div className='flex justify-center '>
                      <img src={`/images/${event.image}`} alt='' className='w-60 h-40' />
                    </div>
                    <div>
                      <h3 className='font-bold text-xl'>{event.title}</h3>
                    </div>
                    <div className='font-bold'>{event.start_date}</div>
                    <div className='font-bold'>{event.venue.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          </>
      }

    </>

  )
}

export default Programmation