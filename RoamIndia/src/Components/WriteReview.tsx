import React from 'react'
import Navbar from './Navbar'
import Form from './Form'

const WriteReview: React.FC = () => {

    return (
        <div>
            <Navbar />
            <div className="flex w-full flex-auto mt-10">
                <div className='flex flex-col w-[38vw] p-12 gap-7'>
                    <h1 className='text-4xl asul-regular text-center teal-light blue'>Tell us, how was your visit?</h1>
                    <div className="card glass w-80 m-auto">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="inline-block h-full my-20 w-[0.05vw] self-stretch bg-gray-300 bg-white/50"></div>
                <div className='w-6/12 flex flex-col gap-12'><Form /></div>
            </div>
        </div>
    )
}

export default WriteReview