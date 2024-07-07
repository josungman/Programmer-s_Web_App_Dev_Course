import { Button, Flex, Table } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import useTableSearch from '../hooks/useTableSearch';
import PageTitle from '../components/PageTitle';

const data = [
    {
        id: 1,
        title: 'Hermannsburg Airport',
        file: 'CumSociis.xls',
        createdDate: '1/29/2024',
    },
    {
        id: 2,
        title: 'In Salah Airport',
        file: 'SapienDignissimVestibulum.mov',
        createdDate: '1/24/2024',
    },
    {
        id: 3,
        title: 'Wexford County Airport',
        file: 'ArcuSed.avi',
        createdDate: '9/7/2023',
    },
    {
        id: 4,
        title: 'St Leonard Airport',
        file: 'LeoRhoncusSed.avi',
        createdDate: '8/9/2023',
    },
    {
        id: 5,
        title: 'Silva Bay Seaplane Base',
        file: 'Faucibus.mov',
        createdDate: '6/30/2023',
    },
    {
        id: 6,
        title: 'Devi Ahilyabai Holkar Airport',
        file: 'IdLobortisConvallis.pdf',
        createdDate: '8/13/2023',
    },
    {
        id: 7,
        title: 'Biratnagar Airport',
        file: 'JustoLaciniaEget.mov',
        createdDate: '3/29/2024',
    },
    {
        id: 8,
        title: 'Brigadier Antonio Parodi Airport',
        file: 'Volutpat.xls',
        createdDate: '1/17/2024',
    },
    {
        id: 9,
        title: 'Oxnard Airport',
        file: 'SociisNatoquePenatibus.mp3',
        createdDate: '2/4/2024',
    },
    {
        id: 10,
        title: 'Williams Lake Airport',
        file: 'AtVulputateVitae.jpeg',
        createdDate: '5/2/2024',
    },
    {
        id: 11,
        title: 'Avignon-Caumont Airport',
        file: 'DonecPosuere.mp3',
        createdDate: '4/28/2024',
    },
    {
        id: 12,
        title: 'Bapi Airstrip',
        file: 'InSapien.avi',
        createdDate: '11/29/2023',
    },
    {
        id: 13,
        title: 'Green River Airport',
        file: 'UtEratCurabitur.ppt',
        createdDate: '3/4/2024',
    },
    {
        id: 14,
        title: 'Rimatara Airport',
        file: 'NuncVestibulum.mp3',
        createdDate: '6/17/2023',
    },
    {
        id: 15,
        title: 'Blissville Airport',
        file: 'Nunc.ppt',
        createdDate: '9/9/2023',
    },
    {
        id: 16,
        title: 'Dornoch Airfield',
        file: 'JustoMorbi.xls',
        createdDate: '5/8/2024',
    },
    {
        id: 17,
        title: 'Shiraz Shahid Dastghaib International Airport',
        file: 'Penatibus.avi',
        createdDate: '8/30/2023',
    },
    {
        id: 18,
        title: 'Gunnedah Airport',
        file: 'Pede.avi',
        createdDate: '12/23/2023',
    },
    {
        id: 19,
        title: 'San Matías Airport',
        file: 'NuncViverra.png',
        createdDate: '7/16/2023',
    },
    {
        id: 20,
        title: 'Cat Lake Airport',
        file: 'NonummyIntegerNon.avi',
        createdDate: '10/6/2023',
    },
];

export default function Notice() {
    const getColumnSearchProps = useTableSearch();

    const columns = [
        {
            align: 'center',
            title: '번호',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            ...getColumnSearchProps('title'),
            render: (value, row) => (
                <Link to={`${row.id}`}>
                    <p>{value}</p>
                </Link>
            ),
        },
        {
            title: '첨부파일',
            dataIndex: 'file',
            key: 'file',
            render: (value, row) => (
                <Link to={`${row.id}`}>
                    <Flex gap={8}>
                        <FolderOpenOutlined />
                        {value}
                    </Flex>
                </Link>
            ),
            width: 200,
        },
        {
            align: 'center',
            title: '등록일',
            dataIndex: 'createdDate',
            key: 'createdDate',
            render: (value, row) => (
                <Link to={`${row.id}`}>
                    <p>{dayjs(value).format('YYYY.MM.DD')}</p>
                </Link>
            ),
            sorter: (a, b) => dayjs(a.createdDate).unix() - dayjs(b.createdDate).unix(),
            width: 100,
        },
    ];

    return (
        <article>
            <PageTitle
                title="공지사항"
                desc="공지사항를 관리할 수 있는 페이지입니다."
                addonBtn={
                    <Link to="create">
                        <Button type="primary" size="large">
                            공지사항 등록하기
                        </Button>
                    </Link>
                }
            />
            <div>
                <Table
                    dataSource={data}
                    columns={columns}
                    pagination={{
                        position: ['bottomCenter'],
                        showSizeChanger: false,
                    }}
                />
            </div>
        </article>
    );
}
