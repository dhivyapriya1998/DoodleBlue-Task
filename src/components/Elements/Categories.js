import React,{useState,useEffect,useContext} from 'react'
import '../Landing.css'
import GridItem from './GridItem'
import {GlobalContext} from '../../GlobalContext'

function Categories() {
    const global = useContext(GlobalContext)
    const [state, setstate] = useState("")

   
    
    const getProduct = (filterval) =>{
        
        categoryData.filter((el) => el.id === filterval ? global.setValue(el) :null)
    }
    
    const categoryData = [
        {Name:"Books",id:"01",sub:[{name:"Tamil",price:"130"},{name:"English",price:"251"},{name:"Social",price:"130"},{name:"Science",price:"130"}]},
        {Name:"Dress",id:"02",sub:[{name:"Sweater",price:"2000"},{name:"Jumpsuit",price:"2500"}]},
        {Name:"Cosmetics",id:"03",sub:[{name:"Handbag",price:"200"},{name:"Shoe",price:"750"}]},
        {Name:"Electric Appliances",id:"04",sub:[{name:"Laptop",price:"20000"},{name:"Mobile",price:"5000"}]},
        ]
        useEffect(() => {
        global.getCategory(categoryData)
    }, [])
    return (
        <div>
            {categoryData.map((el) => {return (<div className="categoryName" onClick={()=>{getProduct(el.id)}}>{el.Name}<hr /></div>)})}
        </div>
    )
}

export default Categories
