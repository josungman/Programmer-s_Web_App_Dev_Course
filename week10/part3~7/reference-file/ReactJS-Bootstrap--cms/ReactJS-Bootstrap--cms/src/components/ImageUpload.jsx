import { Button, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getPreview } from '../utils/helper';
import { PictureOutlined } from '@ant-design/icons';

export default function ImageUpload({ image, handleImage, max = 5, width, height }) {
    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (image) {
            getPreview(image, (preview) => setPreview(preview));
        }
    }, [image]);

    const beforeUpload = (file) => {
        const isLt5M = file.size / 1024 / 1024 < max;

        if (!isLt5M) {
            message.error(`파일의 용량은 ${max}MB 보다 작아야합니다.`);
            return false;
        }

        if (file) {
            handleImage(file);
        }
        return true;
    };

    const onDelete = () => {
        setPreview('');
        handleImage(null);
    };

    return (
        <div>
            <Upload listType="picture-card" showUploadList={false} beforeUpload={beforeUpload}>
                <div className="upload-interaction">
                    {preview ? (
                        <img
                            src={preview}
                            alt="uploaded"
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                            }}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-2">
                            <PictureOutlined style={{ fontSize: 50, color: '#A8A8A8' }} />
                            <div className="font-semibold text-[13px] text-[#707070]">
                                클릭하여 이미지를 등록할 수 있습니다.
                            </div>
                        </div>
                    )}
                </div>
            </Upload>
            <Button danger type="primary" onClick={onDelete} style={{ width: '100%', marginTop: 18 }}>
                이미지 삭제
            </Button>
        </div>
    );
}
