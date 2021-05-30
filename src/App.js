import './App.css'
import React,{useState,useEffect} from 'react'
import LoadingMask from './components/LoadingMask/LoadingMask.jsx'
import Player from './components/Player/Player.jsx'

const App = () => {


  const [data, setData] =useState([])
  const [search,setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  
  
  useEffect(() => {

    setLoading(true)
    setData([])
    
     
       setLoading(true)
       setData([])
       
       fetch(`/api/teams`)
         .then((resopnse) => (resopnse.json()))
         .then((responseData)=>(setData(responseData)))
         .catch(error=>{
                         console.log('error=',error );
                         setData(null)
         })
         .finally( () => {
                           console.log('fetch end');
                           setLoading(false)
         })
    return () => {
     // cleanup
    }
  }, [])
 
      
      
      
      console.log('data', data);
  
  
  
  return (
    <div className="App">
    <h1>NBA teams - all star voting</h1>
    <input type="text" placeholder="Search"  onChange={ (ev) => setSearch(ev.target.value) }/>
      {
        loading && <LoadingMask/>
      }

          {
            data=== null
                        ? <p>Upps Something Happend...</p>
                        : data.map( (player,i) =>
                                           
                                           <div>  {< Player player = {player} key={i.toString()} filter={search}  />}    </div> )
                                            
                      
          }

    </div>
  )
}

export default App
