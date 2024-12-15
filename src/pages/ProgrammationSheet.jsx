import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios";


function ProgrammationSheet() {

    useEffect(() => {

    }, [])


    const { eventId } = useParams()
    const id = eventId.split("-")[0]; 
    const navigate = useNavigate()

      function convertToSlug(title) {
        return title
            .toLowerCase() // 1. Mettre en minuscule
            .normalize("NFD") // 2. Supprimer les accents
            .replace(/[\u0300-\u036f]/g, "") // Supprime les caractères diacritiques
            .replace(/[^a-z0-9\s-]/g, "") // 3. Garder uniquement lettres, chiffres, espaces et tirets
            .replace(/\s+/g, "-") // 4. Remplacer les espaces par des tirets
            .replace(/-+/g, "-") // 5. Retirer les tirets multiples
            .replace(/^-+|-+$/g, ""); // 6. Supprimer les tirets au début et à la fin
    }

    const [event, setEvent] = useState({})

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getEvent = async () => {
            setIsLoading(true);
            const res = await axios
                .get(`https://${process.env.REACT_APP_API_URL}/api/event/${id}`);
            setEvent(res?.data ?? {})
            setIsLoading(false);
            navigate(`/programmation/${id}-${convertToSlug(res?.data.title)}`, { replace: true });
        };
        getEvent().then(() => { }).catch(() => { })
    }, [id, navigate])


    return (

        event &&
        <div className='bg-black'>
            <div className='text-orange p-8'>
                <h1 className='lg:text-6xl text-4xl font-extrabold text-center pt-2 uppercase '>programmation</h1>
            </div>
            {
                isLoading ? <div className="bg-black text-white text-xl font-bold text-center">CHARGEMENT EN COURS</div>
                    :
                    <div key={event._id} className='p-2'>
                        <div className=''>
                            <div className='lg:flex'>
                                <div>
                                    <img src={`/images/${event.image}`} alt='' className='w-60 h-40' />
                                </div>
                                <div className='p-4 mr-10 ml-10'>
                                    <div>
                                        <h3 className='font-bold text-4xl pb-4 text-orange'>{event.title}</h3>
                                    </div>
                                    <div className='text-white font-semibold text-xl pb-4'>{event.start_date}</div>
                                    <div className='text-white font-semibold text-xl pb-4'>{event.venue?.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div >


    )
}

export default ProgrammationSheet