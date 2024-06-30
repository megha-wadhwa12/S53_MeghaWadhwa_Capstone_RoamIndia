import React from 'react'
import StarRating from './Star'

const Form: React.FC = () => {
    return (
        <div>
            <form className=" mx-auto p-6">
                <div className="mb-8 flex flex-col gap-2">
                    <label className="block text-2xl font-medium blue-light blue">How would you rate your experience?</label>
                    <StarRating />
                </div>
                <div className="mb-8 flex flex-col gap-4">
                    <label className="block text-2xl font-medium blue-light blue">When did you go??</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-6/12 px-3 py-2 border rounded-md 128 border-gray-200 shadow-lg  outline-none"
                    />
                </div>
                <div className="mb-8 flex flex-col gap-4">
                    <label className="block text-2xl font-medium blue-light blue">Write your review</label>
                    <textarea className='w-full h-128 border border-gray-200 shadow-lg outline-none rounded-md' />
                </div>
                <div className="mb-8 flex flex-col gap-4">
                    <label className="w-full block text-2xl font-medium blue-light blue">Would you like to add some Photos <span className='text-gray-400 text-sm asul-regular'><br />Optional</span></label>
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-128 rounded-md cursor-pointer bg-gray-100 border border-gray-200 shadow-lg outline-none "
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                            <svg
                                className="w-8 h-8 mb-4 text-black"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-black">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                <div className='w-full flex justify-center'>
                <input type="submit" className='btn text-sm text-white black-btn rounded-md w-32 mx-auto' />
                </div>
            </form>
        </div>
    )
}

export default Form 