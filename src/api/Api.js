import axios from 'axios';

export default axios.create({
  baseURL: 'https://vistaapp.ir/washman/public/api',
});
// login = () => {
//     var that = this;
// axios.post('/',{
//     phone:that.state.phone,
// }).then(function(response){
//     if(response.data.is_successful){
//         that.setState({

//         })

//     } else {
//         alert(response.data.message)
//     }
// }).catch(function(e){
//     console.warn(e)
// })
// }
// axios.get
