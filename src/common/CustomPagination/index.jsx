import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import './style.css'

export const CustomPagination = ({ dataCount, setdropdownParam, dropdownParam }) => {
    const [currentPage, setcurrentPage] = useState(1);
    const itemsPerPage = 10;
    const pageNumberLimit = 10;
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
        setdropdownParam({ ...dropdownParam, page: currentPage })
    };
    console.log(currentPage,"onclick");
    const pages = [];
    for (let i = 1; i <= Math.ceil(dataCount / itemsPerPage); i++) {
        pages.push(i);
    }
    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);
        setdropdownParam({ ...dropdownParam, page: currentPage + 1 })
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    console.log(currentPage,"arrowo");
    const renderPageNumbers = pages.length > 0 && pages?.map((number,id) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        }
    });

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);
        setdropdownParam({ ...dropdownParam, page: currentPage - 1 })

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> ... </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> ... </li>;
    }

    return <div>

        <>

            <ul className="pageNumbers">
                <li>
                    <ChevronLeft onClick={handlePrevbtn}
                        disabled={currentPage === pages[0] ? true : false} />

                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    <ChevronRight
                        onClick={handleNextbtn}
                        disabled={currentPage === pages[pages.length - 1] ? true : false}
                    />
                </li>
            </ul>
        </>
    </div>;
};

