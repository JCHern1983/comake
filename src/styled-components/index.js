import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 12vh;
    background: #294C60;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center
    box-shadow: 0 5px #B5B682;
    margin-bottom: 5px;
`;

export const OperatorHead = styled.div`
    height: 12vh;
    background: #418771;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center
    box-shadow: 0 5px #418771;
    margin-bottom: 5px;
    padding: 0 2%;
`;

export const Navigation = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    width: 40%;

`;


export const NavLinks = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

export const Links = styled.a`
  color: #033F63;
  text-decoration: none;
  font-size: 1.4rem;
  &:hover {
    color: #FEDC97;
    cursor: pointer;
  }
`;
export const Links2 = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.4rem;
  &:hover {
    color: #FEDC97;
    cursor: pointer;
  }
`;


export const Logo = styled.img`
  width: 175px;
`;

export const HeroTitle = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 3.2rem;
  font-weight: extra-bold;
`;

export const FormContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 5%;
  color: #fff;
`;

export const MenuButton = styled.div`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  color: #fff;
  background: #232429;
  width: 20rem;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const MainPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: url(https://i.ibb.co/tZ1QPcy/food-issue-in-the-street-496731672-863bfb69328341c1804fec18e39be715.jpg)
    rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const MainPageContainer2 = styled.div`
  height: 100vh;
  width: 100%;
  background: url(https://i.ibb.co/tZ1QPcy/food-issue-in-the-street-496731672-863bfb69328341c1804fec18e39be715.jpg)
    rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormLabel = styled.label`
 
  font-size:25px;
  margin: 10px;
  font-family: Nunito Sans
  font-weight: Extra Bold
  color: #232429;
`;
export const FormSpacing = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormSpacing2 = styled.input`
  display: flex;
 margin-left 42%;
 margin-top 2%;
 margin-bottom 2%;
  flex-direction: column;
`;


export const IssueFormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #418771;

  display: flex;
  justify-content: center;
`;
export const InputStyle = styled.input`
  color: #6fb03e;
  max-width: 450px;
  background: #f8f6ee;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #232429;
`;
export const TextArea = styled.textarea`

  color: #6fb03e
  max-width: 450px;
	background: #F8F6EE;
	padding: 10px;
	margin: 5px ;
	box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
	border-radius: 10px;
	border: 6px solid #232429;
`;

export const IssueButton = styled.button`
  background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
  background-color: #f0c911;
  border-radius: 6px;
  border: 1px solid #232429;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #c92200;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ded17c;
`;

export const CardImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const MenuText = styled.p`
  text-align: center;
`;
export const MenuH2 = styled.h2`
  text-align: center;
`;

export const Body = styled.div`
background: #418771;
padding: 10px;
display:flex;
justify-content:center;
flex-direction:column;
`;

export const DinerBody = styled.div`
height: 100vh;
background: #418771;
padding: 10px;
display:flex;
justify-content:center;
flex-direction:column;
`;

export const OperatorBody = styled.div`
background: #E78959;
padding: 10px;
height: 100vh;
`;


export const MyH2 = styled.h2`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold  
 

font-size: 3.6rem; 

 
line-height: 4.4rem;  
text-align: center;
margin: 0 0 12px;
`;
export const MyH3 = styled.h3`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold


font-size: 3.6rem; 
 

line-height: 4.4rem; 
text-align: center;
margin 0 0 12px;
`;

export const OperatorText = styled.p`
color: #fff; 
font-family: 'Droid serif', serif; 
text-decoration: none;
font-size: 3.1rem; 
font-weight: 400; 
font-style: italic; 
line-height: 4.4rem; 
text-align: center;
margin 0 0 12px;
`;

export const CardPic = styled.img`
margin-top: 2%;
margin-bottom: 2%;
max-height: 50vh;
margin-right: 10%;
margin-left: 2%;
width: 40%;
`;

export const CardInfo = styled.div`
    tex-align: left;
    font-family: Nunito Sans
    font-size: 1.4rem;
    font-weight: Extra Bold
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    color: #232429;
`;

export const Card = styled.div`
display: flex;
flex-direction: row;
margin-top: 5px;
background-color: White;
width: 1000px;
height: 50vh;
margin-left: 22%;
border: 3px solid #28666E;
z-index: 1;
`;

export const Card2 = styled.div`
display: flex;
flex-direction: row;
margin-top: 2%;
margin-left: 4%;
background-color: White;
width: 45%;
height: 25vh;
border: 3px solid #28666E;
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding 0 1%;
`;

export const SignupStyle = styled.div`
  background-image: radial-gradient(
      circle at top right,
      #27a5e9,
      transparent 30%
    ),
    radial-gradient(circle at right, #eb52a9, transparent 40%),
    radial-gradient(circle at bottom right, #ffb892, transparent 35%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  h1 {
    margin: 0;
    padding: 4%;
    padding-bottom: 0;
    font-size: 300%;
    font-family: "sarabun", sans-serif;
    font-weight: bold;
    font-style: italic;
  }
  h3 {
    color: black;
    font-size: 200%;
    margin: 0;
    padding: 5%;
  }
  form {
    padding: 10%;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form input {
    margin: 3%;
    border: 2px solid black;
    border-radius: 50px;
    padding: 2%;
  }
  form button {
    margin: 15%;
    border: 2px solid black;
    border-radius: 75px;
    padding: 3% 70%;
    background-color: black;
    color: white;
    font-size: 100%;
    font-family: "Open Sans", sans-serif;
  }
  form button:hover {
    background-color: white;
    color: black;
  }
  a{
    color: dodgerblue;
  }
  a:hover{
    color: gray;
    cursor: pointer;
  }
  .errors {
    color: red;
  }
  @media only screen and (max-width: 600px) {
    background-image: radial-gradient(
        circle at bottom left,
        #27a5e9,
        transparent 30%
      ),
      radial-gradient(circle at bottom, #eb52a9, transparent 40%),
      radial-gradient(circle at bottom right, #ffb892, transparent 35%);
  }
`;
