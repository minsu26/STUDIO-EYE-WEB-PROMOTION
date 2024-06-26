import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { theme } from '@/styles/theme';
import { PP_ROUTES_CHILD } from '@/constants/routerConstants';

export const ARTWORK_CATECORY = {
  ALL: 'All',
  ENTERTAINMENT: 'Entertainment',
  DRAMA: 'Drama',
  DOCUMENTARY: 'Documentary',
  CHANNEL_OPERATING: 'Channel Operating',
  BRANDED: 'Branded',
  MOTION_GRAPHIC: 'Motion Graphic',
  ANIMATION: 'Animation',
  LIVE_COMMERCE: 'Live Commerce',
};

export const artwork_categories = [
  { key: 0, label: ARTWORK_CATECORY.ALL },
  { key: 1, label: ARTWORK_CATECORY.ENTERTAINMENT },
  { key: 2, label: ARTWORK_CATECORY.DRAMA },
  { key: 3, label: ARTWORK_CATECORY.DOCUMENTARY },
  { key: 4, label: ARTWORK_CATECORY.CHANNEL_OPERATING },
  { key: 5, label: ARTWORK_CATECORY.BRANDED },
  { key: 6, label: ARTWORK_CATECORY.MOTION_GRAPHIC },
  { key: 7, label: ARTWORK_CATECORY.ANIMATION },
  { key: 8, label: ARTWORK_CATECORY.LIVE_COMMERCE },
];

function Navigation() {
  const navigator = useNavigate();
  const location = useLocation();
  const categoryId = new URLSearchParams(location.search).get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [refresh, setRefresh] = useState(1);
  const handleRefresh = () => {
    setRefresh(refresh * -1);
  };

  useEffect(() => {
    if (categoryId === null) {
      setSelectedCategory(ARTWORK_CATECORY.ALL);
    }
  }, [categoryId, refresh]);

  return (
    <CategoryBar>
      <CategoryItem
        onClick={() => {
          navigator(`/${PP_ROUTES_CHILD.ARTWORK}`);
          setSelectedCategory(artwork_categories[0].label);
          handleRefresh();
        }}
        selected={selectedCategory === artwork_categories[0].label && categoryId !== null + '' ? true : false}
      >
        <span>{artwork_categories[0].label}</span>
      </CategoryItem>

      {artwork_categories.slice(1).map((category) => (
        <CategoryItem
          key={category.key}
          onClick={() => {
            navigator(`?category=${category.key}`);
            setSelectedCategory(category.label);
            handleRefresh();
          }}
          selected={categoryId === category.key + '' ? true : false}
        >
          <span>{category.label}</span>
        </CategoryItem>
      ))}
    </CategoryBar>
  );
}

export default Navigation;

const CategoryBar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  align-self: flex-start;
  top: 80px;
  left: 30px;
  margin-bottom: 80px;
  width: 300px;
  height: max-content;
  padding-left: 40px;
  color: ${(props) => props.theme.color.black.light};
`;

const CategoryItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  padding-top: 23px;

  span {
    display: inline-block;
    font-weight: 200;
    font-size: 23px;
    font-family: ${(props) => props.theme.font.light};

    color: ${({ selected }) => (selected ? theme.color.white.bold : 'none')};
    border-bottom: 1.5px solid ${({ selected }) => (selected ? theme.color.white.bold : 'none')};
    transition: color 0.3s;
  }

  span:hover {
    color: ${(props) => props.theme.color.white.bold};
  }
`;
