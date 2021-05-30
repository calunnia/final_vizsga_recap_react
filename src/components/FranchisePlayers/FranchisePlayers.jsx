import React,{useState} from 'react'

function FranchisePlayers( {franchisePlayer, filter ,player }) {
const [ vote, setVote] = useState('')
const [loading, setLoading] = useState(false)
const [data, setData] =useState([])

const startPost =(playerID) => {

      
    setLoading(true)
    setData([])
    
    fetch(`/api/vote`,{
                        method:"POST",
                        headers: {  'Authorization' : 'dsadkfjghdfkhd',
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                                },
                        body: JSON.stringify({"id":playerID })
                         }
    )
      .then((resopnse) => (resopnse.json()))
      .then((responseData) => { setData(responseData);
                                setVote(!vote);               
      })
      .catch(error=>{
                      console.log('error=',error );
                      setData(null)
      })
      .finally( () => {
                        console.log('fetch end');
                        setLoading(false)
      })
    
    }


/*   if (franchisePlayer.name.indexOf(filter) > -1 )
    console.log('indexOf=',franchisePlayer.name.indexOf(filter));
 */

    return (
        <div className="franchisePlayer"> 
      {/*   {  'indexOf=' + (franchisePlayer.name.indexOf(filter)>-1 ? '*': '') } */}
          
          { franchisePlayer.name.indexOf( filter ) >- 1 
                ? 
                    <p> <b>{franchisePlayer.name}</b> -
                        <button onClick={()=>((startPost(player.franchisePlayers.id)))}>
                            {loading ? '...' : 
                                                vote ? 'voted' : 'vote'}
                            
                        </button>
                        </p> 
                : ''
            }
           

          
        </div>
    )
}

export default FranchisePlayers
