import { Card } from "antd";
import styles from '../pages/EventByBootstrap.module.css'


const AntProductList = ({ productList = [] }) => {

    return (
        <div className={styles.top__sales_list}>
            {productList.map((e, i) => (
                <Card key={i}
                    cover={<img src={e.img} className={styles.product__image} />}
                    style={{ minWidth: 240, borderRadius: 16 }}>

                    <div className={styles.product}>
                        <div className={styles.content}>
                            <div>
                                <p>{e.type}</p>
                                <h3>{e.productName}</h3>
                            </div>
                            <div className={styles.price__layout}>
                                <p className={styles.percent}>{e.precent}%</p>
                                <p className={styles.price}>{e.price.toLocaleString()}원</p>
                            </div>
                        </div>
                    </div>

                </Card>
            ))}
        </div>
    )

}

export default AntProductList