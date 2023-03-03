import React,{useState} from "react";
import '../../index.css'
import {useParams,Link} from 'react-router-dom'
import CarPage from "../CarPage";
const App = () => {
  const [open,setOpen] = useState(false)
  const {idx} = useParams()

  const cars = [
    {
      model: "ford-mustang",
      price: 20000,
      id: 1,
      description:
        "культовый автомобиль класса Pony Car производства Ford Motor Company. На автомобиле размещается не эмблема Ford, а специальная эмблема Mustang.",
      oil: "castrol",
      year: 1964,
      imgSrc:
        "https://wp-s.ru/wallpapers/1/4/454298405370364/krasnyj-ford-mustang-na-asfalte-u-doma.jpg",
    },
    {
      model: "camry",
      price: 25000,
      id: 2,
      description:
        "культовый автомобиль класса Pony Car производства touoty camry Company. На автомобиле размещается не эмблема touoty, а специальная эмблема touoty.",
      oil: "castrol",
      year: 2018,
      imgSrc:
        "https://www.ural56.ru/upload/iblock/0e6/0e657351212fa722901c7736daa0a849.jpg",
    },
  ];
  return (
  !idx ? <div className="main">
    {cars.map((item) => {
      return (
        <Link onClick={()=>{setOpen(true)}} to={`/:${item.id}`} >
        <div className="car">
          <div className="imgBlock">
            <img src={item.imgSrc}/>
         
          </div>  <div className="block"> <p>{item.price}</p>
          <div className="model">Model:{item.model}</div></div>
       
        </div></Link>
      );
    })}
  </div>:<> <div className="main">
    {cars.map((item) => {
      return (
        <Link onClick={()=>{setOpen(true)}} to={`/:${item.id}`} >
        <div className="car">
          <div className="imgBlock">
            <img src={item.imgSrc}/>
         
          </div>  <div className="block"> <p>{item.price}</p>
          <div className="model">Model:{item.model}</div></div>
       
        </div></Link>
      );
    })}
  </div><CarPage/></>
  );
};

export default App;
