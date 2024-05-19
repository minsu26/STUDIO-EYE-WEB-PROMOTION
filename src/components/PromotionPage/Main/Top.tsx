import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

import Circle from '../Circle/Circle';

type Props = {
  backgroundImg: string;
};

const Top = ({ backgroundImg }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Background
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: isInView ? 1 : 0.9, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <SloganWrapper
        ref={ref}
        initial={{ opacity: 0, y: '100%', x: '20%', scale: 0.5 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? '140%' : '100%',
          x: isInView ? '-60%' : '20%',
          scale: isInView ? 1 : 0.5,
        }}
        transition={{ duration: 1 }}
      >
        <BackWrapper>New Media Contents Group</BackWrapper>
        <NameWrapper>STUDIO EYE</NameWrapper>
      </SloganWrapper>
    </Background>
  );
};

export default Top;

const Background = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SloganWrapper = styled(motion.div)`
  position: relative;
`;

const BackWrapper = styled.div`
  font-family: 'pretendard-bold';
  position: absolute;
  top: -20px;
  white-space: nowrap;
  font-size: 60px;
  color: rgba(255, 255, 255, 0.3);
`;

const NameWrapper = styled.div`
  font-family: 'pretendard-bold';
  font-size: 100px;
  z-index: 10;
  color: #ffa900;
`;

const CircleWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
`;