import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  max-width: 210px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2d394a;
  cursor: pointer;
`;

export const CardImageContainer = styled.img`
  width: 100%;
  height: 78%;
  object-fit: cover;
  object-position: top;
`;

export const FooterOverlay = styled.div`
  padding: 4px 20px;
  color: #fff;
`;

export const MovieTitle = styled.h5`
  line-height: 17px;
  margin: 0px 0px 6px 0px;
`;
