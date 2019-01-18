import constants from './store/constants'

const connectWithApi = (dispatch,query)=>{
    fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data.items);
            const action = {
                type: constants.FORM_SUBMIT,
                repositories: data.items
            };
            dispatch(action)
        })
        .catch((error)=>{
            console.log(error)
        })
};

export default {
    connectWithApi
}