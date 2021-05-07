import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding: 0;
}
html,body #root {
   
}
body{
   transition: .1s;
   font-family: 'Inter', sans-serif;
   overflow-x: hidden;
   background: #f4f4f4;
}
`;
