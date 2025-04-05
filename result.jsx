import React from 'react'
import Card from '../src/components/Card.jsx'
import bookData from '../src/bookdata.jsx'
import PageContainer from './container/PageContainer'

function Result({ pyazarlar, nyazarlar, pturler, nturler, sorulanlar }) {
    sorulanlar = sorulanlar.map(element => element + 1);
    sorulanlar.map(sorulan => {
        console.log(sorulan)
    }
    )
    const bookScores = bookData.reduce((acc, book) => {
        acc[book.id] = { book, score: 0 }
        return acc
    }, {})


    bookData.forEach(book => {
        console.log("book id: " + book.id);
        let kesildi = sorulanlar.some(sorulan => {
            if (sorulan == book.id) {
                console.log("kesildi" + sorulan);
                return true; // Döngüyü kırar
            }
        });
        if (kesildi) return;
        console.log("işlendi")
        if (pturler.includes(book.tur)) {
            bookScores[book.id].score += 1
        }
        if (pyazarlar.includes(book.yazar)) {
            bookScores[book.id].score += 1
        }
        if (nturler.includes(book.tur)) {
            bookScores[book.id].score -= 1
        }
        if (nyazarlar.includes(book.yazar)) {
            bookScores[book.id].score -= 1
        }
    })


    const sortedBooks = Object.values(bookScores)
        .sort((a, b) => b.score - a.score)

    const topBooks = sortedBooks.filter(item => item.score === sortedBooks[0]?.score)
    const recommendedBook = topBooks.length > 0 ? topBooks[Math.floor(Math.random() * topBooks.length)].book : null

    return (
        <PageContainer>
            <div>
                {recommendedBook ? (
                    <>
                        <h2>Size şu kitabı önerebilirim:</h2>
                        <Card book={recommendedBook} />
                    </>
                ) : (
                    <div>Önerilecek kitap bulunamadı.</div>
                )}
            </div>
            <p>
                this is a basic ui project. so we don't actually recommend that book. :)
            </p>
        </PageContainer>
    )
}

export default Result