import { Divider, Flex } from 'antd';
import styles from './PageTitle.module.css';

export default function PageTitle({ title, desc, addonBtn, noUnderline = false }) {
    if (addonBtn) {
        return (
            <div>
                <Flex justify="space-between">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2 className={styles.h2_text}>{title}</h2>
                        <h3 className={styles.h3_text}>{desc}</h3>
                    </div>
                    {addonBtn}
                </Flex>
                {!noUnderline && <Divider />}
            </div>
        );
    }
    return (
        <div>
            <h2 className={styles.h2_text}>{title}</h2>
            <h3 className={styles.h3_text}>{desc}</h3>
            {!noUnderline && <Divider />}
        </div>
    );
}
