import React, { useEffect, useState } from 'react'
import PageContainer from './container/PageContainer'
import Question from './components/Question'
import bookData from './bookdata'
import Result from './result.jsx'
import './css/app.css'

function App() {
  const [randomBook, setRandomBook] = useState(null)
  const [questionCount, setQuestionCount] = useState(0)
  const [pyazarlar, setpyazarlar] = useState([])
  const [nyazarlar, setnyazarlar] = useState([])
  const [pturler, setpturler] = useState([])
  const [nturler, setnturler] = useState([])
  const [sorulanlar, setsorulanlar] = useState([])

  const selectRandomBook = () => {
    if (questionCount > 3) {
      return
    }
    let sayi = Math.floor(Math.random() * bookData.length);
    while (sorulanlar.includes(sayi)) {
      sayi = Math.floor(Math.random() * bookData.length)
    }

    const book = bookData[sayi];
    setRandomBook(book);
    if(sorulanlar.length<3)
    {
      setsorulanlar([...sorulanlar, book.id - 1])
    }
    setQuestionCount(questionCount + 1)
  }
  useEffect(() => {
    selectRandomBook()
  }, [])
  if (questionCount > 3) {
    return <Result pyazarlar={pyazarlar} nyazarlar={nyazarlar} pturler={pturler} nturler={nturler} sorulanlar={sorulanlar}/>
  }
  if (!randomBook) {
    return <div>Loading...</div>
  }
  return (
    <PageContainer>
      <div className='main-container'>
        <Question
          book={randomBook}
          onNext={selectRandomBook}
          setpyazarlar={setpyazarlar}
          setnyazarlar={setnyazarlar}
          setpturler={setpturler}
          setnturler={setnturler}
        />
      </div>
    </PageContainer>
  )
}

export default App