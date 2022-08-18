import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import Loader from "../components/Loader";

const Card = () => {
  const params = useParams();
  const [cardInfo, setCardInfo] = useState(null);
  const [error, setError] = useState(null);
  const getCardInfo = async () => {
    try {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${params.cardName}`
      );
      setCardInfo(response.data.data[0]);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setCardInfo(null);
    }
  };

  const getComponent = () => {
    let component = <div />;
    switch (true) {
      case cardInfo && !error:
        component = (
          <div className="flex justify-center">
            <div className="m-6" key={cardInfo.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-[800px]">
                <img
                  className="w-full"
                  src={
                    cardInfo.card_images[0] && cardInfo.card_images[0].image_url
                  }
                  alt="card"
                />
                <div className="px-6 py-4 overflow-auto h-[150px]">
                  <div className="font-bold text-xl mb-2">{cardInfo.name}</div>
                  <p className="text-gray-700 text-base ">{cardInfo.desc}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {cardInfo.archetype}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {cardInfo.race}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {cardInfo.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case error && !cardInfo:
        component = <div className="flex justify-center ">
          <p className='text-red-700'>{error}</p></div>;
        break;
      case !cardInfo && !error:
        component = <Loader />;
        break;
      default:
        component = <div />;
        break;
    }

    return component;
  };

  useEffect(() => {
    getCardInfo();
  }, []);
  return getComponent()
};

export default Card;
