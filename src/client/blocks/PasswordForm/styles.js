import styled from 'styled-components';

const WrappedForm = styled.div`
  margin: 0;
  position: absolute;
  top: ${props => props.theme.spacingUnit}%;
  left: ${props => props.theme.spacingUnit * 2}%;
  width: ${props => props.theme.width}%;
  @media only screen and (max-width: 600px) {
    width: ${props => props.theme.width * 5}%;
    left: 0;
    padding: ${props => props.theme.spacingUnit}px;
  }
`;
export default WrappedForm;
