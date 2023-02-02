import { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import axios from 'axios';

function App() {
  const [mangaList, SetMangaList] = useState([]);
  const [topManga, SetTopManga] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopManga = async () => {
    await axios.get(`https://api.jikan.moe/v4/top/manga?filter=bypopularity`)
      .then(async response => {
        SetTopManga(response.data.data);
      });
  }

  const HandleSearch = e => {
    e.preventDefault();

    FetchManga(search);
    SetSearch('');

    // console.log(search);
  }

  const FetchManga = async (query) => {
    await axios.get(`https://api.jikan.moe/v4/manga?q=${query}&order_by=title&sort=asc&limit=9`)
      .then(async response => {
        SetMangaList(response.data.data);
      });
  }

  useEffect(() => {
    GetTopManga();
  }, []);

  return (
    <div className="App">
      <PersistentDrawerLeft
        topManga={topManga} />
      <Content
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        mangaList={mangaList} />
    </div>
  );
}

export default App;
