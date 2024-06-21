import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { useParams } from 'react-router-dom';
import ImageUpload from '../../components/ImageUpload';
import { Button, DatePicker, Flex, Input, Space, Switch, message } from 'antd';

export default function PopupDetail() {
    const { id } = useParams();
    const isCreate = id === 'create';
    const [formData, setFormData] = useState({
        popupImg: '',
        visible: false,
        startDate: undefined,
        endDate: undefined,
        link: '',
    });

    const onChangeForm = (name, value) => setFormData({ ...formData, [name]: value });

    const onSubmit = () => {
        const { popupImg, visible, startDate, endDate, link } = formData;
        if (!popupImg) return message.error('팝업 이미지를 등록해주세요.');
        if (!startDate) return message.error('팝업 시작일자를 선택해주세요.');
        if (!endDate) return message.error('팝업 종료일자를 선택해주세요.');
        if (!link) return message.error('팝업 링크를 입력해주세요.');

        console.log('FORMDATA', formData);
    };

    return (
        <article className="content-wrapper popup-detail">
            <PageTitle title={isCreate ? '팝업 등록하기' : '팝업 수정하기'} />

            <div style={{ maxWidth: 850, margin: '0 auto' }}>
                <Flex vertical align="start" gap={30}>
                    <section className="popup-img">
                        <label>팝업 이미지</label>
                        <ImageUpload
                            image={formData.popupImg}
                            handleImage={(value) => onChangeForm('popup', value)}
                            width={375}
                            height={450}
                        />
                    </section>

                    <section>
                        <label>팝업 노출여부</label>
                        <Switch onChange={(value) => onChangeForm('visible', value)} checked={formData.visible} />
                    </section>

                    <Flex gap={10} align="center">
                        <section>
                            <label>팝업 시작날짜</label>
                            <DatePicker
                                format={'YYYY.MM.DD HH:mm'}
                                value={formData.startDate}
                                onOk={(value) => onChangeForm('startDate', value)}
                                onChange={(value) => onChangeForm('startDate', value)}
                                showTime={{
                                    minuteStep: 30,
                                }}
                            />
                        </section>

                        <section>
                            <label style={{ opacity: 0 }}>~</label>
                            <p style={{ margin: 0 }}>~</p>
                        </section>

                        <section>
                            <label>팝업 종료날짜</label>
                            <DatePicker
                                format={'YYYY.MM.DD HH:mm'}
                                value={formData.endDate}
                                onOk={(value) => onChangeForm('endDate', value)}
                                onChange={(value) => onChangeForm('endDate', value)}
                                showTime={{
                                    minuteStep: 30,
                                }}
                            />
                        </section>
                    </Flex>

                    <section style={{ width: '100%' }}>
                        <label>팝업 링크</label>
                        <Input
                            value={formData.link}
                            name="link"
                            onChange={(e) => onChangeForm('link', e.target.value)}
                            placeholder="팝업 링크를 입력해주세요"
                        />
                    </section>

                    <Button htmlType="submit" size="large" type="primary" style={{ width: '100%' }} onClick={onSubmit}>
                        {isCreate ? '팝업 등록하기' : '팝업 수정하기'}
                    </Button>
                </Flex>
            </div>
        </article>
    );
}
