import axios from 'axios'


const instance=axios.create({
        baseURL:'https://tinder1999.herokuapp.com/'
    })


export default instance