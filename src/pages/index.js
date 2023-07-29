import Head from 'next/head'
import {useState} from 'react'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [history, setHistory] = useState([]);

  const generateNumber = () => {
    let random = 0;
    while (random === 0) {
      random = Math.floor(Math.random() * 500);
    }
    const result = Array(Math.max(3 - random.toString().length, 0)).fill(0)
    result.push(random);
    const resultStr = result.join('');
    setRandomNumber(resultStr);
    setHistory((prev) => [...prev, resultStr])
  }

  return (
    <>
      <Head>
        <title>Hữu Tài Wedding</title>
        <meta name="description" content="Lễ cưới Tài - Trúc"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={`${styles.container} ${inter.className}`}>
        <div className={styles.box}>
          <h1 className={styles.mainTitle}>Bốc thăm trúng thưởng</h1>
          <div className={styles.result}>
            {randomNumber}
          </div>
          <button className={styles.eventButton} onClick={generateNumber}>Quay Số</button>
          <h2 className={styles.historyTitle}>Danh sách trúng thưởng</h2>
          <div className={styles.historyArea}>
            {history.map((item) => (<p id={item}>{item}</p>))}
          </div>
        </div>
      </main>
    </>
  )
}
