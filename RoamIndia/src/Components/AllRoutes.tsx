import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import TrendingDestinations from './TrendingDestinations'
import TopAttractions from './TopAttractions'
import Restaurants from './Restaurants'
import Hotels from './Hotels'
import AllDestinations from './AllDestinations'
import AddNewPlaceForm from './AddNewPlaceForm'
import AddNewPlace from './AddNewPlace'
import PageNotFound from './PageNotFound'
import Place from './Place'
import Attraction from './Attraction'
import States from './States'
import Cities from './Cities'
import WriteReview from './WriteReview'
import SelectPlaceForReview from './SelectPlaceForReview'

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/trendingdestinations" element={<TrendingDestinations />} />
      <Route path="/topattractions" element={<TopAttractions />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/:state" element={<States />} />
      <Route path="/:state/:city" element={<Cities />} />
      <Route path="/alldestinations" element={<AllDestinations />} />
      <Route path="/addplaceform" element={<AddNewPlaceForm />} />
      <Route path="/addplace" element={<AddNewPlace />} />
      <Route path="/place" element={<Place />} />
      <Route path="/writereview" element={<SelectPlaceForReview />} />
      <Route path="/writereview/:attraction" element={<WriteReview />} />
      <Route path="/:state/:city/:attraction" element={<Attraction />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AllRoutes