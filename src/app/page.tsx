'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [from, setFrom] = React.useState<string>("");
  const [to, setTo] = React.useState<string>("");

  const handleFromChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to&nbsp;
          <code className={styles.code}>Swiss Travel planner</code>
        </p>
        <div>
          <a
            href="https://anand-creations.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/anand-creations.png"
              alt="Anand Creations"
              className={styles.vercelLogo}
              width={45}
              height={45}
              priority
            />
            Anand Creations
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div>
        
        <label htmlFor="from" className="block text-xl font-bold">
        From
      </label>
          <div className="mt-1">
            <input
              type="text"
              name="from"
              id="from"
              className="block w-full rounded-md border-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Starting point"
              aria-describedby="from-description"
              onChange={handleFromChange}
              value={from}
            />
          </div>
          <p className="mt-2 text-sm" id="from-description">
            Starting point of your amazing journey
          </p>
        </div>
      </div>
    </main>
  )
}
