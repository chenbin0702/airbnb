import cbRequest  from '@/services/request'
export function getEntireRoomList(offset=0,size=20)
{
  return cbRequest.get({
    url:'entire/list',
    params:{
      offset,
      size
    }
  })
}