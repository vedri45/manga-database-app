import { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';

function App() {
  const [mangaList, SetMangaList] = useState([]);
  const [topManga, SetTopManga] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopManga = async () => {
    const response = await fetch(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
      .then(res => res.json());
    SetTopManga(response.top.slice(0, 5));
  }

  const HandleSearch = e => {
    e.preventDefault();

    FetchManga(search);
    SetSearch('');

    // console.log(search);
  }

  const FetchManga = async (query) => {
    const response = await fetch(`https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=9`)
      .then(res => res.json());

    SetMangaList(response.results);
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
