import React, {useState, useEffect} from 'react'
import './card.css'

import paper from '../../assets/paper.png'
import rock from '../../assets/rock.png'
import scissor from '../../assets/scissor.png'

const data = ['rock', 'paper', 'scissor']


const Cards = () => {
  const [hand, setHand] = useState('')
  const [pcHand, setPcHand] = useState('')
  const [resp, setResp] = useState('')

  useEffect(() => {
    // console.log('you: ', hand)
    // console.log('pc: ', pcHand)
    validate(hand, pcHand)
  }, [hand, pcHand])

  
  const validate = (hand, pcHand) => {
    if(pcHand === hand && (pcHand !== '' && hand !== '')) {
      setResp('EMPATOU')
    } else if (pcHand !== hand) {
      if (hand === 'scissor' && pcHand === 'paper') {
        setResp('VOCÊ GANHOU!')
      } else if (hand === 'scissor' && pcHand === 'rock') {
        setResp('VOCÊ PERDEU :(')
      }
      if (hand === 'paper') {
        if (pcHand === 'rock') {
          setResp('VOCÊ GANHOU!')
        } else if (pcHand === 'scissor') {
          setResp('VOCÊ PERDEU :(')
        }
      }

      if (hand === 'rock') {
        if (pcHand === 'scissor') {
          setResp('VOCÊ GANHOU!')
        } else if (pcHand === 'paper') {
          setResp('VOCÊ PERDEU :(')
        }
      }
    }
  }

  return (
    <div>
      <h5 className="container__title-result">
        {resp !== '' ? resp : '(O resultado aparece aqui)'}
      </h5>
      
      <h5 className="container__title">YOU</h5>
      <div className="container__cards">
        <article className={hand === 'rock' ? 'active container__card' : 'container__card'} onClick={() => {
          setHand('rock')
          setPcHand(data[Math.floor(Math.random() * (3 - 0) + 0)])
        }}>
            <div className="container__card-img">
                <img src={rock} alt="" />
            </div>

            <div className="container__card-text">
                <h3>Pedra</h3>
            </div>
        </article>
        <article className={hand === 'paper' ? 'active container__card' : 'container__card'} onClick={() => {
          setHand('paper')
          setPcHand(data[Math.floor(Math.random() * (3 - 0) + 0)])
        }}>
            <div className="container__card-img">
                <img src={paper} alt="" />
            </div>

            <div className="container__card-text">
                <h3>Papel</h3>
            </div>
        </article>
        <article className={hand === 'scissor' ? 'active container__card' : 'container__card'} onClick={() => {
          setHand('scissor')
          setPcHand(data[Math.floor(Math.random() * (3 - 0) + 0)])
        }}>
            <div className="container__card-img">
                <img src={scissor} alt="" />
            </div>

            <div className="container__card-text">
                <h3>Tesoura</h3>
            </div>
        </article>
      </div>

      <h3 className="container__card-versus">X</h3>
      <h5 className="container__title">PC</h5>

      <div className="container__cards">
        <article className={pcHand === 'rock' ? 'active container__card-pc' : 'container__card-pc'}>
            <div className="container__card-img">
                <img src={rock} alt="" />
            </div>

            <div className="container__card-text">
                <h3>Pedra</h3>
            </div>
        </article>
        <article className={pcHand === 'paper' ? 'active container__card-pc' : 'container__card-pc'}>
            <div className="container__card-img">
                <img src={paper} alt="" />
            </div>

            <div className="container__card-text">
                <h3>Papel</h3>
            </div>
        </article>
        <article className={pcHand === 'scissor' ? 'active container__card-pc' : 'container__card-pc'}>
            <div className="container__card-img">
                <img src={scissor} alt="" />
            </div>

            <div className="container__card-text">
                <h3>Tesoura</h3>
            </div>
        </article>
      </div>
    </div>
  )
}

export default Cards