import React,{useState} from 'react'
import MenuBar  from './MenuBar'
import "../css/search.css"
function Search() {
    const [search,setSearch] = useState("")
    const setValue = (e)=>{
        setSearch(e.target.value)
        console.log(e.target.value)
    } 
    return (
        <>
            <MenuBar/>
            <div className="search">
                <div className="search_box">
                    <div className="search_input" >
                        <input type="text" placeholder="search here" value={search} onChange={setValue}/>
                    </div>
                    <div className="search_btn">
                        Search
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
