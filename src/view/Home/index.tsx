import React, {useState, useEffect} from 'react';
import { Container } from './style';
import Header from '../../components/Header';
import api from '../../services/api'
import airplane from '../../assets/airplane.svg'


interface Product {
  id: number,
  photo: string,
  description: string,
  price: number,
  name: string
}

interface Car {

  id: number,
  name: string,
  price: number,
}

const Home: React.FC = () => {

  const [data, setData] = useState<Product[]>([])
  const [ car, setCar ] = useState<Car[]>([])
  const [ total, setTotal ] = useState<number>(0)

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  },[])

  useEffect (() => {
    localStorage.setItem(
      'carrinho',
      JSON.stringify(car)
    )
  }, [car])
  
  const handleCar = (index: number, response: Car) => {
    const product = {
      id: index,
      name: response.name,
      price: response.price
    }

    setCar([...car, product ])
    
    const productStorage = JSON.stringify(data[index])
    const productCar = JSON.stringify(car)

    localStorage.setItem('carrinho',`${productCar}`)
  }

  return (

    <Container>
      <Header/>
      <section>
        {data.map((product, index) => (
          <div className='container-products'>
            <div className='product-content' key={product.id}>
              <img src={product.photo} alt={product.name} width='250px'/>
              <div className='product-span'>
                <span>Pacote</span>
              </div>
              <div className='product-name'>
                <h4>{product.name}</h4>
                <div className='product-description'>
                  <img src={airplane} alt="" /> 
                  <span>{product.description}</span>
                </div>
              </div>
              <div className='product-price'>
                <h4>Pacotes a partir de</h4>
                <div>
                 <h5>R$</h5>
                 <h2>{product.price}</h2>
                </div>
              </div>
              <button onClick={() => {
                handleCar(index,product)}} >Eu quero!</button>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;