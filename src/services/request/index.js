import axios from 'axios'
import {BASE_URL,TIMEOUT} from './config'
class CBRequest
{
  constructor(baseURL,timeout)
  {
    this.instance=axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use((res)=>{
      return res.data
    },err=>err)
  }
  request(config)
  {
    return this.instance.request(config)
  }
  get(config)
  {
    return this.request({...config,method:"get"})
  }
  post(config)
  {
    return this.request({...config,method:"post"})
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CBRequest(BASE_URL,TIMEOUT)