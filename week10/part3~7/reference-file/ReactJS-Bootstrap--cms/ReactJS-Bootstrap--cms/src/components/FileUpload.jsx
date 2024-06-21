import { useRef } from 'react';
import { Button, Flex, message } from 'antd';
import { CloseOutlined, FolderOpenOutlined, PlusOutlined } from '@ant-design/icons';
import { fileSizeValidation } from '../utils/helper';

export default function FileUpload({
    file,
    setValue,
    onDeleteValue,
    singleLimit = 100,
    hasError,
    eventState = false,
    disabled,
}) {
    const fileRef = useRef(null);

    const eventPass = () => fileRef.current && fileRef.current.click();

    const onChange = (e) => {
        const { files } = e.target;
        if (!files) return;

        const newFile = files.item(0);

        if (!newFile) return;

        if (fileSizeValidation(newFile.size, 'MB', singleLimit))
            return message.error({ content: `파일 크기는 최대 ${singleLimit}MB까지 가능합니다.` });

        setValue(newFile);

        e.target.value = '';
    };

    const onDelete = (e) => {
        e.stopPropagation();
        setValue(new File([], ''));
        onDeleteValue && onDeleteValue();
    };

    return (
        <Flex gap={18} align="center">
            <div onClick={eventPass}>
                {file?.size ? (
                    <Flex gap={10} align="center">
                        <Flex gap={10} align="center">
                            <FolderOpenOutlined />
                            <p className="fs-15 fw-400 fileName">{file?.name}</p>
                        </Flex>
                        <Button icon={<CloseOutlined />} size="small" onClick={onDelete} disabled={eventState} />
                    </Flex>
                ) : typeof file === 'string' ? (
                    <Flex>
                        <Flex gap={10} align="center">
                            <FolderOpenOutlined />
                            <p className="fs-15 fw-400 fileName">{file}</p>
                        </Flex>
                        <Button icon={<CloseOutlined />} size="small" onClick={onDelete} disabled={eventState} />
                    </Flex>
                ) : (
                    <p className="fs-15 gray4">업로드 된 파일이 없어요.</p>
                )}
            </div>

            {!disabled && (
                <div>
                    <Button onClick={eventPass}>파일 업로드</Button>
                    <input
                        disabled={eventState}
                        type="file"
                        ref={fileRef}
                        onChange={onChange}
                        style={{ display: 'none' }}
                    />
                </div>
            )}
        </Flex>
    );
}

// const fileUploadWrapper = css`
//     display: flex;
//     gap: 16px;

//     .file-list {
//         cursor: pointer;
//         transition: all 0.2s;
//         box-sizing: border-box;
//         background: #ffffff;
//         border: 1px solid #d9d9d9;
//         border-radius: 2px;
//         width: 272px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         padding: 4px 11px;
//         font-weight: 400;
//         font-size: 15px;
//         line-height: 18px;
//         gap: 17px;
//         border-radius: 6px;
//         box-sizing: border-box;
//     }

//     .file-list:hover {
//         border: 1px solid ${primary};
//     }
//     .fileName {
//         width: 180px;
//         overflow: hidden;
//         text-overflow: ellipsis;
//         white-space: nowrap;
//     }

//     input {
//         display: none;
//     }
// `;
