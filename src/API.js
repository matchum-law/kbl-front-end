import axios from 'axios';
  

class API {

    static getTitle(id) {
        return axios.get('http://localhost:5000/posts/title/' + id);
    }
     
    static getContent(id) {
        return axios.get('http://localhost:5000/posts/content/' + id);   
    }
    
    static sample() {
        // return axios.get('ec2-52-78-238-20.ap-northeast-2.compute.amazonaws.com:8080/hello');
        return axios.get('http://192.168.200.171:8080/kbl_player');
    }
}

export default API;

// export function getTitle(id) {
//     return axios.get('http://localhost:5000/posts/title/' + id);
// }
 
// export function getContent(id) {
//     return axios.get('http://localhost:5000/posts/content/' + id);   
// }

// export function sample() {
//     // return axios.get('ec2-52-78-238-20.ap-northeast-2.compute.amazonaws.com:8080/hello');
//     return axios.get('http://192.168.200.171:8080/kbl_player');
// }