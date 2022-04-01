import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const Div = styled.div`
  width: 1000px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  @media (max-width: 800px) {
    width: 450px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }
`

export const ButtonAdd = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`