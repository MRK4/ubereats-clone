import React, {useState} from 'react'
import {data} from '../data/data.js'

const Food = () => {
const [foods, setFoods] = useState(data);

// Filter type
const filterType = (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category;
        })
    )
}

// Filter price
const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price;
        })
    )
}

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h2>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={ () => setFoods(data) } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={ () => filterType('burger') } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={ () => filterType('pizza') } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizzas</button>
                        <button onClick={ () => filterType('salad') } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button onClick={ () => filterType('chicken') } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={ () => setFoods(data) } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={ () => filterPrice('$') } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={ () => filterPrice('$$') } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={ () => filterPrice('$$$') } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={ () => filterPrice('$$$$') } className='transition m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>
        </div>


        {/* Display Restaurants */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='transition border rounded-lg shadow-lg hover:scale-105'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='bg-orange-500 text-white py-1 px-2 rounded-full'>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Food