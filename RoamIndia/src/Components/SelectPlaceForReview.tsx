import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AppContext } from '../Context/ParentContext';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useNavigate } from 'react-router-dom';

interface Item{
    id: string,
    name: string
}

const SelectPlaceForReview: React.FC = () => {
    const navigate = useNavigate();
    const appContext = useContext(AppContext);
    if (!appContext) {
        return null;
    }
    const { attractionData, setSelectedPlace } = appContext;
    const items = attractionData.map((e) => ({
        id: e._id,
        name: e.Attraction_Name
    }));

    const handleOnSearch = (string: string, results: Item[]) => {
        console.log(string, results);
    };
    
    const handleOnHover = (result: Item) => {
        console.log(result);
    };
    
    const handleOnSelect = (item: Item) => {
        console.log(item);
        setSelectedPlace(item.name)
        navigate(`/writereview/${item.name}`)
        localStorage.setItem('selectedPlace', item.name)
    };

    const handleOnFocus = () => {
        console.log('Focused');
    };

    const formatResult = (item: Item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        );
    };

    return (
        <div>
            <Navbar />
            <div className='bg-background-light h-[83.5vh] w-full'>
                <form className="relative max-w-md h-4/12 mx-auto py-[10%]">
                    <div className="relative flex flex-col gap-7">
                        <label htmlFor="default-search" className='text-2xl text-center text-black'>What Would you like to review?</label>
                        <div className="relative">
                            <ReactSearchAutocomplete
                                items={items}
                                onSearch={handleOnSearch}
                                onHover={handleOnHover}
                                onSelect={handleOnSelect}
                                onFocus={handleOnFocus}
                                autoFocus
                                formatResult={formatResult}
                                styling={{ borderRadius: '0.375rem', height: '46px' }}
                                placeholder="Search for an attraction..."
                            />
                            <button type="submit" className="text-white absolute end-0 bottom-0 bg-[#42A69A] hover:bg-[#359388] rounded-r-lg text-md px-8 py-3">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SelectPlaceForReview;
