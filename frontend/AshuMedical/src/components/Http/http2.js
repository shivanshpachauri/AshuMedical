import axios from "axios";
class CustomHttp {
  constructor(url) {
    this.url = url;
  }
  apicreate() {
    const api = axios.create({
      baseURL: this.url,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return api;
  }
  async fetchurl() {
    const response = await axios.get(this.url);
    return response.data;
  }
  async posturl(params) {
    const response = await axios.post(this.url, { ...params });
    return response.data;
  }
  async puturl() {
    const response = await axios.put(this.url);
    return response.data;
  }
  async deleteurl() {
    const response = await axios.delete(this.url);
    return response.data;
  }
}
const CustomHttp1 = new CustomHttp("https://httpbin.org/get");
const CustomHttp2 = new CustomHttp("https://httpbin.org/post");
const data = await CustomHttp1.fetchurl();
const data2 = await CustomHttp2.posturl({});
console.log(data, data2);
