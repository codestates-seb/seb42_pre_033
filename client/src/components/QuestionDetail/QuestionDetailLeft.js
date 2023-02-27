import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 2px;
`;

const ItemPadding = css`
  padding: 4px;
`;

const ItemButton = styled.button`
  ${ItemPadding};

  border: 0;
  background-color: unset;
`;

const ItemIcon = styled.svg`
  color: var(--black-200);
`;

const Vote = styled.span`
  color: var(--black-500);
  font-size: 21px;
`;

function QuestionDetailLeft({ vote, onVoteDown, onVoteUp }) {
  return (
    <Container>
      <ItemButton onClick={onVoteUp}>
        <ItemIcon aria-hidden='true' width='36' height='36' viewBox='0 0 36 36'>
          <path fill='currentColor' d='M2 25h32L18 9 2 25Z'></path>
        </ItemIcon>
      </ItemButton>
      <Vote>{vote}</Vote>

      <ItemButton onClick={onVoteDown}>
        <ItemIcon aria-hidden='true' width='36' height='36' viewBox='0 0 36 36'>
          <path fill='currentColor' d='M2 11h32L18 27 2 11Z'></path>
        </ItemIcon>
      </ItemButton>

      <ItemButton>
        <ItemIcon aria-hidden='true' width='18' height='18' viewBox='0 0 18 18'>
          <path
            fill='currentColor'
            d='m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z'
          ></path>
        </ItemIcon>
      </ItemButton>

      <ItemButton>
        <ItemIcon aria-hidden='true' width='19' height='18' viewBox='0 0 19 18'>
          <path
            fill='currentColor'
            d='M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z'
          ></path>
        </ItemIcon>
      </ItemButton>
    </Container>
  );
}

export default QuestionDetailLeft;
