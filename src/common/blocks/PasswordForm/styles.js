import styled from 'styled-components';

const WrappedForm = styled.div`
  margin: 0;
  position: absolute;
  top: 20%;
  left: 40%;
  width: 20%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    left: 0;
  }
`;
export default WrappedForm;
