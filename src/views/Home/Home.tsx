import {getGenres} from '../../services/movieService';
import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {IGenre} from '../../@types/IGenre';
import {Header} from '../../components/Header/Header';
import {ScrollContainer} from '../../containers/ScrollContainer.tsx';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants.ts';

interface HomeProps {
  chooseGenre: (genre: IGenre) => void;
}
const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    setGenres(getGenres());
  }, []);

  return (
    <ScrollContainer>
      <Header text="Movie Genres" />
      {genres.map(genre => {
        return (
          <Pressable onPress={() => props.chooseGenre(genre)}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  genreTitle: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    color: ColorConstants.font,
  },
});

export {Home};
