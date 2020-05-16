import React, {Component} from 'react';
import ItemList from "../item-list";
import PersonDetails from "../person-details";

class Person extends Component{
    state ={
        selectedPerson: 1,
    };
    onPersonSelected=(id)=>{
        this.setState({selectedPerson:id})
    };
    render (){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

            </div>
        )
    }
};
export default Person;