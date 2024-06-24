import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import PageTitle from "../../components/PageTitle";
import useTableSearch from "../../hooks/useTableSearch";
import { random } from "../../utils/helper";
import dayjs from "dayjs";

export const status = ["Success", "Rejected", "Pending"];

const tempData = new Array(100).fill(0).map((e, i) => ({
  index: i + 1,
  detail: `Transactions ${i + 1}`,
  type: i % 2 ? "Debit" : "credit",
  balance: 1000 * i,
  status: status[random(0, 2)],
  createdAt: dayjs().add(i - 1, "day"),
}));
export default function Transactions() {
  const getColumnSearchProps = useTableSearch();

  const getStatusColor = (status) => {
    if (status === "Success") return "#0EAD69";
    if (status === "Rejected") return "#C10B0E";
    if (status === "Pending") return "#0978F2";
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "index",
      key: "index",
      render: (value, record) => (
        <Link to={`${record.newsId}`}>
          <p>{value}</p>
        </Link>
      ),
      align: "center",
    },
    {
      title: "결제 일자",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value, record) => (
        <Link to={`${record.index}`}>
          <p>{dayjs(value).format("YYYY.MM.DD HH:mm:ss")}</p>
        </Link>
      ),
    },
    {
      title: "결제 내역",
      dataIndex: "detail",
      key: "detail",
      render: (value, record) => (
        <Link to={`${record.index}`}>
          <p>{value}</p>
        </Link>
      ),
      align: "center",
      ...getColumnSearchProps("detail"),
      render: (_, record) => (
        <Link to={`${record.index}`}>
          <p>{record.detail}</p>
        </Link>
      ),
    },
    {
      title: "카드 타입",
      dataIndex: "type",
      key: "type",

      filters: [
        {
          text: "Debit",
          value: "Debit",
        },
        {
          text: "credit",
          value: "credit",
        },
      ],
      onFilter: (value, record) => {
        return record.type === value;
      },
    },
    {
      title: "결제 금액",
      dataIndex: "balance",
      key: "balance",
      render: (value, record) => (
        <Link to={`${record.index}`}>
          <p>$ {value.toLocaleString()}</p>
        </Link>
      ),
      sorter: (a, b) => a.balance - b.balance,
    },
    {
      title: "결제 상태",
      dataIndex: "status",
      key: "status",
      render: (value, record) => (
        <Link to={`${record.index}`}>
          <p
            style={{
              color: `${getStatusColor(value)}`,
              fontWeight: 500,
            }}
          >
            {value}
          </p>
        </Link>
      ),
      filters: [
        {
          text: "Success",
          value: "Success",
        },
        {
          text: "Rejected",
          value: "Rejected",
        },
        {
          text: "Pending",
          value: "Pending",
        },
      ],
      onFilter: (value, record) => {
        return record.status === value;
      },
    },
  ];

  return (
    <article>
      <PageTitle
        title="결제 관리"
        desc="결제 내역을 확인할 수 있는 페이지입니다."
        // addonBtn={
        //     <Link to="create">
        //         <Button type="primary" size="large">
        //             결제 직접 등록
        //         </Button>
        //     </Link>
        // }
      />
      <Table
        dataSource={tempData}
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: false,
        }}
      />
    </article>
  );
}
