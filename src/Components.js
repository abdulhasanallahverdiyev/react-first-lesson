import styled,{css} from "styled-components";

export const Title=styled.h1`
font-size:1rem;
font-weight:600;
text-decoration:underline
${props=>props.theme==='dark'&& css`
background:#0f0;
color:#000;
`}
`
// 8/37