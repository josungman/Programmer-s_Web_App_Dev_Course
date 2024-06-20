import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Flex, Button } from 'antd';

import { ProductStateContext } from '../App';
import { FilterOptionsContext } from '../App';

import styles from './EventByAntd.module.css'
import arrow_left from '../assets/icons/arrow_left.svg'
import share from '../assets/icons/share.svg'

import AntProductList from '../components/AntdProductList';
import EventMainSection from "../components/EventMainSection";

const EventByAntd = () => {

    const dummayproductList = useContext(ProductStateContext)
    const filterOptions = useContext(FilterOptionsContext)

    const [data, setData] = useState([])
    const [currentFilter, setCurrentFilter] = useState("여성의류");

    useEffect(() => {
        const filteredData = dummayproductList.filter((it) => it.type === currentFilter);
        setData(filteredData);
    }, [currentFilter, dummayproductList]);

    const handleCurrnetFilter = (newFilter) =>
        setCurrentFilter(newFilter);

    return (
        < article className="layout">
            <div>
                <div className={styles.page__style}>

                    <Flex justify='space-between' align='center' className={styles.header}>

                        <Link to={"/"}>
                            <button className={styles.header__btn}>
                                <img src={arrow_left} alt="arrow_left" />
                            </button>
                        </Link>

                        <h1 className={styles.header__title}>React Antd</h1>

                        <Link to="/notice">
                            <button className={styles.header__btn}>
                                <img src={share} alt="공유하기" />
                            </button>
                        </Link>


                    </Flex>

                    <EventMainSection />


                    <section>

                        <ul className={styles.filter__list}>
                            {filterOptions.map((filter, idx) => (
                                <li
                                    key={idx}
                                    className={styles.filter__btn}
                                    data-active={currentFilter === filter}
                                    onClick={() => handleCurrnetFilter(filter)}
                                >
                                    {filter}
                                </li>
                            ))}
                        </ul>


                        <div className={styles.top__sales}>
                            <h2>실시간 인기 TOP5</h2>
                            <AntProductList productList={data} />
                            <Button type='primary' block className={styles.show__all__btn}>
                                전체 상품 보기
                            </Button>

                        </div>

                    </section>

                    <section className={styles.coupon__section}>
                        <h2>
                            어디서든 사용 가능한
                            <br />
                            15% 쿠폰을 드려요!
                        </h2>
                        <p>쿠폰 지급 기간 : ~12월 31일까지</p>

                    </section>


                </div>
            </div>
        </article >

    )

}

export default EventByAntd