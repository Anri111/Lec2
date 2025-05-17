
import './App.css'
import Avatar from './components/Avatar'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  

  return (
   <div>

    <Avatar 
    src = {"https://eu-cdn.rugbypass.com/webp-images/wp/wp-content/uploads/2024/09/GettyImages-2162750472.jpg.webp?maxw=950&comp=60"}
    userName={"Davit Niniashvili"}
    
    />

     <Header />
    <h1>Hello world</h1>

    

    <Card title="anri" content="anris uyvars rugby"/>
     <Card  title={"giorgi"} content={"telefoni dade"} />
      
   </div>
  
  )
}

export default App
