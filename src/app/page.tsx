'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const data = {
      from: event.target.from.value,
      to: event.target.to.value,
    }

    console.log(data);
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

      <form onSubmit={handleSubmit}>
      <div className="w-auto my-5">
        <label htmlFor="from" className="block text-xl font-bold">
          From
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="from"
            id="from"
            className="block w-full p-3 rounded-md border-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Starting point"
            aria-describedby="from-description"
            required
          />
        </div>
        <p className="mt-2 text-sm" id="from-description">
          Starting point of your amazing journey
        </p>
      </div>

      <div className="max-w-md w-auto my-5">
        <label htmlFor="to" className="block text-xl font-bold">
          To
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="to"
            id="to"
            className="block w-full p-3 rounded-md border-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Destination"
            aria-describedby="to-description"
            required
          />
        </div>
        <p className="mt-2 text-sm" id="to-description">
          Destination of your amazing journey
        </p>
      </div>
      <button type="submit">Search connections</button>
      </form>

      <div className={styles.center}>

      </div>
    </main>
  )
}
