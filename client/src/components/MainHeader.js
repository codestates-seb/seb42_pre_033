import styled from 'styled-components';

const Section = styled.div`
  padding-top: 51px;
  width: 727px;

  .main_title {
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    h2 {
      font-size: 1.61538462rem;
    }

    .q_btn {
      width: 103px;
      height: 38px;
      background-color: var(--blue-500);
      color: var(--white);
      border-color: transparent;
      border-radius: 3px;
      padding: 8px;
      font-size: 13px;
    }
    .q_btn:hover {
      background-color: var(--blue-600);
    }
  }
  .data_controller {
    height: 35px;
    display: flex;
    justify-content: start;

    .question_num {
      width: 252px;
      line-height: 33px;
      font-size: 1.15384615rem;
    }
    .cat_nav {
      color: var(--black-500);
      font-size: 12px;
      display: flex;
      flex-direction: row;
      border: 1px solid var(--black-400);
      border-radius: 3px;
      margin-right: 16px;

      div {
        padding: 10px 10.6px;
        line-height: 13px;
        cursor: pointer;
      }

      div:not(:last-child) {
        border-right: 1px solid var(--black-400);
      }
      div:hover {
        background-color: var(--black-025);
      }
      .selected {
        background-color: var(--black-100);
        color: var(--black-700);
      }
      .down_arrow {
        font-size: 10px;
        margin: 0 1px;
      }
    }
  }
  .badge {
    font-size: 11px;
    padding: 0 5px;
    border-radius: 3px;
    background-color: var(--blue-600);
    color: var(--white);
  }
  .filter_btn {
    font-size: 13px;
    background-color: var(--powder-100);
    border: 1px solid var(--powder-500);
    color: var(--powder-800);
    line-height: 30px;
    padding: 0 12px;
    border-radius: 3px;
  }
  .filter_btn:hover {
    background-color: var(--powder-300);
  }
  .filter_icon {
    margin-top: -0.3em;
    margin-bottom: -0.3em;
    opacity: 50%;
  }
`;

function MainHeader() {
  return (
    <Section>
      <div className='main_title'>
        <h2>All Questions</h2>
        <button className='q_btn'>Ask Question</button>
      </div>
      <div className='data_controller'>
        <div className='question_num'>23,505,622 questions</div>
        <div className='cat_nav'>
          <div className='selected'>Newest</div>
          <div>Active</div>
          <div>
            Bountied <span className='badge'> 291</span>
          </div>
          <div>Unanswered</div>
          <div>
            More <span className='down_arrow'>▼</span>
          </div>
        </div>
        <button className='filter_btn'>
          <svg
            aria-hidden='true'
            className='filter_icon'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path d='M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z'></path>
          </svg>
          Filter
        </button>
      </div>
    </Section>
  );
}

export default MainHeader;
