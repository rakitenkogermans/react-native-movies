import {HomeProps} from './Home.types';
import HomeView from './Home.view';
import {useEffect, useState} from 'react';
import {IGenre} from '../../@types/IGenre';
import {useUserStore} from '../../store/userStore';
import {getGenres} from '../../services/movieService';

const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const name = useUserStore(state => state.name);

  useEffect(() => {
    const fetchData = async () => {
      setGenres(await getGenres());
    };
    fetchData();
  }, []);

  return (
    <HomeView
      genres={genres}
      name={name}
      onGenrePress={(genre: IGenre) =>
        props.navigation.navigate('Genre', {genre: genre})
      }
    />
  );
};

export default Home;
