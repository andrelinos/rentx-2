import React from "react";

import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

import Animated from "react-native-reanimated";

import { Container } from "./styles";

export function Splash() {
  return (
    <Container>
      <Animated.View>
        <BrandSvg  width={80} height={50}/>
      </Animated.View>


      <Animated.View>
        <LogoSvg  width={180} height={20}/>
      </Animated.View>


    </Container>
  );
}
