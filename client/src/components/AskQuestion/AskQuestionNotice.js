import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  gap: 16px;
  padding: 24px;
  background: rgb(235, 244, 251);
  border-color: rgb(166, 206, 237);
  color: var(--_no-fc);
  border-style: solid;
  font-size: var(--fs-body1);
  border-radius: var(--br-sm);
  border-width: var(--su-static1);
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 21px;
`;

const Content = styled.p`
  font-size: 15px;
`;

const ContentLink = styled.a`
  color: var(--blue-600);
  cursor: pointer;
`;

const StepTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
`;

const Steps = styled.ul`
  list-style-type: disc;
  margin-left: 30px;
`;

const Step = styled.li`
  font-size: 13px;
`;

const STEP = [
  'Summarize your problem in a one-line title.',
  'Describe your problem in more detail.',
  'Describe what you tried and what you expected to happen.',
  'Add “tags” which help surface your question to members of the community.',
  'Review your question and post it to the site.',
];

function AskQuetionNotice() {
  return (
    <Container>
      <Title>Writing a good question</Title>
      <Content>
        You’re ready to{' '}
        <ContentLink href='https://stackoverflow.com/help/how-to-ask'>
          ask
        </ContentLink>{' '}
        a{' '}
        <ContentLink href='https://stackoverflow.com/help/on-topic'>
          programming-related question
        </ContentLink>{' '}
        and this form will help guide you through the process. Looking to ask a
        non-programming question? See{' '}
        <ContentLink href='https://stackexchange.com/sites#technology-traffic'>
          the topics here
        </ContentLink>{' '}
        to find a relevant site.
      </Content>
      <StepTitle>Steps</StepTitle>
      <Steps>
        {STEP.map((step) => (
          <Step key={step}>{step}</Step>
        ))}
      </Steps>
    </Container>
  );
}

export default AskQuetionNotice;
