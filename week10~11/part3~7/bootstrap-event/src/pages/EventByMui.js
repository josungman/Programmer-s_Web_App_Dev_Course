import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import styles from './EventByMui.module.css'

import { ChevronLeft } from "@mui/icons-material";
import { FileUpload } from "@mui/icons-material";

import { ProductStateContext } from "../App";
import { FilterOptionsContext } from '../App';

import EventMainSection from "../components/EventMainSection";
import MuiProductList from "../components/MuiProductList";


const EventByMui = () => {

    const dummayproductList = useContext(ProductStateContext)
    const filterOptions = useContext(FilterOptionsContext)

    const [data, setData] = useState([])
    const [currentFilter, setCurrentFilter] = useState("여성의류");

    useEffect(() => {
        const filteredData = dummayproductList.filter((it) => it.type === currentFilter);
        setData(filteredData);
    }, [currentFilter, dummayproductList]);

    // useEffect(() => {
    //     console.log('data : ', data);  // 상태 업데이트 후 로그
    // }, [data]);

    const handleCurrnetFilter = (newFilter) => {
        setCurrentFilter(newFilter);
    }
    return (
        < article className="layout">
            <div>
                <div className={styles.page__style}>

                    <Stack justifyContent="space-between" alignItems='center' direction="row" className={styles.header}>

                        <Link to={"/"}>
                            <button className={styles.header__btn}>
                                <ChevronLeft style={{ color: '#000000' }} />
                            </button>
                        </Link>

                        <h1 className={styles.header__title}>크리스마스 특별할인</h1>

                        <Link to="/notice">
                            <button className={styles.header__btn}>
                                <FileUpload style={{ color: '#383838' }} />
                            </button>
                        </Link>


                    </Stack>

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
                            <MuiProductList productList={data} />
                            <Button type='primary' className={styles.show__all__btn}>
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

export default EventByMui