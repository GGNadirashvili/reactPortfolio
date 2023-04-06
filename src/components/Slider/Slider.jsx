import React from "react";
import SwiperCore, { EffectCoverflow, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../../App";
import { useState, useEffect } from "react";
import Star from "../../styles/Icons/Star";
SwiperCore.use([EffectCoverflow, Pagination, Parallax]);

const App = () => {
  const [swiperOptions, setSwiperOptions] = useState({
    grabCursor: true,
    spaceBetween: 20,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    pagination: true,
    loop: true, // Enable loop
  });

  useEffect(() => {
    const breakpoints = [
      { name: "mobile", maxWidth: 768 },
      { name: "tablet", minWidth: 768, maxWidth: 1024 },
      { name: "desktop", minWidth: 1024 },
    ];

    const updateSwiperOptions = () => {
      const width = window.innerWidth;
      let options = {
        grabCursor: true,
        pagination: true,
        
      };

      if (width <= breakpoints[0].maxWidth) {
        // Set swiper options for mobile devices
        options.spaceBetween = 10;
        options.slidesPerView = 1;
      } else if (
        width >= breakpoints[1].minWidth &&
        width <= breakpoints[1].maxWidth
      ) {
        // Set swiper options for tablets
        options.spaceBetween = 15;
        options.slidesPerView = 2;
      } else {
        // Set swiper options for desktops
        options.spaceBetween = 20;
        options.slidesPerView = 2;
      }

      setSwiperOptions(options);
    };

    updateSwiperOptions();

    window.addEventListener("resize", updateSwiperOptions);

    return () => window.removeEventListener("resize", updateSwiperOptions);
  }, []);
  return (
    <div className="swiper-container">
      <Swiper {...swiperOptions} className="mySwiper">
        <SwiperSlide>
          <div className="slider-card" data-swiper-parallax="-500">
            <div className="flex">
              <div>
                <img
                  className="slider-img"
                  src="https://media.licdn.com/dms/image/D4D03AQFOgwMv11C4yA/profile-displayphoto-shrink_800_800/0/1676018762085?e=1686182400&v=beta&t=mRoZSYXP1AHf572aC23ScQVxguyVIcIA8vVEt5wcWyc"
                  alt=""
                />
              </div>
              <div className="flex column j-center al-center t-center name-cont">
                <h2 className="green">Shalva Beridze</h2>
                <p>Back-End Developer </p>
              </div>
            </div>
            <div className="paragraph-cont" data-swiper-parallax="-300">
              <p>
                "Working with Giorgi Nadirashvili was an absolute pleasure. They
                were extremely professional and communicated with us throughout
                the entire project, ensuring that our requirements were met. The
                front-end work they delivered was of exceptional quality, and
                they exceeded our expectations. We rate their work 10/10 for
                overall satisfaction."
              </p>
              <div className="star-cont flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card" data-swiper-parallax="-500">
            <div className="flex">
              <div>
                <img
                  className="slider-img"
                  src="https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/274805129_5024053394298506_5592805312181136826_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Pk0gtcnEdMoAX9X4a4A&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfDXpuQ3KftsORCzbDR-wvW7olSpoDCzHqlXlNCJJ4rOfQ&oe=6432D9C3"
                  alt=""
                />
              </div>
              <div className="flex column j-center al-center t-center name-cont">
                <h2 className="green">Giorgi Kopadze</h2>
                <p>Front-End Developer </p>
              </div>
            </div>
            <div className="paragraph-cont" data-swiper-parallax="-300">
              <p>
                "Their expertise in front-end development helped take our
                project to the next level. They were responsive to our needs,
                patient in their explanations, and committed to delivering
                quality work within the agreed-upon timeline. Our website looks
                and feels amazing, thanks to Giorgi Nadirashvili. We couldn't be
                more pleased with the results, and we highly recommend their
                services to anyone looking for a skilled and reliable front-end
                developer"
              </p>
              <div className="star-cont flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card" data-swiper-parallax="-500">
            <div className="flex">
              <div>
                <img
                  className="slider-img"
                  src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/120202689_3187901021335483_1986511274923233883_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=lVYeH9KZqZgAX-GVqz8&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfAeciju5m2P27dOFj-DSwCw88vpkE1lMSITqoe-I7vbNg&oe=64564324"
                  alt=""
                />
              </div>
              <div className="flex column j-center al-center t-center name-cont">
                <h2 className="green">Sesili Malishava</h2>
                <p>Devops </p>
              </div>
            </div>
            <div className="paragraph-cont" data-swiper-parallax="-300">
              <p>
                "I had the pleasure of working with Giorgi Nadirashvili on a web
                development project, and I can say with confidence that they
                exceeded my expectations. From the initial consultation to the
                final product, Giorgi Nadirashvili demonstrated professionalism,
                creativity, and attention to detail. They took the time to
                understand my vision and provided valuable insights and
                suggestions to enhance the user experience. "
              </p>
              <div className="star-cont flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card" data-swiper-parallax="-500">
            <div className="flex">
              <div>
                <img
                  className="slider-img"
                  src="https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/86809678_3050219938345287_2438073511680409600_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j_okVDQqoR4AX_GZO8K&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfCuPphkeSutBLHNqIDZwm2ncY-IuvNKa4gpSLVlnGcvQA&oe=64563B84"
                  alt=""
                />
              </div>
              <div className="flex column j-center al-center t-center name-cont">
                <h2 className="green">Tatia Baghashvili</h2>
                <p>lawyer</p>
              </div>
            </div>
            <div className="paragraph-cont" data-swiper-parallax="-300">
              <p>
                "I Was working with Giorgi Nadirashvili on a complex web
                application project, and I must say I was thoroughly impressed
                with their skills and professionalism. From the start, they were
                responsive, communicative, and collaborative, always making sure
                they understood our requirements and providing valuable input on
                the best front-end development practices. "
              </p>
              <div className="star-cont flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
