import { notiState } from '@/recoil/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

type Props = {
  id: string;
  defaultIcon: string;
  isNewIcon?: string; // noti only
  iconStatus?: boolean; // noti only, true-새로운 알림이 있는 상태, false-새로운 알림이 없는 상태
};

const CircleBtn = ({ id, defaultIcon, isNewIcon, iconStatus }: Props) => {
  const [isNotiOpened, setIsNotiOpened] = useRecoilState(notiState);

  const handleNotiButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setIsNotiOpened(!isNotiOpened);
  };

  return (
    <Container>
      {id === 'notification' ? (
        <NotiButton onClick={handleNotiButtonClick}>
          <img src={iconStatus ? isNewIcon : defaultIcon} alt='noti icon' />
        </NotiButton>
      ) : (
        <img src={defaultIcon} alt='user icon' />
      )}
    </Container>
  );
};

export default CircleBtn;

const Container = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  &:hover {
    background-color: #ffefcf;
  }
  transition: all ease-in-out 300ms;
`;

const NotiButton = styled.button`
  border: none;
  background-color: inherit;
`;
