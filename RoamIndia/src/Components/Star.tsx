import React from 'react'
import { Rate } from 'antd';

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
}

const Star:React.FC<StarRatingProps> = ({value,onChange}) => {
  return (
    <div className='w-full'>
        <Rate allowClear={false} autoFocus defaultValue={0} className='text-3xl m-2' tooltips={["Terrible","Poor","Average","Very Good","Excellent"]}
        value={value}
        onChange={onChange}/>
    </div>
  )
}

export default Star















// import React from 'react';

// interface StarRatingProps {
//   value: number;
//   onChange: (value: number) => void;
// }

// const StarRating: React.FC<StarRatingProps> = ({ value, onChange }) => {
//   const handleClick = (rating: number) => {
//     onChange(rating);
//   };

//   return (
//     <div className="flex">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <svg
//           key={star}
//           className={`w-10 h-10 cursor-pointer ${
//             star <= value ? 'text-yellow-500' : 'text-gray-300'
//           }`}
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           onClick={() => handleClick(star)}
//         >
//           <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//         </svg>
//       ))}
//     </div>
//   );
// };

// export default StarRating;
