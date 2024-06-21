import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

export default function CreditCardsDetail() {
    const { id } = useParams();
    const isCreate = id === 'create';

    return (
        <article className="content-wrapper">
            <PageTitle title={isCreate ? '카드 등록하기' : '카드 수정하기'} />
        </article>
    );
}
