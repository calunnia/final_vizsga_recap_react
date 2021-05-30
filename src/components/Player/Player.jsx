import React,{useState} from 'react'
import FranchisePlayers from '../FranchisePlayers/FranchisePlayers.jsx'

function Player({player,filter}) {

const [ show, setShow] = useState('')

    return (
        <div className="player">
           <p>{player.name}</p> 
           <p>{player.stadium}</p> 
           <button onClick={()=>(setShow(!show))}>{
                    show ? 'show less' : 'Show More'
                    }
           </button>
                        {
                            show ? player.franchisePlayers.map((franchisePlayer)=>(<FranchisePlayers franchisePlayer={franchisePlayer} filter={filter} player={player}/>))
                                :''
                        }
        </div>
    )
}

export default Player
