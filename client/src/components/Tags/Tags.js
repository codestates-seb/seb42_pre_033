import styled from 'styled-components';
import Button from '../UI/Button';

const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

const Tag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
`;

const TagButton = styled(Button)`
  display: inline-block;
  padding: 4.8px 6px;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  border: 1px solid transparent;
  height: unset;
`;

function Tags({ tags }) {
  return (
    <TagList>
      {tags.map(({ tag, url }) => (
        <Tag key={tag}>
          <TagButton variant='filter' href={url} tag='a'>
            {tag}
          </TagButton>
        </Tag>
      ))}
    </TagList>
  );
}

export default Tags;
