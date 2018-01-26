import { injectGlobal } from 'styled-components';

export default injectGlobal`
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }

  ol, ul {
    padding-left: 30px;
  }

  .status {
    margin-bottom: 10px;
  }

  .kbd-navigation {
    background: #ddd;
  }
`;
