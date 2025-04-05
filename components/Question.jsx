import React, { useState } from 'react'
import Card from '../components/Card.jsx'
import '../css/questionstyle.css'

function Question({ book, onNext, setpyazarlar, setnyazarlar, setpturler, setnturler }) {
  const [selectedButtons, setSelectedButtons] = useState([])

  const submitQuestion = () => {
    selectedButtons.forEach((button) => {
      if (button === 'bt1') {
        setpturler(prev => [...prev, book.tur])
      }
      if (button === 'bt2') {
        setpyazarlar(prev => [...prev, book.yazar])
      }
      if (button === 'bt3') {
      }
      if (button === 'bt4') {
        setnturler(prev => [...prev, book.tur])
      }
      if (button === 'bt5') {
        setnyazarlar(prev => [...prev, book.yazar])
      }
      if (button === 'bt6') {
      }
    })
    onNext()
  }

  const handleButtonClick = (e) => {
    const buttonId = e.target.id


    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter(id => id !== buttonId))
    } else {

      let newSelectedButtons = [...selectedButtons]
      if (buttonId === 'bt1' || buttonId === 'bt4') {
        newSelectedButtons = newSelectedButtons.filter(id => id !== 'bt1' && id !== 'bt4')
      }
      if (buttonId === 'bt2' || buttonId === 'bt5') {
        newSelectedButtons = newSelectedButtons.filter(id => id !== 'bt2' && id !== 'bt5')
      }
      if (buttonId === 'bt3' || buttonId === 'bt6') {
        newSelectedButtons = newSelectedButtons.filter(id => id !== 'bt3' && id !== 'bt6')
      }
      setSelectedButtons([...newSelectedButtons, buttonId])
    }
  }

  const getButtonClass = (buttonId) => {
    return `button ${selectedButtons.includes(buttonId) ? 'selected' : ''}`
  }

  return (
    <div>
      <Card book={book} />
      <div className='buttons'>
        <div className='possitive-feedback-buttons'>
          <button id='bt1' onClick={handleButtonClick} className={getButtonClass('bt1')}>Bu Türü Seviyorum</button>
          <button id='bt2' onClick={handleButtonClick} className={getButtonClass('bt2')}>Bu Yazarı Seviyorum</button>
          <button id='bt3' onClick={handleButtonClick} className={getButtonClass('bt3')}>Bu Kitabı Seviyorum</button>
        </div>
        <div className='negative-feedback-buttons'>
          <button id='bt4' onClick={handleButtonClick} className={getButtonClass('bt4')}>Bu Türü Sevmiyorum</button>
          <button id='bt5' onClick={handleButtonClick} className={getButtonClass('bt5')}>Bu Yazarı Sevmiyorum</button>
          <button id='bt6' onClick={handleButtonClick} className={getButtonClass('bt6')}>Bu Kitabı Sevmiyorum</button>
        </div>
        <div className='next'>
          <button onClick={submitQuestion} className='btnnext'>İlerle</button>
        </div>
      </div>
    </div>
  )
}

export default Question