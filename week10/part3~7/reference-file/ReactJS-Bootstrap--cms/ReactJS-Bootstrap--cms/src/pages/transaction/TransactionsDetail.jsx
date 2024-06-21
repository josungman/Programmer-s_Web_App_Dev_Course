import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import { Badge, Descriptions } from 'antd';
import { status } from './Transactions';
import { random } from '../../utils/helper';

const badgeStats = {
    Success: 'success',
    Rejected: 'error',
    Pending: 'processing',
};
const items = [
    {
        key: '1',
        label: '결제 내역',
        children: 'Cloud Database',
    },
    {
        key: '2',
        label: '카드 타입',
        children: 'Credit',
    },
    {
        key: '3',
        label: 'Automatic Renewal',
        children: 'YES',
    },
    {
        key: '4',
        label: '주문 일자',
        children: '2018-04-24 18:00:00',
    },
    {
        key: '5',
        label: '승인 일자',
        span: 2,
        children: '2019-04-24 18:00:00',
    },
    {
        key: '6',
        label: '결제 상태',
        span: 3,
        children: <Badge status={badgeStats[status[random(0, 2)]]} text={status[random(0, 2)]} />,
    },
    {
        key: '7',
        label: '총 금액',
        children: '$80.00',
    },
    {
        key: '8',
        label: '할인 금액',
        children: '$20.00',
    },
    {
        key: '9',
        label: '결제 금액',
        children: '$60.00',
    },
    {
        key: '10',
        label: '추가 결제 정보',
        children: (
            <>
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />
            </>
        ),
    },
];

export default function TransactionsDetail() {
    const { id } = useParams();
    const isCreate = id === 'create';

    return (
        <article className="content-wrapper">
            <PageTitle title="결제 내역" />
            <Descriptions title="결제 상세 내역" layout="vertical" bordered items={items} />
        </article>
    );
}
