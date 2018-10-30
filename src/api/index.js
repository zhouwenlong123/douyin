// //动态判断域名
// const host = /localhost/.test(window.location.host)
//   ? "https://baojia.chelun.com"
//   : "http://baojia.chelun.com";

// function sendRequest(url, method = "GET", data = {}) {
//   let params = {
//     method
//   };
//   //判断如果是一个post请求,带上请求体信息
//   if (method == "POST") {
//     params.body = JSON.stringify(data);
//   }
//   //判断请求查询url是否携带query
//   if (url.indexOf('?') == -1) {
//     url += `?_=${+new Date()}`;
//   } else {
//     url += `&_=${+new Date()}`;
//   }
//   return fetch(host + url, params).then(res => res.json()).then(body => body);
// }

// //获取车辆品牌数据
// export let getBrandList = () => {
//   return sendRequest("/v2-car-getMasterBrandList.html");
// };