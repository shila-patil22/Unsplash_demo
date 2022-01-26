import { ChevronLeft, ChevronRight } from 'react-feather';
import './style.css'

export const CustomPagination = ({ setdropdownParam, dropdownParam, setcurrentPage, currentPage, totalPages, maxPageNumberLimit, setmaxPageNumberLimit, minPageNumberLimit, setminPageNumberLimit }) => {

    const itemsPerPage = 10;
    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id))
        setdropdownParam({ ...dropdownParam, page: event.target.id })
    };
    const totalPagesData = new Array(totalPages).fill().map((val, idx) => idx+1)

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);
        setdropdownParam({ ...dropdownParam, page: currentPage + 1 })
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + itemsPerPage);
            setminPageNumberLimit(minPageNumberLimit + itemsPerPage);
        }
    };
    const renderPageNumbers = totalPagesData.length > 0 && totalPagesData?.map((number) => {
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

        if ((currentPage - 1) % itemsPerPage === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - itemsPerPage);
            setminPageNumberLimit(minPageNumberLimit - itemsPerPage);
        }
    };

    let pageIncrementBtn = null;
    if (totalPagesData.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> ... </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> ... </li>;
    }

    return <div>
        <>
            <ul className="page-numbers">
                <li>
                    <button
                        onClick={handlePrevbtn}
                        disabled={currentPage === totalPagesData[0] ? true : false}
                    >
                        <ChevronLeft />
                    </button>

                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    <button
                        onClick={handleNextbtn}
                        disabled={currentPage === totalPagesData[totalPagesData.length - 1] ? true : false}
                    >
                        <ChevronRight />
                    </button>
                </li>
            </ul>
        </>
    </div>;
};

