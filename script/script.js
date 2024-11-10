function init() {
  const input = document.querySelector('#resize-container__input');
  const inputHeight = input.getBoundingClientRect().height;
  document.documentElement.style.setProperty(
    '--input-height',
    `${inputHeight / 16}rem`
  );

  const slider = document.querySelector('#slider');
  // 슬라이더의 초기 값을 1600px로 설정
  if (slider) {
    slider.value = 1600; // 초기값을 1600으로 설정
    document.documentElement.style.setProperty(
      '--width',
      `${slider.value / 16}rem`
    );
  }

  slider.addEventListener('input', (e) => {
    const value = e.target.value;
    // 슬라이더 값에 맞는 스타일 적용
    document.documentElement.style.setProperty(
      '--width',
      `${value / 16}rem`
    );
    applyResponsiveStyles(value); // 슬라이더 값에 맞는 스타일 적용
  });

  // 슬라이더 값에 따른 초기 스타일 적용
  if (slider && slider.value) {
    applyResponsiveStyles(slider.value); // 초기 스타일 적용
  }
}

function applyResponsiveStyles(widthValue) {
  const root = document.querySelector("#root");
  const poster4Container = document.querySelector(".poster4-container");
  const poster4Main = document.querySelector(".poster4-main");
  const poster4MainLeft = document.querySelector(".poster4-main-left");
  const poster4MainRight = document.querySelector(".poster4-main-right");
  const poster4MainYellow = document.querySelector(".poster4-main-yellow");
  const mainH1_1 = document.querySelector(".main-h1-1");
  const mainH1_2 = document.querySelector(".main-h1-2");
  const mainSub1 = document.querySelector(".main-sub-1");
  // const mainSub2 = document.querySelector(".main-sub-2");
  const poster4Footer = document.querySelector(".poster4-footer");
  const poster4FooterCenter = document.querySelector(".poster4-footer-center");

  if (widthValue >= 1200 && widthValue < 1600) {
    // 1200px 이상 1600px 미만일 때 스타일 적용
    poster4Container.style.minHeight = "100vh";
    poster4Container.style.display = "flex";
    poster4Container.style.justifyContent = "space-between";
    poster4Container.style.flexDirection = "column";
    poster4Main.style.display = "flex";
    poster4MainLeft.style.boxSizing = "border-box";
    poster4MainLeft.style.height = "75vh";
    poster4MainLeft.style.padding = "42px";
    poster4MainLeft.style.width = "70%";
    poster4MainLeft.style.backgroundImage = "url('./assets/BgEffect.png')";
    poster4MainLeft.style.backgroundBlendMode = "color-dodge"; // 컬러 닷지 효과
    
    poster4MainLeft.style.backgroundPosition = "bottom";
    poster4MainLeft.style.backgroundSize = "100%";
    poster4MainLeft.style.backgroundColor = "#0F9968";
    poster4MainLeft.style.backgroundRepeat = "no-repeat";
    poster4MainLeft.style.boxShadow = "3px 1px 4px 0px rgba(0, 0, 0, 0.7)";
    poster4MainLeft.style.zIndex = "10";
    mainH1_1.style.fontSize = "clamp(1rem, 9vh, 130px)";
    mainH1_1.style.fontWeight = "900";
    mainH1_1.style.lineHeight = "1.2"; // 행간 설정
    mainH1_1.style.letterSpacing = "-0.2em"; // 자간 설정
    mainH1_2.style.display = "none";
    poster4MainRight.style.width = "30%";
    poster4MainRight.style.height = "100%";
    poster4MainYellow.style.boxSizing = "border-box";
    poster4MainYellow.style.fontSize = "clamp(1rem, 7vh, 76px)";
    poster4MainYellow.style.backgroundColor = "#E7E514";
    poster4MainYellow.style.fontWeight = "700";
    poster4MainYellow.style.padding = "36px";
    poster4MainYellow.style.boxShadow = "3px 1px 4px 0px rgba(0, 0, 0, 0.7)";
    const poster4MainP = document.querySelector(".poster4-main-p");
    if (poster4MainP) {
      poster4MainP.style.padding = "36px";
      poster4MainP.style.fontWeight = "700";
      poster4MainP.style.fontSize = "clamp(10px, 2vh, 18px)";
    }
    mainSub1.style.display = "none";
    mainSub2.style.display = "none";
    poster4Footer.style.fontSize = "clamp(1rem, 2vh, 24px)";
    poster4Footer.style.fontWeight = "700";
    poster4Footer.style.display = "flex";
    poster4Footer.style.justifyContent = "space-between";
    poster4Footer.style.padding = "0 40px 30px 40px";
    poster4FooterCenter.style.margin = "0 10px";
  } else if (widthValue >= 800 && widthValue < 1200) {
    // 800px 이상 1200px 미만일 때 스타일 적용
    root.style.backgroundImage = "url('../assets/Bg2.jpg')";
    mainH1_1.style.display = "none";
    mainH1_2.style.display = "block";
    mainH1_2.style.fontSize = `clamp(1rem, 6vh, 140px)`;
    mainH1_2.style.lineHeight = "1.2"; // 행간 설정
    mainH1_2.style.letterSpacing = "-0.15em"; // 자간 설정
    mainSub1.style.display = "block";
    mainSub1.style.fontSize = `clamp(1rem, 4vh, 70px)`;
    mainSub1.style.fontWeight = "700";
    poster4MainYellow.style.display = "none";
    poster4Footer.style.justifyContent = "space-between";

  } else if (widthValue >= 450 && widthValue < 800) {
    // 420px 이상 800px 미만일 때 스타일 적용
    root.style.backgroundImage = "url('../assets/Bg3.jpg')";
    poster4Main.style.display = 'block';
    poster4MainLeft.style.width = '100%';
    poster4MainLeft.style.height = 'auto';
    poster4MainLeft.style.padding = '22px';
    poster4MainLeft.style.paddingBottom = '15vh';
    poster4MainRight.style.marginLeft = 'auto';
    poster4MainRight.style.width = '80%';
    mainSub1.style.display = 'none';
    const poster4MainP = document.querySelector(".poster4-main-p");
    if (poster4MainP) {
      poster4MainP.style.padding = '10px 20px 0 20px';
      poster4MainP.style.fontSize = '16px';
    }
    mainH1_2.style.fontSize = '62px';
    mainH1_2.style.textAlign = 'right';
    mainSub1.style.display = 'block';
    mainSub1.style.fontWeight = '700';
    mainSub1.style.padding = '20px';
    mainSub1.style.fontSize = '35px';
    document.querySelector(".main-1280").style.display = 'none';
    poster4Footer.style.justifyContent = 'end';
    poster4Footer.style.padding = '30px 40px 30px 40px';
  } else {
    // 다른 경우 초기화
    root.style.backgroundImage = '';
    mainH1_1.style.display = 'block';
    mainH1_2.style.display = 'none';
    mainSub1.style.display = 'none';
    poster4MainYellow.style.display = 'block';
    poster4Footer.style.justifyContent = '';
    const poster4FooterRight = document.querySelector(".poster4-footer-right");
    if (poster4FooterRight) {
      poster4FooterRight.style.display = '';
    }
    poster4Container.style = '';
    poster4Main.style = '';
    poster4MainLeft.style = '';
    poster4MainRight.style = '';
    const poster4MainP = document.querySelector(".poster4-main-p");
    if (poster4MainP) {
      poster4MainP.style = '';
    }
    mainSub2.style.display = 'block';
    poster4Footer.style = '';
    poster4FooterCenter.style = '';
  }
}

init();
