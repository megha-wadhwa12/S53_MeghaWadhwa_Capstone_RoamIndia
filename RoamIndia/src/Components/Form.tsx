import React from 'react'
import Star from './Star'
import { Controller, useForm } from 'react-hook-form'
import FileUpload from './Upload';
import DropUpload from './DropUpload';

type Inputs = {
    rating: number;
    date: string;
    review: string;
    image: FileList;
};

const Form: React.FC = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>();
    console.log('errors', errors)

    const formSubmitHandler = (data: Inputs) => {
        console.log('data', data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitHandler)} className=" mx-auto p-6">
                <div className="mb-8 flex flex-col gap-2">
                    <label className="block text-2xl font-medium blue-light blue">How would you rate your experience?</label>
                    <Controller
                        name="rating"
                        control={control}
                        rules={{ required: 'Rating is required' }}
                        render={({ field }) => (
                            <Star value={field.value} onChange={field.onChange} />
                        )} />
                    {errors.rating && (
                        <p className="text-red-500">{errors.rating.message}</p>
                    )}
                </div>
                <div className="mb-8 flex flex-col gap-4">
                    <label className="block text-2xl font-medium blue-light blue">When did you go??</label>
                    <input
                        type="date"
                        {...register("date", { required: "Date is required" })}
                        className="w-6/12 px-3 py-2 border rounded-md 128 border-gray-200 shadow-lg  outline-none"
                    />
                    {errors.date && <p className="text-red-500">{errors.date.message}</p>}

                </div>
                <div className="mb-8 flex flex-col gap-4">
                    <label className="block text-2xl font-medium blue-light blue">Write your review</label>
                    <textarea
                        {...register("review", { required: "Review is required" })}
                        className='w-full h-128 border border-gray-200 shadow-lg outline-none rounded-md' />
                    {errors.review && <p className="text-red-500">{errors.review.message}</p>}
                </div>
                <div className="mb-8 flex flex-col gap-4 h-full">
                    <label className="w-full block text-2xl font-medium blue-light blue">Would you like to add some Photos <span className='text-gray-400 text-sm asul-regular'><br />Optional</span></label>
                        <FileUpload />
                </div>
                <div className='w-full flex justify-center relative'>
                    <input type="submit" className='btn text-sm text-white black-btn rounded-md w-32 mx-auto' />
                </div>
            </form>
        </div>
    )
}

export default Form 