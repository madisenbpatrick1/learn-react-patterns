// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
 import CondRenderHome from './components/condRender/condRenderHome'
import CondeRenderHome from './solncomps/condRenderRefactored/condRenderHome2'
import TemperatureConverter from './components/temperature'
import ProductList from './components/sortProducts/product'

export default function Home() {
  return (
    <CondeRenderHome />
  )
}
