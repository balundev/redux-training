import React from 'react';
import {connect} from 'react-redux'
import constants from './store/constants'
import api from './api'

const Counter = (props)=>{
    return(
        <div>
            <h1>Welcome to fetch github repos</h1>
            <form onSubmit={(event)=>{props.handleSubmit(event,props.inputValue)}}>
                 <input value={props.inputValue} onChange={props.handleSearchInput}/>
                <ul>
                    {props.repos.map((el)=>{
                        return (
                            <li key={el.id}><a href={`${el.html_url}`}>{el.name}</a></li>
                        )
                    })}
                </ul>
                <button>submit</button>
            </form>
        </div>
    )
};

const mapStateToProps=(state)=>{
    return {
        inputValue: state.inputValue,
        repos: state.repos
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
            handleSearchInput: (event)=>{
                const action = {
                    type: constants.SEARCH_INPUT,
                    searchValue: event.target.value
                };
                dispatch(action)
            },

            handleSubmit: (event,query)=>{
                event.preventDefault();
                api.connectWithApi(dispatch,query)
            }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

