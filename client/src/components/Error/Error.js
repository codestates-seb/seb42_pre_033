import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
`;

const Message = styled.p`
  font-size: 12px;
  color: var(--red);
`;

function Error({ messages }) {
  return (
    <Container>
      {messages.map((message) => (
        <Message key={message}>{message}</Message>
      ))}
    </Container>
  );
}

export default Error;
