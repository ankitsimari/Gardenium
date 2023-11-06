import React, { useEffect, useState } from "react";
import BarChart from "../Chart/BarChart";
import { useDispatch, useSelector } from "react-redux";
import LineChart from "../Chart/LineChart";
import PieChart from "../Chart/PieChart";
import RadarChart from "../Chart/RadarChart";
import DashCard from "../DashCard";
import StockCard from "../StockCard";
import {AiOutlineEye} from "react-icons/ai"
import {GiAnglerFish, GiChickenOven, GiFruitBowl, GiMeatCleaver} from "react-icons/gi"
import {PiPlantBold} from "react-icons/pi";
import AOS from "aos"
import 'aos/dist/aos.css'
import { getAllPlantsFunction } from "../../../../Redux/ProductRoute/Action";



const Stocks = () => {
  // const main = useSelector((store) => store.ProductsReducer.Users);

  // var c = main.map((e) => e.name);
  // let d = main.map((e) => e.Order.length);


  const category =useSelector((state) => state.PlantReducer.totalPlants.plants);
  const medicinal = category.filter((e)=> e.category==="medicinal");
  const herbs = category.filter((e)=> e.category==="herbs");
  const flowers = category.filter((e)=> e.category==="flowers");
  const vegetable = category.filter((e)=> e.category==="vegetable");
  const seeds = category.filter((e)=> e.category==="seeds");


  const all = useSelector(state=>state.PlantReducer.totalPlants.plants)
  console.log(all)

  
  const name = ["medicinal","herbs","flowers","vegetable","seeds"];
  const Length = [medicinal.length,herbs.length,flowers.length,vegetable.length,seeds.length];
  const colors = ["#FC6183", "green", "#FBCA57", "#369BE0","#0996a0"];
  const logo = [<GiFruitBowl className='fs-2 text-white'/>,<PiPlantBold className='fs-2 text-white'/>,<GiChickenOven className='fs-2 text-white'/>,<GiAnglerFish className='fs-2 text-white'/>,<GiMeatCleaver className='fs-2 text-white'/>]


  const [userData, setUserData] = useState({
    labels: name,
    datasets: [
      {
        label: "Category",
        data: Length,
        backgroundColor: colors,
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllPlantsFunction)
    AOS.init({duration:2000})
    },[])

  return (
    <div>
      <div className="my-4 mt-4 d-flex gap-5 ms-3 justify-content-center" >
        {name.map((e,index)=>  <StockCard text={name[index]} data={Length[index]} bg={colors[index]} comp={logo[index]} />)}
      </div>

      <div className="d-block m-auto ms-3" >
        <span className="d-flex gap-4 mt-5" >
          <div className="shadow p-4" style={{ width: "60%" }} >
        <BarChart chatData={userData} />
          </div>
          <div className="shadow p-4" style={{ width: "33%" }} >
        <PieChart chatData={userData} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Stocks;
