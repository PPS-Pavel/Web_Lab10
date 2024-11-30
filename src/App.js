import AddImg from "./components/AddImg";
import "./App.css" 
import img1 from "./img/f3.png" 
import img2 from "./img/f4.png" 
import img3 from "./img/f5.png" 


function App() {
  return (
    <>
    <div class = "offer_title">
    <h1>Что вам необходимо?</h1>
      <div class = 'blocks'>
        <AddImg title = 'Первый блок'  img = {img1} text = 'Этот текст первого блока...'/>
        <AddImg title = 'Второй блок'  img = {img2} text = 'Этот текст второго блока...'/>
        <AddImg title = 'Третий блок'  img = {img3} text = 'Этот текст третьего блока...'/>
      </div>
    </div>
    </>
  );
}

export default App;
