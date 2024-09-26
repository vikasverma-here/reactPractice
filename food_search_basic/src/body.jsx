// import "./body.css"
// import RestaurantCard from './restaurantCard'
// import { restaurents } from "./config"
// import { useState } from "react"
    
// const Body = ()=>{
//   const [restaurentsList , setrestaurentsList]= useState(restaurents)
//   const [searchval,setSearchval ]=  useState("")
 
//   function filterdata(searchval,restaurentsList){
// return  restaurentsList.filter((restaurents)=>{
//       restaurents.name.includes(searchval)
//     })
    
    
//   }
//   function handlechange(){
//     const data = filterdata(searchval, restaurents);
//     setrestaurentsList(data);
//   }
//     return(
//   <> 
//   <div className="searching-box">
//   <input className="styled-input" type="text" placeholder="Search-item" value={searchval} onChange={(e)=> setSearchval(e.target.value) }  />
//   <button onClick={handlechange} className="styled-button" >Search</button>
  
//  {/* <h1>{searchval}</h1> */}
  
//   </div>
      
// <div className="body-itme">
// {
//     restaurentsList.map((res,index)=>{
        
//        return <RestaurantCard {...res} key = {index}/>
//     })
// }

// <RestaurantCard {...restaurents[0]}/>e
// <RestaurantCard {...restaurents[1]} />
// <RestaurantCard {...restaurents[2]} />
// <RestaurantCard {...restaurents[3]} />
// <RestaurantCard {...restaurents[4]} />
// <RestaurantCard {...restaurents[5]} />
// <RestaurantCard {...restaurents[6]} />
// <RestaurantCard {...restaurents[7]} />
// </div>
// </>)}

// export default Body

import "./body.css";
import RestaurantCard from './restaurantCard';
import { restaurents } from "./config";
import { useState } from "react";
    
const Body = () => {
  const [restaurentsList, setRestaurentsList] = useState(restaurents);
  const [searchval, setSearchval] = useState("");  // Initialize as an empty string
  
  function filterdata(searchval, restaurentsList) {
    return restaurentsList.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchval.toLowerCase())
    );
  }

  const handleSearch = () => {
    const data = filterdata(searchval, restaurents);
    setRestaurentsList(data);
  };

  return (
    <> 
      <div className="searching-box">
        <input 
          className="styled-input" 
          type="text" 
          placeholder="Search-item" 
          value={searchval} 
          onChange={(e) => setSearchval(e.target.value)} 
        />
        <button onClick={handleSearch} className="styled-button">Search</button>
      </div>
      
      <div className="body-itme">
        {restaurentsList.map((res, index) => (
          <RestaurantCard {...res} key={index} />
        ))}
      </div>
    </>
  );
};

export default Body;
