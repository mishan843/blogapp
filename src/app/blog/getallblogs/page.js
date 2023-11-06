"use client"

import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import { useSearchParams } from 'next/navigation'


const Page = () => {

  const searchParams = useSearchParams()
  const search = searchParams.get('categoryFilter')

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{search} Blog</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

export default Page
