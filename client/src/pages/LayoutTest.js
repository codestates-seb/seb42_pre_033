import { DUMY, DUMY2 } from '../components/layout/RightAside/Dumy';
import RightAside from '../components/layout/RightAside/RightAside';
import RightAsideCollectivesItem from '../components/layout/RightAside/RightAsideCollectivesItem';
import RightAsideItem from '../components/layout/RightAside/RightAsideItem';
import Button from '../components/UI/Button';

function LayoutTest() {
  return (
    <div>
      {DUMY.map(({ title, contentList }) => (
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

      {DUMY2.map(({ title, companyList }) => (
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

      <Button variant='primary'> primary</Button>
      <Button variant='secondary'> secondary</Button>
      <Button variant='tertiary'> tertiary</Button>
      <Button variant='text'> text</Button>
    </div>
  );
}

export default LayoutTest;
