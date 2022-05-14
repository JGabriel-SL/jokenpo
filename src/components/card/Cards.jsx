import React, {useState, useEffect} from 'react'
import './card.css'

import paper from '../../assets/paper.png'
import rock from '../../assets/rock.png'
import scissor from '../../assets/scissor.png'

const data = ['rock', 'paper', 'scissor']

const Cards = () => {
  const [hand, setHand] = useState('')
  const [pcHand, setPcHand] = useState('')
  const [nRandom, setRandom] = useState(0)

  useEffect(() => {
    play()
  }, [hand])

  useEffect(() => {
  }, [pcHand])

  function random() {
    setPcHand(data[Math.floor(Math.random() * (3 - 0) + 0)])
  }
  
  function play() {
    random()
    console.log(hand)
    console.log(pcHand)

    validade()
  }
  
  function validade() {
    if(pcHand === hand) {
      console.log('empate')
    } else if (pcHand !== hand) {
      if (hand === 'scissor' && pcHand === 'paper') {
        console.log('tesoura vence papel')
      } else if (hand === 'scissor' && pcHand === 'rock') {
        console.log('tesoura perde para pedra')
      }
      if (hand == 'paper') {
        if (pcHand === 'rock') {
          console.log('papel vence pedra')
        } else if (pcHand === 'scissor') {
          console.log('papel perde para tesoura')
        }
      }

      if (hand === 'rock') {
        if (pcHand === 'scissor') {
          console.log('papel vence pedra')
        } else if (pcHand === 'scissor') {
          console.log('papel perde para tesoura')
        }
      }
    }
  }

  return (
    <div>
      <h5 className="container__title">YOU</h5>

      <div className="container__cards">
        <article className={hand === 'rock' ? 'active container__card' : 'container__card'} onClick={() => setHand('rock')}>
            <div className="container__card-img">
                <img src={rock} alt="" />
            </div>

            <div className="container__card-text">
                <h3>Pedra</h3>
            </div>
        </article>
        <article className={hand === 'paper' ? 'active container__card' : 'container__card'} onClick={() => setHand('paper')}>
            <div className="container__card-img">
                <img src={paper} alt="" />
            </div>

            <div className="container__card-text">
                <h3>Papel</h3>
            </div>
        </article>
        <article className={hand === 'scissor' ? 'active container__card' : 'container__card'} onClick={() => setHand('scissor')}>
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