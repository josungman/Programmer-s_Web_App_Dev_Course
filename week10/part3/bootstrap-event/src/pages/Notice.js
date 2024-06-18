import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap"
import styles from '../pages/Notice.module.css'
import { Button } from "react-bootstrap"

const Notice = () => {

    const navigate = useNavigate()

    return (

        <div style={{ padding: '8px 16px' }}>
            <Form.Control
                placeholder="답글을 입력해주세요."
                style={{ background: '#F6F6F6' }}
                className={styles.comment__input__field}
            />
            <Button onClick={() => navigate("/")} >뒤로가기</Button>
        </div>
    )


}

export default Notice