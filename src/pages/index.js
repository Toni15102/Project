import Head from 'next/head'
import {useState} from 'react'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({subsets: ['latin']})

const RANDOM_DISPLAY = '220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101'

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [history, setHistory] = useState([]);
  const [pending, setPending] = useState(false);

  const generateNumber = () => {
    setPending(true);
    let random = 0;
    while (random === 0) {
      random = Math.floor(Math.random() * 639);
    }
    const result = Array(Math.max(3 - random.toString().length, 0)).fill(0)
    result.push(random);
    const resultStr = result.join('');

    setTimeout(() => {
      setPending(false)
      setRandomNumber(resultStr);
      setHistory((prev) => [{result: resultStr, time: (new Date()).toLocaleTimeString()}, ...prev])
    }, 5000);
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
          <div className={styles.resultWrapper}>
            <div className={`${styles.result} ${pending ? 'pending' : ''}`}>
              {pending ? RANDOM_DISPLAY : randomNumber}
            </div>
          </div>
          <button className={styles.eventButton} onClick={generateNumber}>Quay Số</button>
          <h2 className={styles.historyTitle}>Danh sách trúng thưởng</h2>
          <ul className={styles.historyArea}>
            {history.map((item) => (<li key={item.result}>
              <strong>{item.result}</strong>
              <span>{item.time}</span>
            </li>))}
          </ul>
        </div>
      </main>
    </>
  )
}
