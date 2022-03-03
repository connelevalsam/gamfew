import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
      <div className={styles.home}>
        <h2>Welcome to GamFew</h2>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti rem aspernatur odit hic autem neque repellat alias? Debitis veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor id.</p>
        </div>
      </div>
    </>
  )
}
