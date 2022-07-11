import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

   const indexChanged = useRef((info: ChangeImageProps) => {
   const index = info.viewableItems[0].index!;
    setImageIndex(info.viewableItems[0].index!);
  });

  return (
    <Container>
      <ImageIndexes>
        {
        imagesUrl.map((item, index) => (
          <ImageIndex 
          active={index === imageIndex} 
          key={String(index)} 
          />
        ))
        }

      </ImageIndexes>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        data={imagesUrl}
        keyExtractor={(key) => key}
       
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        
      />
    </Container>
  );
}
