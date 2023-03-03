import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const CarPage = () => {
let {idx} = useParams()
const [mod,setmod] = useState('modal')
console.log(idx[1]);
    const  cars = [
        {
        model: 'ford-mustang',
        price: 20000,
        id: 1,
        description: 'культовый автомобиль класса Pony Car производства Ford Motor Company. На автомобиле размещается не эмблема Ford, а специальная эмблема Mustang.',
        oil: 'castrol',
        year: 1964,
        imgSrc: 'https://wp-s.ru/wallpapers/1/4/454298405370364/krasnyj-ford-mustang-na-asfalte-u-doma.jpg',
      },
      {
          model: 'camry',
          price: 25000,
          id: 2,
          description: 'культовый автомобиль класса Pony Car производства touoty camry Company. На автомобиле размещается не эмблема touoty, а специальная эмблема touoty.',
          oil: 'castrol',
          year: 2018,
          imgSrc: 'https://www.ural56.ru/upload/iblock/0e6/0e657351212fa722901c7736daa0a849.jpg',
        }
      ]
      console.log(cars[+idx[1]-1].imgSrc);
  return (
 

      
       
        <div className="car mod">
            <div className='modal'>
           <Link to={'/'}> <p>Close</p></Link>
          <div className="imgBlock">
            <img src={cars[+idx[1]-1].imgSrc}/>
            
          </div><div className="block"><p>{cars[+idx[1]-1].price}</p>
          <div className="model">Model:{cars[+idx[1]-1].model}</div></div>
          <p className='desc'>{cars[+idx[1]-1].description}</p></div>
        </div>
      
    

  )
}

export default CarPage