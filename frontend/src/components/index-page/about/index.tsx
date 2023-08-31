import React, { useCallback } from "react";
import Carousel from "nuka-carousel";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import EmblaCarousel from "../embla-carousel";
import {useRouter} from "next/router";
import {handleNavigation} from "@/utils/utils";
import Image from "next/image";

const About = () => {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 0,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const OPTIONS: EmblaOptionsType = {
    direction: "rtl",
    align: "start",
    loop: true,
  };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="about">
      <div className="wrapper top">
        <p className="underscored">О компании</p>
        <div className="head">
          <p>БЕРКАНАБИО©</p>
          <span>&mdash;</span>
        </div>
        <div className="text">
          <p>
            новейшие разработки <br />
            и технологиями в сфере <br />
            сельского хозяйства <br />
          </p>
        </div>
      </div>
      <div className="wrapper middle">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          scrollPrev={scrollPrev}
        />
        <div className="info">
          <p>
            Мы гарантируем Вам индивидуальные, профессиональный подход к решению
            задач по повышению конкурентоспособности Вашего предприятия. В
            будущем году мы будем рады предложить Вам услуги по внесению
            удобрений и обработок посевов средствами защиты растений.
          </p>
          <div className="mobile-partners">
            <img src="/slide-0.png" alt="" />
            <p className="underscored">Партнеры</p>
          </div>
          <div className="btn" onClick={() => handleNavigation('about', router)}>
            Узнать больше
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.552 1.55215L10.552 9.69538C10.552 9.81876 10.529 9.92939 10.4829 10.0273C10.4364 10.1247 10.3721 10.2146 10.2898 10.2969C10.2076 10.3791 10.1177 10.4435 10.0202 10.49C9.92233 10.536 9.8117 10.5591 9.68832 10.5591L1.54509 10.5591C1.31889 10.5591 1.11839 10.477 0.943599 10.3129C0.768807 10.148 0.681412 9.94214 0.681412 9.69537C0.67113 9.45889 0.748038 9.25325 0.912137 9.07846C1.07706 8.90367 1.2829 8.81628 1.52966 8.81628L7.5754 8.81628L0.681411 1.92229C0.50662 1.7475 0.419018 1.54186 0.418607 1.30538C0.419018 1.0689 0.50662 0.86326 0.681411 0.688469C0.856203 0.513677 1.06163 0.426282 1.29771 0.426282C1.5346 0.426282 1.74044 0.513677 1.91523 0.688469L8.80922 7.58245L8.80922 1.53672C8.80922 1.31052 8.89394 1.10735 9.06339 0.927214C9.23324 0.747487 9.43641 0.662765 9.67289 0.673047C9.90938 0.662766 10.115 0.745019 10.2898 0.919811C10.4646 1.0946 10.552 1.30538 10.552 1.55215Z"
                fill="#185f65"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="wrapper bottom">
        <p className="title underscored">Семена</p>
        <div className="embla-desktop embla-second" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="item">
                <div className="info">
                  <h1>Кукуруза</h1>
                  <p>
                    Оптимальным вариантом на наш взгляд являются специально
                    выведенные гибридные сорта. Они более устойчивы к изменениям
                    погодных условий, быстрее растут и дают лучше урожай.
                  </p>
                  <div className="btn">
                    ПОДРОБНЕЕ
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z"
                        fill="#202020"
                      />
                    </svg>
                  </div>
                </div>
                <div className="image">
                  <img src="/corn-modified.png" alt=""/>
                  <img src="/syngenta.png" alt="logo" />
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="item">
                <div className="info">
                  <h1>Кукуруза</h1>
                  <p>
                    Оптимальным вариантом на наш взгляд являются специально
                    выведенные гибридные сорта. Они более устойчивы к изменениям
                    погодных условий, быстрее растут и дают лучше урожай.
                  </p>
                  <div className="btn">
                    ПОДРОБНЕЕ
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z"
                        fill="#202020"
                      />
                    </svg>
                  </div>
                </div>
                <div className="image">
                  <img src="/corn-modified.png" alt="" />
                  <img src="/syngenta.png" alt="logo" />
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="item">
                <div className="info">
                  <h1>Кукуруза</h1>
                  <p>
                    Оптимальным вариантом на наш взгляд являются специально
                    выведенные гибридные сорта. Они более устойчивы к изменениям
                    погодных условий, быстрее растут и дают лучше урожай.
                  </p>
                  <div className="btn">
                    ПОДРОБНЕЕ
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z"
                        fill="#202020"
                      />
                    </svg>
                  </div>
                </div>
                <div className="image">
                  <img src="/corn-modified.png" alt="" />
                  <img src="/syngenta.png" alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <button className="embla__prev" onClick={scrollPrev}>
            <svg
              width="166"
              height="16"
              viewBox="0 0 166 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M165 8.99976C165.552 8.99976 166 8.55204 166 7.99976C166 7.44747 165.552 6.99976 165 6.99976V8.99976ZM0.292892 7.29265C-0.0976257 7.68317 -0.0976257 8.31634 0.292892 8.70686L6.65686 15.0708C7.04738 15.4613 7.68054 15.4613 8.07108 15.0708C8.46159 14.6803 8.46159 14.0471 8.07108 13.6566L2.41422 7.99976L8.07108 2.3429C8.46159 1.95238 8.46159 1.31921 8.07108 0.928688C7.68054 0.538164 7.04738 0.538164 6.65686 0.928688L0.292892 7.29265ZM165 6.99976L1 6.99976V8.99976L165 8.99976V6.99976Z"
                fill="#185F65"
              />
            </svg>
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <svg
              width="164"
              height="16"
              viewBox="0 0 164 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.99976C0.447715 6.99976 4.82823e-08 7.44747 0 7.99976C-4.82823e-08 8.55204 0.447715 8.99976 1 8.99976L1 6.99976ZM163.707 8.70688C164.098 8.31635 164.098 7.68319 163.707 7.29266L157.343 0.928702C156.953 0.538177 156.319 0.538177 155.929 0.928702C155.538 1.31923 155.538 1.95239 155.929 2.34292L161.586 7.99977L155.929 13.6566C155.538 14.0471 155.538 14.6803 155.929 15.0708C156.319 15.4614 156.953 15.4614 157.343 15.0708L163.707 8.70688ZM1 8.99976L163 8.99977L163 6.99977L1 6.99976L1 8.99976Z"
                fill="#185F65"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mobile-seeds">
        <div className="head">
          <p className="underscored">Семена</p>
          <div>
            <img src="/corn-modified.png" alt="" />
          </div>
        </div>
        <div className="info">
          <h1>Кукуруза</h1>
          <p>
            Оптимальным вариантом на наш взгляд являются специально выведенные
            гибридные сорта. Они более устойчивы к изменениям погодных условий,
            быстрее растут и дают лучше урожай.
          </p>
        </div>
        <div className="controls">
          <div className="buttons">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <img src="/syngenta.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
