// import logo from '../assets/logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import Loader from '../components/Loader';

function Home({history}) {
    console.log(history)
  const [cards, setCards] = useState(null);
  const getInfoFromAPI = async () => {
    try {
      const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
      console.log(response.data.data);
      setCards(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getInfoFromAPI()
  },[])
  return (
      <>
    <section className='flex flex-wrap'>
      {cards ? cards.slice(0, 100).map((item) => (
        <div className='m-6'>
        <div class="max-w-sm rounded overflow-hidden shadow-lg max-h-[800px]">
          <img class="w-full" src={item.card_images[0] && item.card_images[0].image_url} alt="card" />
          <div class="px-6 py-4 overflow-auto h-[150px]">
            <div class="font-bold text-xl mb-2">{item.name}</div>
            <p class="text-gray-700 text-base ">
              {item.desc}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        </div>
      )) : <Loader />}
</section>
</>
  );
}

export default Home;
