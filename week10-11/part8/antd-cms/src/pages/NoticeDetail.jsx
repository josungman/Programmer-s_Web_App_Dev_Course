import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import ImageUpload from '../components/ImageUpload';
import { useParams } from 'react-router-dom';
import { Button, Flex, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import FileUpload from '../components/FileUpload';

export default function NoticeDetail() {
    const { id } = useParams();
    const isCreate = id === 'create';
    const [formData, setFormData] = useState({
        thumbnail: '',
        title: '',
        content: '',
        file: null,
    });

    const onChangeForm = (name, value) => setFormData({ ...formData, [name]: value });

    const onSubmit = () => {
        const { thumbnail, title, content, file } = formData;
        if (!thumbnail) return message.error('공지사항 썸네일을 등록해주세요.');
        if (!title) return message.error('공지사항 제목을 입력해주세요.');
        if (!content) return message.error('공지사항 내용을 입력홰주세요.');

        console.log('FORMDATA', formData);
    };

    return (
        <article className="content-wrapper notice-detail">
            <PageTitle title="공지사항 상세" />

            <Flex vertical align="start" gap={30} style={{ width: 800 }}>
                <section className="thumbnail-img">
                    <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900 ">
                        공지사항 썸네일
                    </label>
                    <ImageUpload
                        image={formData.thumbnail}
                        handleImage={(value) => onChangeForm('thumbnail', value)}
                        width={320}
                        height={180}
                    />
                </section>

                <section style={{ width: '100%' }}>
                    <label>공지사항 제목</label>
                    <Input
                        value={formData.title}
                        name="title"
                        onChange={(e) => onChangeForm('title', e.target.value)}
                        placeholder="공지사항 제목을 입력해주세요"
                    />
                </section>

                <section style={{ width: '100%' }}>
                    <label>공지사항 내용</label>
                    <TextArea
                        value={formData.content}
                        name="content"
                        onChange={(e) => onChangeForm('content', e.target.value)}
                        placeholder="공지사항 내용을 입력해주세요"
                        style={{ height: 500 }}
                    />
                </section>

                <section>
                    <label>첨부파일</label>

                    <FileUpload file={formData.file} setValue={(value) => onChangeForm('file', value)} />
                </section>

                <Button htmlType="submit" size="large" type="primary" style={{ width: '100%' }} onClick={onSubmit}>
                    {isCreate ? '공지사항 등록하기' : '공지사항 수정하기'}
                </Button>
            </Flex>
        </article>
    );
}
