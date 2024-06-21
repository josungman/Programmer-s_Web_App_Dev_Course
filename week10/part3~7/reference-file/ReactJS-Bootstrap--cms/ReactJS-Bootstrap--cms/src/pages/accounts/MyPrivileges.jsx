import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { Collapse, DatePicker, Divider, Empty, Flex, Radio, Steps, Switch, Tabs } from 'antd';
const { RangePicker } = DatePicker;
const items = [
    {
        key: '1',
        label: '권한 옵션 1',
    },
    {
        key: '2',
        label: '권한 옵션 2',
    },
    {
        key: '3',
        label: '권한 옵션 3',
    },
];

export default function MyPrivileges() {
    const [currentTab, setCurrentTab] = useState('1');

    const onChange = (activeKey) => setCurrentTab(activeKey);
    return (
        <article className="content-wrapper">
            <PageTitle title="권한 설정" />
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

            {currentTab === '1' && (
                <section>
                    <Flex vertical gap={20}>
                        <Flex gap={10} align="center">
                            <Switch />
                            권한 옵션 활성화
                        </Flex>

                        <Collapse
                            items={[
                                {
                                    key: '1',
                                    label: '권한 세부 옵션 1',
                                    children: (
                                        <div>
                                            <Flex vertical>
                                                <p>등급 선택</p>
                                                <Radio.Group>
                                                    <Radio value={1}>A</Radio>
                                                    <Radio value={2}>B</Radio>
                                                    <Radio value={3}>C</Radio>
                                                    <Radio value={4}>D</Radio>
                                                </Radio.Group>
                                            </Flex>
                                            <Flex vertical>
                                                <p>활성 기간</p>
                                                <RangePicker />
                                            </Flex>
                                        </div>
                                    ),
                                },
                            ]}
                        />

                        <Collapse
                            items={[
                                {
                                    key: '1',
                                    label: '권한 세부 옵션 2',
                                    children: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                        found as a welcome guest in many households across the world.`,
                                },
                            ]}
                        />
                        <Collapse
                            items={[
                                {
                                    key: '1',
                                    label: '권한 세부 옵션 3',
                                    children: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                        found as a welcome guest in many households across the world.`,
                                },
                            ]}
                        />

                        <Collapse
                            items={[
                                {
                                    key: '1',
                                    label: '권한 세부 옵션 4',
                                    children: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                        found as a welcome guest in many households across the world.`,
                                },
                            ]}
                        />
                    </Flex>
                </section>
            )}
            {currentTab === '2' && (
                <section>
                    <p>권한 옵션 설정 진행중</p>
                    <Steps
                        current={1}
                        status="error"
                        items={[
                            {
                                title: 'Finished',
                                description: 'This is a descriptio',
                            },
                            {
                                title: 'In Process',
                                description: 'This is a descriptio',
                            },
                            {
                                title: 'Waiting',
                                description: 'This is a descriptio',
                            },
                        ]}
                    />
                </section>
            )}
            {currentTab === '3' && (
                <section>
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60 }}
                        description={
                            <span>
                                설정된 <a>권한 옵션</a>이 없습니다.
                            </span>
                        }
                    ></Empty>
                </section>
            )}
        </article>
    );
}
