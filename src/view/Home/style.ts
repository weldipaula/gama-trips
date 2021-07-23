import styled from 'styled-components'

export const Container = styled.div `
  width: 90%;
  margin: auto;
  background: #f5f5f9;

  section {
    display: inline-flex;
    height: 100vh;
    width: 100%;


    .container-products {
      width: 100%;
      margin-top: 3rem;
    }

    .product-content{
      display: flex;
      flex-direction: column;
      text-align: center;
      border-radius: 2rem;
      padding: 0;
      margin: 1rem;
    
      transition: .2s;

      &:hover {
        border: .2rem solid #E55402;
      }
    }

    .product-content img {
      border-radius: 2rem 2rem 0 0;
      width: 100%;
      transition: .2s;


      &:hover {
        border: 1px solid #4faf00;
      }
    }

    .product-span {

      width: 100%;
      border-radius: 2rem;
      display: flex;
      justify-content: flex-end;
      padding-right: 2rem;
      margin-top: -16px;
      
    
      span{
        background: #E55402;
        font-size: .8rem;
        padding: .5rem 1rem;
        font-weight: bold;
        color: #fff;
        border-radius: .8rem;
      }
    }

    .product-name {
      margin-top: 1.5rem;
      line-height: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 1rem;
    }

    .product-description {
      display: flex;
      width: 100%;
      font-size: 0.9rem;

      img {
        width: 0.9rem;
        margin-right: 10px;
      }
    }
  
    .product-price {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 1.5rem;
      padding: 0 1rem;
    
    h4 {
      font-weight: normal;
      font-size: .7rem;
      width: 5rem;
      position: relative;
      text-align: initial;  
    }
    h2 {
      padding-left: 0.3rem;
    }

    h5 {
      font-weight: normal;
    }

    div {
      display: flex;
      align-items: baseline;
      padding: .5rem 0 1rem 0;
    }
    }

    button {
      background: #4faf00 ;
      border-radius: 0 0 2rem 2rem ;
      padding: 1rem 0;
      width: 100%;
      border: none;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;
      
      &:hover{
        filter: brightness(1.2);
      }
    }
  }
`