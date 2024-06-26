import React, {useState, useEffect} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {IMovie} from '../../@types/IMovie';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants';
import {ScrollContainer} from '../../containers/ScrollContainer';
import {getMovieByGenreId} from '../../services/movieService';
import {MainStackParamList} from '../../@types/Stacks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useUserStore} from '../../store/userStore';

type GenreProps = NativeStackScreenProps<MainStackParamList, 'Genre'>;
const Genre = (props: GenreProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const favs = useUserStore(state => state.favs);

  useEffect(() => {
    const fetchData = async () => {
      setMovies(await getMovieByGenreId(props.route.params.genre.id));
    };
    if (typeof props.route.params.genre !== 'undefined') {
      fetchData();
    }
  }, [props.route.params.genre]);

  return (
    <ScrollContainer>
      {movies.map(movie => (
        <Pressable
          key={movie.id}
          style={styles.movieTitleContainer}
          onPress={() => props.navigation.navigate('Movie', {movie: movie})}>
          {favs[movie.id] ? (
            <Text style={styles.movieTitleFav}>👍</Text>
          ) : undefined}
          <Text style={styles.movieTitle}>{movie.title}</Text>
        </Pressable>
      ))}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  movieTitleContainer: {
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    flexDirection: 'row',
  },
  movieTitleFav: {
    marginRight: 4,
  },
  movieTitle: {
    fontSize: FontConstants.sizeRegular,
    color: ColorConstants.font,
  },
});

export {Genre};
