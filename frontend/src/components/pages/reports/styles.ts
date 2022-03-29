import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const Cards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  grid-row-gap: 10px;

  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const Graph = styled.div`
  margin-top: 10px; 
`
