import { useEffect,useState } from "react"
import React from 'react'
import statewise from "../statewiseData/statewise.js"

const Statewise = () => {
    const [search,setSearch]=useState(' ')
    const [data,setData]=useState([])
    const [filterdata,setFilterdata]=useState([])
    const getCovidData=async()=>{
        const res = await fetch('https://data.covid19india.org/data.json');
        const Orgdata= await res.json();
        setData(Orgdata.statewise)
      //   setLoding(false)            
  }
  

  useEffect(() => {
      getCovidData();
  
  }, [])

    useEffect(() => {
       setFilterdata(
           data.filter((data)=>data.state.toLowerCase().includes(search.toLowerCase()))
       )

        },[search,data])
    return (

        <div>
             <input type="text" placeholder="search" onChange={(e)=>{
                    setSearch(e.target.value)
                    
                }}></input>      
             
                <div className="container-fluid mt-5">
                    <div className="main-heading">
                        <h1 className="mb-5 text center"><span className="font-weight-bold">INDIA</span> COVID-19</h1>

                    </div>
                    <div className ="table responsive">
                        <table className="table table-hover"> 
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>updated</th>


                            </tr>

                        </thead>
                        <tbody>
                            

                            {
                                
                                data.map((currdata,indx)=>{
                                    return (
                                        <tr key={indx}>
                                            
                                        <th>{currdata.state}</th>
                                        
                                        <th>{currdata.confirmed}</th>
                                        <th>{currdata.recovered}</th>
                                        <th>{currdata.deaths}</th>
                                        <th>{currdata.active}</th>
                                        <th>{currdata.updated}</th>
                                        
                                    </tr>

                                    )

                                 })
                            }
                          
                        </tbody>
                        </table>

                    </div>
                    
                </div>
        </div>
    )
}

export default Statewise
