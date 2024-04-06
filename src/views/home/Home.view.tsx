import {Pressable, Text} from 'react-native';

import {HomeViewProps} from './Home.types';
import styles from './Home.styles';
import {ScrollContainer} from '../../containers/ScrollContainer.tsx';

const HomeView = (props: HomeViewProps) => {
  return (
    <ScrollContainer>
      <Text style={styles.welcome}>Hello {props.name}</Text>
      {props.genres.map(genre => {
        return (
          <Pressable key={genre.name} onPress={() => props.onGenrePress(genre)}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

export default HomeView;
