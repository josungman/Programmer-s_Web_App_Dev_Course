import { Divider, Flex } from "antd";
import styles from "./PageTitle.module.css";

const PageTitle = ({ title, desc, addBtn }) => {
  return (
    <div>
      <Flex justify="space-between">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 className={styles.h2_text}>{title}</h2>
          <h2 className={styles.h3_text}>{desc}</h2>
        </div>
        {addBtn}
      </Flex>
      <Divider />
    </div>
  );
};

export default PageTitle;
