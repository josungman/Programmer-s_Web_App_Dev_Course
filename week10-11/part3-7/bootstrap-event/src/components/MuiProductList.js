import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";

import styles from '../pages/EventByMui.module.css'

const MuiProductList = ({ productList = [] }) => {

    return (
        <Stack spacing={'16px'} className={styles.top__sales_list} direction="row">
            {productList.map((e, i) => (
                <Card key={i} sx={{ minWidth: 240, borderRadius: '16px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={e.img}
                            alt="product"
                            className={styles.product__image}
                        />

                        <CardContent style={{ padding: 0 }}>
                            <div className={styles.product}>
                                <Stack className={styles.content}
                                    spacing={'8px'}
                                    alignItems="flex-start"
                                >
                                    <div >
                                        <div>
                                            <p>{e.type}</p>
                                            <h3>{e.productName}</h3>
                                        </div>
                                        <div className={styles.price__layout}>
                                            <p className={styles.percent}>{e.precent}%</p>
                                            <p className={styles.price}>{e.price.toLocaleString()}원</p>
                                        </div>
                                    </div>
                                </Stack>
                            </div>

                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Stack>
    )

}

export default MuiProductList