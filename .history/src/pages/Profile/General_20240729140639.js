import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProfileList } from "../../constants";
import axios from "axios";
const General=()=>{


    const [customer, setCustomer]=useState({})
    const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://matkinhcaolo.io.vn/api/${id}`
          );
          console.log(response);
          setProduct(response.data.results);
            console.log(id_variant)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
return(
    <div className="w-full flex px-8 py-8 gap-5">
            <div className="w-1/5">
                <ul>
                {ProfileList.map(({id,title,link})=>(
                    <NavLink
                    key={id}
                    to={`profile/${link}`}
                    //state={{ data: location.pathname.split("/")[1] }}
                    >
                        <li className="px-3 py-5 border rounded-lg"
                            >{title}</li>
                </NavLink >
                ))}
                </ul>
            </div>
            <div className="w-4/5 border">
 <p>general</p>
    <div className="border py-10 border-black"></div>

    </div>
        </div>
    
)   
}
export default General;