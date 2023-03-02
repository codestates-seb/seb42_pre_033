import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import styled, { css } from 'styled-components';

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  padding: 16px;
`;

const Button = styled.button`
  color: ${({ selected }) => (selected ? 'var(--white)' : 'hsl(210,8%,25%);')};
  width: 100%;
  height: 100%;

  font-size: 12px;
  font-weight: normal;
  background-color: ${({ selected }) =>
    selected ? 'var(--orange-400)' : '#fff'};

  border-radius: 3px;
  border: none;

  ${({ selected }) => {
    if (!selected) {
      return css`
        border: 1px solid var(--black-100);

        &:hover {
          background-color: #ccc;
        }
        &:active {
          opacity: 0.8;
        }
      `;
    } else {
      return css`
        cursor: unset;
      `;
    }
  }}
`;

const PaginationItem = styled.li`
  width: 24px;
  height: 27px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const PaginationItemList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
`;

function Pagination({
  count,
  page,
  onPageChange,
  limite = 10,
  displayPageLimit = 5,
}) {
  const totalPageCount = Math.ceil(count / limite);
  const startPageNumber =
    page - (page % displayPageLimit || displayPageLimit) + 1;
  let endPageNumber = startPageNumber + displayPageLimit;

  if (endPageNumber > totalPageCount) {
    endPageNumber = totalPageCount;
  }

  const pageCount = endPageNumber - startPageNumber + 1;

  const items = Array.from(Array(pageCount), (_, index) => index + 1);

  console.log(startPageNumber, endPageNumber, totalPageCount, count, items);
  const handleClick = (event) => {
    const $li = event.target.closest('li');

    console.log($li);
    if (!$li) {
      return;
    }

    const { page } = event.target.dataset;
    console.log('page: ', page);
    if (page === 'prev' && page > 1) {
      onPageChange(page - 1);
    }

    if (page === 'next' && page < totalPageCount) {
      onPageChange(page + 1);
    }

    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  return (
    <Navigation>
      <PaginationItemList onClick={handleClick}>
        <PaginationItem>
          <GrFormPrevious data-page='prev' />
        </PaginationItem>
        {items.map((item) => (
          <PaginationItem key={item}>
            <Button
              disabled={item === page}
              data-page={item}
              selected={item === page}
            >
              {item}
            </Button>
          </PaginationItem>
        ))}
        <PaginationItem>
          <GrFormNext data-page='prev' />
        </PaginationItem>
      </PaginationItemList>
    </Navigation>
  );
}

export default Pagination;
