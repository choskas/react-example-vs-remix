// import logo from '../assets/logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import Loader from '../components/Loader';

function Home({history}) {
  const [cards, setCards] = useState(null);
  const getInfoFromAPI = async () => {
    try {
      const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
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
    <section className='flex flex-wrap justify-center'>
      {cards ? cards.slice(0, 100).map((item) => (
            <div className="m-6 w-[180px]" key={item.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[800px] flex flex-col items-center">
              <img
                className="w-[50%]"
                src={item.card_images[0] && item.card_images[0].image_url}
                alt="card"
              />
              <div className="px-6 py-4 overflow-auto h-[150px]">
                <div className="font-bold text-l mb-2">{item.name}</div>
                <p className="text-gray-700 text-base ">{item.desc}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.archetype}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.race}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
      )) : <Loader />}
</section>
</>
  );
}

export default Home;
