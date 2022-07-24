import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Card from '../../components/Card';
import Navbar from '../../components/Navbar'

export default function Home() {
  const [data, setData] = useState([]);
  const API_KEY = "73991280e5124b388b6c65cf1cac98c8";
  const URL = "https://newsapi.org/v2/everything?"
  useEffect(() => {
    async function getResults() {
      const results = await axios.get(URL+"q=keyword&apiKey="+API_KEY);
      setData(results.data.articles)
    }
    getResults()
  }, [])
  console.log(data)
  return (
      <div>
        <Navbar />
          <div className='px-20 py-10 flex-wrap lg:flex xl:flex'>
          {
              data.map((item, key) => {
                return (
                  <Card key={key} item={item} />
                )
              })
            }
        </div>
      </div>
  )
}
