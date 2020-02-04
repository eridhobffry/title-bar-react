import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #00f;
  overflow: hidden;
  padding: 1em;
  border-bottom: 1px solid #000;

  a {
    color: white;

    :visited {
      color: white;
    }
  }

  .navNarrow {
    #icon-bar {
      float: left;
      cursor: pointer;
      color: #fff;
    }

    .navNarrowLinks {
      display: none;

      a {
        text-decoration: none;
        display: block;
        float: left;
        clear: left;
        padding: 0.5em 0;
      }
    }
  }

  .navWide {
    display: none;
    margin: 0 auto;

    .wideDiv {
      text-align: center;

      a {
        text-decoration: none;
        display: inline-block;
        padding: 0 2em;
      }
    }
  }

  @media (min-width: 480px) {
    .navWide {
      display: block;
    }
    .navNarrow {
      display: none;
    }
  }
`;
