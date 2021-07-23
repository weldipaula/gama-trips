import styled from "styled-components";

export const HeaderStyle = styled.div`
    height: min(10rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: 
        linear-gradient(to bottom, #61C0F5, #8489FF);
    border-radius: 0 0 2rem 2rem;

    
  
  .logo {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-left: 2rem;
  }

  .logo h3 {
    font-size: 3.4rem;
    color: var(--white);
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
  }

  img {
    width: 3.4rem;
    margin: 0 .5rem;
    background-color: #fff;
    clip-path: circle();    
  }

  .medias {
    display: flex;
    padding-right: 2rem;


  }

  .medias img{
    width: 3.4rem;

  }

`