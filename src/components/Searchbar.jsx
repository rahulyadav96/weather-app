import { useState, useEffect } from "react"
import styled from "styled-components"
import { cities } from "./cities"
const LocationPin = styled.span`
& > img{
        width:20px;
        heigth:20px;
}
`
const Button = styled.button`
border:none;
background-color:#fff;
cursor:pointer;
& > img{
width:20px;
heigth:20px;
}
`
const SearchContainer = styled.div`
    width:50%;
    height:auto;
    min-width:350px;
    padding:10px 5px;
    border-radius:5px;
    margin:5px auto;
    border:1px solid grey;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    &:active:{
        border:2px solid black;
    }
    & > input{
        margin:2px;
        flex:1;
        font-size:20px;
        border:none;
        outline:none;
    }
`
export const Searchbar = () => {
    const [city, setCity] = useState("")
  

    useEffect(()=>{
        if(city!=""){

            let filteredCities = cities.filter(data=>{
               let poss = true;
               for(let i = 0; i<city.length; i++){
                   if(city.toLowerCase()[i]!=data.city.toLowerCase()[i]){
                       poss = false;
                       break;
                   }
               }
               if(poss) return data
            })
            console.log(filteredCities)
        }else{
            console.log(cities)
        }
    },[city])
    return (
        <div>
            <SearchContainer className="searchContainer">
                <LocationPin><img src="/img/pin.png" /></LocationPin>
                <input type="text" placeholder="Search" onChange={e => setCity( e.target.value)} value={city.cityname} />
                <Button ><img src="/img/search.png" /></Button>
            </SearchContainer>
            <section>
                <div>Mumbai</div>
            </section>
        </div>
    )
}