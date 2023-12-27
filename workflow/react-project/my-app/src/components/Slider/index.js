import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from './styled';

const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
  };

  return (
    <S.Slider>
      <SlickSlider {...settings}>
        <S.Text>
          <p>Everybody should believe in something. I believe I’ll have another drink.</p>
        </S.Text>
        <S.Text>
          <p>“I’m on a whisky diet. I’ve lost three days already.” — Tommy Cooper</p>
        </S.Text>
        <S.Text>
          <p>Alcohol is like magic. After three glasses of wine, you start speaking a foreign language - and genuinely believe you're a great linguist.</p>
        </S.Text>
        <S.Text>
          <p>Alcohol is like magic. After three glasses of wine, you start speaking a foreign language - and genuinely believe you're a great linguist.</p>
        </S.Text>
        <S.Text>
          <p>When life gives you lemons, I make margaritas. Sometimes I add salt - for balance.</p>
        </S.Text>
      </SlickSlider>
    </S.Slider>
  );
}

export default Slider;