import styled from "styled-components";
import { GrDocumentPdf } from 'react-icons/gr'


export const ButtonCV = styled.a`
  position: fixed;
  bottom: 1em;
  right: 1em;
  /* display: ${({ none }) => (none === "none" ? "none" : "block")}; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.color};
  border: none;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  z-index: 1000;
  &:focus{
    outline: none;
  }
`;
export const IconTheme = styled(GrDocumentPdf)`
    font-size: 1.1rem;
    color: #ffffff !important;
`;
export const Download = styled.p`
    position: fixed;
    bottom: 4em;
    right: 1em;
    font-size: .8rem;
    color: ${p => p.theme.color};
`;