import { Link } from "react-router-dom"
import styles from "./Home.module.css"
const Home = () => {

	return (
		<div className={styles.container}>
			<div className={styles.page__style}>

				<h4>css라이브러리 실습</h4>

				<Link to={'/bootstrap'} >ReactBootstrap</Link>
				<br />
				<Link to={'/antd'} >ReactAntd</Link>
				<br />
				<Link to={'/mui'} >ReactMui</Link>
			</div>
		</div>
	)

}

export default Home