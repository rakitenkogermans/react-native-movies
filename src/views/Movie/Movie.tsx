import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {IMovie} from '../../@types/IMovie';
import {FontConstants, ColorConstants} from '../../constants/StyleConstants';
import {ScrollContainer} from '../../containers/ScrollContainer.tsx';
import {BackButton} from '../../components/BackButton/BackButton.tsx';
import {Header} from '../../components/Header/Header.tsx';

interface MovieProps {
  movie: IMovie | undefined;
  backToGenres: () => void;
}

const Movie = (props: MovieProps) => {
  return (
    <ScrollContainer>
      <BackButton onPress={props.backToGenres} text="Back to genres" />
      {props.movie ? (
        <View>
          <Header text={props.movie.title} />
          <Text style={styles.overview}>{props.movie.overview}</Text>
        </View>
      ) : undefined}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  overview: {
    fontSize: FontConstants.sizeRegular,
    color: ColorConstants.font,
  },
});

export {Movie};
