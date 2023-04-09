import cbRequest  from '@/services/request'
export function getGoodPriceInfoList()
{
  return cbRequest.get({
    url:'/home/goodprice'
  })
}
export function getHighStoreList()
{
  return cbRequest.get({
    url:'/home/highscore'
  })
}
export function getHomeDiscountList()
{
  return cbRequest.get({
    url:'/home/discount'
  })
}
export function getHotRecommendList()
{
  return cbRequest.get({
    url:'/home/hotrecommenddest'
  })
}
