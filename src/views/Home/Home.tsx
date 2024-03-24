import {getGenres} from '../../services/movieService';
import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {IGenre} from '../../@types/IGenre';
import {ScrollContainer} from '../../containers/ScrollContainer.tsx';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/Stacks';
import {useUser} from '../../context/UserContext.tsx';

type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const {name} = useUser();

  useEffect(() => {
    setGenres(getGenres());
  }, []);

  console.log('rerender home');
  return (
    <ScrollContainer>
      <Text style={styles.welcome}>Hello {name}</Text>
      {genres.map(genre => {
        return (
          <Pressable
            onPress={() => props.navigation.navigate('Genre', {genre: genre})}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  welcome: {
    color: ColorConstants.font,
    fontSize: FontConstants.sizeTitle,
    fontWeight: FontConstants.weightBold,
    marginBottom: SizeConstants.paddingRegular,
  },
  genreTitle: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    color: ColorConstants.font,
  },
});

export {Home};
