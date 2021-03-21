import React from 'react'

const FilterPerson = (props) => {
        
        
        return(
            
                    <div className="filter-div">
                        <form>
                            <div className="form-group">
                                <label>Filter</label>
                                <input 
                                    type="text" 
 
                                    className="form-control"/>
                            </div>
                        </form>
                        <div className="show-filtered-list">
                        </div>
                    </div>
                
        )
    
}

export default FilterPerson;