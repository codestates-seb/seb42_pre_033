import styled from 'styled-components';

const Container = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 4px;
`;

const Title = styled.h2`
  flex: 1 1 0;
  font-weight: 400;
  line-height: 1.3;
  font-size: 19px;
`;

const FilterLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  vertical-align: baseline;
  font-size: 12px;
`;

const FilterLabel = styled.label``;

const FilterInitBution = styled.button`
  border: 0;
  background-color: unset;
  color: var(--blue-600);
`;

const Filter = styled.select`
  border: 1px solid var(--black-200);
  border-radius: 3px;
  background-color: var(--white);
  outline: 0;
  font-size: 13px;
  font-family: inherit;
  color: var(--black);
  line-height: 15px;
`;

const FilterOption = styled.option``;

function QuestionDeatilAnswerHeader({
  AnswerConunt,
  defaultValue,
  value,
  onChange,
}) {
  const handleChange = (event) => {
    const selectedValue = event.target.value;

    onChange(selectedValue);
  };

  const handleInitClick = () => {
    onChange(defaultValue);
  };

  return (
    <Container>
      <Title>{AnswerConunt} Answer</Title>
      <FilterLabelContainer>
        <FilterLabel>Sorted by:</FilterLabel>
        <FilterInitBution onClick={handleInitClick}>
          Reset to default
        </FilterInitBution>
      </FilterLabelContainer>
      <Filter value={value} onChange={handleChange}>
        <FilterOption value='scoredesc'>Highest score (default)</FilterOption>
        <FilterOption value='trending'>
          Trending (recent votes count more)
        </FilterOption>
        <FilterOption value='modifieddesc'>
          Date modified (newest first)
        </FilterOption>
        <FilterOption value='createdasc'>
          Date created (oldest first)
        </FilterOption>
      </Filter>
    </Container>
  );
}

export default QuestionDeatilAnswerHeader;
