import styled from 'styled-components'
export const RightWrapper=styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
color: ${props=>props.theme.color.textColor};
font-weight: 600;
.btns{
  display: flex;
  align-items: center;
  .btn
  {
    height: 18px;
    line-height: 18px;
    padding: 12px 15px;
    cursor: pointer;
    border-radius: 22px;
    &:hover
    {
      background-color: #f5f5f5;
    }
  }
}
.profile
{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 77px;
  height: 42px;
  margin-left: 24px;
  border-radius: 25px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: #fff;
  color: ${props=>props.theme.color.textColor};
  cursor: pointer;
  ${props=>props.theme.mixin.boxShadow}
}
`