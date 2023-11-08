"use client"

import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import { useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams()
  const search = `${searchParams.get('categoryFilter')}`
  const getColors = (name) => {
    switch (name) {
      case 'Finance':
        return styles.finance
        break;
      case 'Coding':
        return styles.coding
        break;
      case 'Travel':
        return styles.travel
        break;
        case 'Food':
        return styles.food
        break;
        case 'Fashion':
        return styles.fashion
        break;
      default:
        return styles.style
        break;
    }
  }
  const categoryColor = getColors(`${search}`);  
  return (
    <div className={styles.container}>
        <h1 className={`${styles.title} ${categoryColor}`}>{search} Blog</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

export default Page
