import styled from 'styled-components';

const Name = styled.h2`
  font-size: 2.07692308rem;
`;

const Title = styled.h3`
  font-size: 1.46153846rem;
  color: var(--black-500);
  padding: 8px 0 4px;
`;
const RowWrapper = styled.ul`
  width: 510px;
  font-size: 13px;
  color: var(--black-500);
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  margin-left: -1px;
`;
const Icon = styled.svg`
  margin-right: 5px;
  vertical-align: -4px;
`;
const Member = styled.li`
  display: flex;
  align-items: center;
  padding-right: 4px;
`;
const Seen = styled.li`
  display: flex;
  align-items: center;
  padding-right: 4px;
`;
const Visited = styled.li`
  display: flex;
  align-items: center;
`;
const Location = styled.li`
  font-size: 13px;
  color: var(--black-500);
`;
function UserInfos({ users }) {
  return (
    <section>
      {users.map(
        ({ name, id, title, member, seen, visited, consecutive, location }) => (
          <div key={id}>
            <Name>{name}</Name>
            <Title>{title}</Title>
            <RowWrapper>
              <Member>
                <Icon
                  fill='var(--black-500'
                  aria-hidden='true'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                >
                  <path d='M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z'></path>
                </Icon>
                Member for {member} days
              </Member>
              <Seen>
                <Icon
                  fill='var(--black-500'
                  aria-hidden='true'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                >
                  <path d='M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8Zm0-2c3.27 0 6-2.73 6-6s-2.73-6-6-6-6 2.73-6 6 2.73 6 6 6ZM8 5h1.01L9 9.36l3.22 2.1-.6.93L8 10V5Z'></path>
                </Icon>
                Last seen in {seen}
              </Seen>
              <Visited>
                <Icon
                  fill='var(--black-500'
                  aria-hidden='true'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                >
                  <path d='M14 2h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h1V0h2v2h6V0h2v2ZM3 6v9h12V6H3Zm2 2h2v2H5V8Zm0 3h2v2H5v-2Zm3 0h2v2H8v-2Zm3 0h2v2h-2v-2Zm0-3h2v2h-2V8ZM8 8h2v2H8V8Z'></path>
                </Icon>
                Visited {visited} days, {consecutive} consecutive
              </Visited>
            </RowWrapper>
            <Location>
              <Icon
                fill='var(--black-500'
                aria-hidden='true'
                width='17'
                height='18'
                viewBox='0 0 17 18'
              >
                <path d='M2 6.38C2 9.91 8.1 17.7 8.1 17.7c.22.29.58.29.8 0 0 0 6.1-7.8 6.1-11.32A6.44 6.44 0 0 0 8.5 0 6.44 6.44 0 0 0 2 6.38Zm9.25.12a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z'></path>
              </Icon>
              {location}
            </Location>
          </div>
        ),
      )}
    </section>
  );
}

export default UserInfos;
