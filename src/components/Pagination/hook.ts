import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../../store/actions/pagination';
import {PaginationProps} from './dataTypes';

function useContainer({visiblePagesCount = 5}: PaginationProps) {
  const dispatch = useDispatch();
  const [pages, setPages] = useState<number[]>([]);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const {currentPage, totalPages} = useSelector(
    (state: any) => state.pagination,
  );

  useEffect(() => {
    const penultimate = Math.floor(totalPages / visiblePagesCount) * visiblePagesCount;

    setNextDisabled(currentPage > penultimate);
    setPrevDisabled(currentPage <= visiblePagesCount);

    buildPagesList();
  }, [currentPage, totalPages]);

  const buildPagesList = () => {
    let arr: any[] = [];

    const lastPage = Math.ceil(currentPage / visiblePagesCount) * visiblePagesCount;

    for (let i = lastPage; i > lastPage - visiblePagesCount; i--) {
      i < totalPages && arr.unshift(i);
    }

    setPages(arr);
  };

  const handlePageClick = useCallback((page: number) => {
    dispatch(setCurrentPage(page));
  }, []);

  const handlePrev = () => {
    const page = currentPage - ((currentPage % visiblePagesCount) + visiblePagesCount);

    dispatch(setCurrentPage(page + 1));
  };

  const handleNext = () => {
    const page = Math.ceil(currentPage / visiblePagesCount) * visiblePagesCount + 1;

    dispatch(setCurrentPage(page));
  };

  return {
    pages,
    currentPage,
    prevDisabled,
    nextDisabled,
    handlePrev,
    handleNext,
    handlePageClick,
  };
}

export default useContainer;
