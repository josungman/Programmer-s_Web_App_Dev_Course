import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';
import PageTitle from '../../components/PageTitle';
import useTableSearch from '../../hooks/useTableSearch';

const tempData = new Array(100).fill(0).map((e, i) => ({
    index: i + 1,
    holder: i % 2 ? 'john' : 'jane',
    cardName: `credit card ${i + 1}`,
    type: i % 2 ? 'VISA' : 'MASTER',
}));
export default function CreditCards() {
    const getColumnSearchProps = useTableSearch();

    const columns = [
        {
            title: 'No.',
            dataIndex: 'index',
            key: 'index',
            render: (value, record) => (
                <Link to={`${record.newsId}`}>
                    <p>{value}</p>
                </Link>
            ),
            align: 'center',
        },
        {
            title: '카드 소유자',
            dataIndex: 'holder',
            key: 'holder',
            render: (value, record) => (
                <Link to={`${record.index}`}>
                    <p>{value}</p>
                </Link>
            ),
            align: 'center',
        },
        {
            title: '카드 이름',
            dataIndex: 'cardName',
            key: 'cardName',
            ...getColumnSearchProps('cardName'),
            render: (_, record) => (
                <Link to={`${record.index}`}>
                    <p>{record.cardName}</p>
                </Link>
            ),
        },
        {
            title: '카드 종류',
            dataIndex: 'type',
            key: 'type',
            render: (value, record) => (
                <Link to={`${record.index}`}>
                    <p>{value}</p>
                </Link>
            ),
        },
    ];

    return (
        <article>
            <PageTitle
                title="카드 관리"
                desc="카드를 관리할 수 있는 페이지입니다."
                addonBtn={
                    <Link to="create">
                        <Button type="primary" size="large">
                            카드 등록
                        </Button>
                    </Link>
                }
            />
            <Table
                dataSource={tempData}
                columns={columns}
                pagination={{
                    position: ['bottomCenter'],
                    showSizeChanger: false,
                }}
            />
        </article>
    );
}
