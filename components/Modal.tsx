'use client'
import styled from "styled-components"

const Fade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000;
  opacity: .3;
  z-index: 1;
`
const ModalStyled = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 500px;
  height: 400px;
  z-index: 2;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    margin-bottom: 1em;
  }
  form{
    width: 90%;
  }
`
type Props = {
  chidren: React.ReactNode
}

export const Modal = () => {

  const closeModal = (): void => {
    const modal = document.querySelector('#modal')
    modal?.classList.add('hide')
  } 

  return (
    <div id="modal" className="hide">
      <Fade></Fade>
      <ModalStyled>
        <h2>Texto Modal</h2>
        
      </ModalStyled>
    </div>
  )
}