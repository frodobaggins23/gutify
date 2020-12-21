import Head from 'next/head'
import RecordData from '../components/record-data'
import styles from '../styles/Home.module.css'

export default function Home() {
	console.log('test:', process.env.TEST)
	return <RecordData />
}
