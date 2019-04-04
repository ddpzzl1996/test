import axios from "axios"
import qs from "qs"

const http = {
  post: ""
}
const baseUrl = 'https://dati.shiguangkey.com/'
axios.defaults.headers["Content-Type"] =
  "application/x-www--urlencoded;charset=utf-8";
http.post = function (api, data) {
  let params = qs.stringify(data)
  let url = baseUrl + api
  return new Promise((reslove, rej) => {
    axios({
      url: url,
      data: data,
      method: "post",
      // header: header,
      // headers: header,
      headers: { "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8" },
      dataType: "json"
    })
    .then(res => {
      console.log(res);
      reslove(res)
    })
    .catch(err => {
      console.log( err);
      rej(err)
    });
  })
}


export default http