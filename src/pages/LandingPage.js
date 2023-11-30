import React from 'react'
import { useNavigate } from "react-router";

function LandingPage() {
    const navigate = useNavigate();
    const btnClass = 'px-5 py-2 border border-zinc-700 rounded-md m-2 text-sky-100 bg-zinc-700 hover:bg-zinc-600 cursor-pointer shadow-md shadow-zinc-500'

    return (
        <div className='bg-zinc-900 border border-black h-screen shadow-xl'>
            <div className='border border-sky-400 shadow-xl shadow-sky-500 rounded-2xl w-6/12 mx-auto my-28 bg-sky-300'>
            <div className='my-16 text-center font-bold text-5xl text-zinc-900 italic'>PUNE - PUMPS</div>
                <div className='flex justify-center align-middle my-16'>
                    <div
                        className={btnClass}
                        onClick={() => navigate("/pumps")}
                    >
                        <div>Pumps</div>
                    </div>
                    <div
                        className={btnClass}
                        onClick={() => navigate("/spares")}
                    >
                        <div>Spares</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;