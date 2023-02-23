import { BLOGS, COLLETIVE } from '../components/layout/RightAside/Dumy';
import RightAside from '../components/layout/RightAside/RightAside';
import RightAsideCollectivesItem from '../components/layout/RightAside/RightAsideCollectivesItem';
import RightAsideItem from '../components/layout/RightAside/RightAsideItem';
import styled from 'styled-components';

const RightBLog = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
`;

function AsideRight() {
  return (
    <aside>
      <RightBLog>
        {BLOGS.map(({ title, contentList }) => (
          <RightAside key={title} color='yellow' title={title}>
            {contentList.map(({ icon, content, subcontent }) => (
              <RightAsideItem
                key={content}
                icon={icon}
                content={content}
                subcontent={subcontent}
              />
            ))}
          </RightAside>
        ))}
      </RightBLog>
      {COLLETIVE.map(({ title, companyList }) => (
        <RightAside
          key={title}
          color='gray'
          title={title}
          headbuttonText='see all'
        >
          {companyList.map(({ icon, company, descrition, members }) => (
            <RightAsideCollectivesItem
              key={company}
              icon={icon}
              company={company}
              descrition={descrition}
              members={members}
            />
          ))}
        </RightAside>
      ))}
    </aside>
  );
}

export default AsideRight;
