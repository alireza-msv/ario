// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: pink;
  padding: 0;
`;

const App: React.FC = () => (
  <div>
    <Div>
      TEST
    </Div>
  </div>
);

export default App;
