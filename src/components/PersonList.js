import React from 'react'

const PersonList = (props) => {
        const {list,delPhone} = props

        

        return(
            
                    <div key={list.id} className="box">
                        <div className="id-box"><h1>{list.id}</h1></div>
                        <div className="list-content">
                            <h3>{list.name}</h3>
                            <h4>{list.phone}</h4>
                        </div>
                        <button onClick={delPhone} type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>  
                    </div>
                
        )
    
}

export default PersonList;