import cbRequest  from '@/services/request'
export function getGoodPriceInfoList()
{
  return cbRequest.get({
    url:'/home/goodprice'
  })
}
