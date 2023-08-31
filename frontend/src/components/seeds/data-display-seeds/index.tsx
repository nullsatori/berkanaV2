import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import fetchApiData from "@/utils/fetchApiData";
import Grid from "@/components/szr/grid";
import Link from "next/link";
import { transliterate as translit } from "transliteration";
import {
  getCyrillicCollectionName,
  fetchAllData,
  transliterateRussianToEnglish,
} from "@/utils/utils";
import _debounce from 'lodash.debounce';
import Loader from "@/components/general/loader";
import { AnimatePresence, motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const DataDisplaySeeds: React.FC = () => {
  const _ = require('lodash');

  const [loading, setLoading] = useState(true);

  const [dropdown1Open, setDropdown1Open] = useState(true);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);

  const [selectedTagsForDropdown1, setSelectedTagsForDropdown1] = useState<
    string[]
  >([]);
  const [selectedTagsForDropdown2, setSelectedTagsForDropdown2] = useState<
    string[]
  >([]);
  const [selectedTagsForDropdown3, setSelectedTagsForDropdown3] = useState<
    string[]
  >([]);
  const [selectedTagsForDropdown4, setSelectedTagsForDropdown4] = useState<
    string[]
  >([]);

  const [isGridActive, setIsGridActive] = useState(false);
  const [isFilterMenuActive, setIsFilterMenuActive] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [originalPosition, setOriginalPosition] = useState(undefined);
  const collectionNames = [
    "syngenta-podsolnechniks",
    "lidea-podsolnechniks",
    "lg-podsolnechniks",
    "bayer-podsolnechniks",
    "maisadour-podsolnechniks",
    "kukuruza-syngentas",
    "kukuruza-lideas",
    "kukuruza-bayers",
    "kukuruza-maisadours",
    "kukuruza-lgs",
    // Add other collection names as needed
  ];

  const dropdownData = {
    dropdown1: [
      "Очень ранний",
      "Ранний",
      "Раннеспелый",
      "Среднеранний",
      "Среднепоздний",
      "Среднеспелый",
    ],
    dropdown2: [
      "ФАО 100-199",
      "ФАО 200-299",
      "ФАО 300-399",
      "ФАО 400-499",
    ],
    dropdown3: [
      "А-G+",
      "A-G",
      "A-E",
      "A-F",
      ">G",
      "Высокоолеиновый",
    ],
    dropdown4: [
      "Syngenta",
      "Lidea",
      "LG",
      "Bayer",
      "Maisadour"
    ],
    // Add other dropdowns with their tags here
  };
  const cyrillicToEnglish = {
    "Агрохимикаты, микроэлементы": "agrohimikaty-mikroelementies",
    "Адьюванты, клеи": "adyuvanty-kleis",
    Биопрепараты: "biopreparaties",
    "Биофунгициды, иммуномодуляторы": "biofungiczidy-immunomodulyatories",
    Гербициды: "gerbiczidies",
    Десиканты: "desikanties",
    "Инсектицидные протравители семян": "insekticzidnye-protraviteli-semyans",
    Инсектициды: "insekticzidies",
    Макроудобрения: "makroudobreniyas",
    "Протравители семян": "fungiczidnyj-protravitel-semyans",
    "Регуляторы, стимуляторы роста": "regulyatory-stimulyatory-rostas",
    Родентициды: "rodenticzidies",
    Фумиганты: "fumiganties",
    Фунгициды: "fungiczidies",
    // Add other collection names as needed
  };

  // Define a state object to hold data for all collections
  const [allCollectionsData, setAllCollectionsData] = useState<
    Record<string, DataItem>
  >({});

  const getEnglishCollectionName = (cyrillicName: string): string | null => {
    return cyrillicToEnglish[cyrillicName] || null;
  };

  // Fetch data for all collections on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllData(collectionNames);
      setAllCollectionsData(data);
      setTimeout(() => setLoading(false), 300)
    };

    if (!allCollectionsData.length) {
      fetchData();
    }

    const handleResize = _debounce(() => {
      setViewportWidth(window.innerWidth);
      console.log('changed width to - ', viewportWidth)
      setIsGridActive(window.innerWidth < 1200);
    }, 50);

    const updateSticky = () => {
      const stickyElement = document.querySelector('.data-tags-wrapper_mobile');
      const dataDisplay = document.querySelector('.data-display');
      if (!stickyElement || !dataDisplay) return;

      if (originalPosition === undefined) {
        setOriginalPosition(stickyElement.offsetTop);
      }

      if (document.body.scrollTop >= originalPosition) {
        stickyElement.classList.add('sticky');
        dataDisplay.classList.add('offset');
      } else {
        stickyElement.classList.remove('sticky');
        dataDisplay.classList.remove('offset');
      }
    };

    const menuElement = document.querySelector('.tag-menu_mobile');

    if (isFilterMenuActive) {
      // Disable body scroll while enabling scroll on the menu element
      disableBodyScroll(menuElement);
    } else {
      // Enable body scroll and remove listeners on the menu element
      enableBodyScroll(menuElement);
    }


    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);
      setIsGridActive(window.innerWidth < 1200);

      window.addEventListener('resize', handleResize);
      document.body.addEventListener('scroll', updateSticky);

      updateSticky();

      return () => {
        window.removeEventListener('resize', handleResize);
        document.body.removeEventListener('scroll', updateSticky);
      };
    }
  }, [originalPosition]);




  const toggleDropdown = (dropdownIndex: number) => {
    switch (dropdownIndex) {
      case 1:
        setDropdown1Open((prevOpen) => !prevOpen);
        break;
      case 2:
        setDropdown2Open((prevOpen) => !prevOpen);
        break;
      case 3:
        setDropdown3Open((prevOpen) => !prevOpen);
        break;
      case 4:
        setDropdown4Open((prevOpen) => !prevOpen);
        break;
      default:
        break;
    }
  };

  // Function to render tags for each dropdown
  const renderTagsForDropdown = (dropdownName: string) => {
    const selectedTags = dropdownData[dropdownName];
    const selectedTagsForDropdown = {
      dropdown1: selectedTagsForDropdown1,
      dropdown2: selectedTagsForDropdown2,
      dropdown3: selectedTagsForDropdown3,
      dropdown4: selectedTagsForDropdown4,
    };

    return selectedTags.map((tag) => {
      const englishTag = getEnglishCollectionName(tag);
      return (
        <label
          key={tag}
          className={`tag ${
            selectedTagsForDropdown[dropdownName].includes(tag)
              ? "active"
              : ""
          }`}
          onClick={() => handleTagSelection(tag, dropdownName)}
        >
          <input
            type="checkbox"
            checked={selectedTagsForDropdown[dropdownName].includes(tag)}
            onChange={() => handleTagSelection(tag, dropdownName)}
          />
          <span className="checkbox-custom"></span>
          {tag}
        </label>
      );
    });
  };

  // Function to handle tag selection
  const handleTagSelection = (tag: string, dropdownName: string) => {
    const englishTag = getEnglishCollectionName(tag);

    switch (dropdownName) {
      case "dropdown1":
        setSelectedTagsForDropdown1((prevSelectedTags) =>
          prevSelectedTags.includes(tag)
            ? prevSelectedTags.filter(
                (selectedTag) => selectedTag !== tag
              )
            : [...prevSelectedTags, tag]
        );

        break;
      case "dropdown2":
        setSelectedTagsForDropdown2((prevSelectedTags) =>
          prevSelectedTags.includes(tag)
            ? prevSelectedTags.filter(
              (selectedTag) => selectedTag !== tag
            )
            : [...prevSelectedTags, tag]
        );
        break;
      case "dropdown3":
        setSelectedTagsForDropdown3((prevSelectedTags) =>
          prevSelectedTags.includes(tag)
            ? prevSelectedTags.filter(
              (selectedTag) => selectedTag !== tag
            )
            : [...prevSelectedTags, tag]
        );
        break;
      case "dropdown4":
        setSelectedTagsForDropdown4((prevSelectedTags) =>
          prevSelectedTags.includes(tag)
            ? prevSelectedTags.filter(
              (selectedTag) => selectedTag !== tag
            )
            : [...prevSelectedTags, tag]
        );
        break;
      default:
        break;
    }
  };

  const renderDataForCollection = (collectionName: string, filteredData?: object) => {
    let collectionData;

    if(filteredData){
      if(filteredData[collectionName]){
        collectionData = filteredData[collectionName];
      }
    } else
      collectionData = allCollectionsData[collectionName];
    if (!collectionData) return null; // Handle the case when collectionData is not found
    const cyrillicCategoryName = getCyrillicCollectionName(
      collectionName,
      cyrillicToEnglish
    );


    const groupedData = {};
    collectionData.data.forEach((item) => {
      const type = item.attributes.component.type;
      if (!groupedData[type]) {
        groupedData[type] = [];
      }
      groupedData[type].push(item);
    });

    const getTypeHeaderText = (type) => {
      switch (type) {
        case "classic":
          return "Классическая технология";
        case "clearfield":
          return "Clearfield";
        case "clearfield-plus":
          return "Clearfield Plus";
        case "fmc":
          return "FMC";
        case "express":
          return "EXPRESS";
        case "artesian":
          return "Артезиан";
        case "powergrain":
          return "Powergrain";
        case "powercell":
          return "Powercell";
        default:
          return "no type";
      }
    };
      if(groupedData)
      switch (collectionName) {
        case "syngenta-podsolnechniks":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/syngenta.png" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    <div className="row type-row">
                      <div className="type-name">{getTypeHeaderText(type)}</div>
                    </div>
                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {item.attributes.component.group}
                              </p>
                              <p>
                                {item.attributes.component.characteristic}
                              </p>
                              <p>
                                {item.attributes.component.price + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/syngenta.png" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property group">Группа спелости</div>
                <div className="property characteristics">Характеристика</div>
                <div className="property processing">Обработка</div>
                <div className="property price">Цена, руб с НДС</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  <div className="row type-row">
                    <div className="type-name">{getTypeHeaderText(type)}</div>
                  </div>
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img
                            src="/sunflower-icon-2.png"
                            alt=""
                            className="icon"
                          />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property group">
                        {item.attributes.component.group || "—"}
                      </div>
                      <div className="property characteristics">
                        {item.attributes.component.characteristic || "—"}
                      </div>
                      <div className="property processing">
                        {item.attributes.component.processing || "—"}
                      </div>
                      <div className="property price">
                        {item.attributes.component.price + " ₽"}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "lidea-podsolnechniks":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/lidea.png" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    <div className="row type-row">
                      <div className="type-name">{getTypeHeaderText(type)}</div>
                    </div>
                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {item.attributes.component.group}
                              </p>
                              <p>
                                {item.attributes.component.characteristic}
                              </p>
                              <p>
                                {item.attributes.component.price + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/lidea.png" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property group">Группа спелости</div>
                <div className="property characteristics">Характеристика</div>
                <div className="property price">Цена, руб с НДС</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {/* Row with the type name */}
                  <div className="row type-row">
                    <div className="type-name">{getTypeHeaderText(type)}</div>
                  </div>


                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img
                            src="/sunflower-icon-2.png"
                            alt=""
                            className="icon"
                          />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property group">
                        {item.attributes.component.group || "—"}
                      </div>
                      <div className="property characteristics">
                        {item.attributes.component.characteristic || "—"}
                      </div>
                      <div className="property price">
                        {item.attributes.component.price + " ₽"}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "lg-podsolnechniks":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/lg.jpg" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    <div className="row type-row">
                      <div className="type-name">{getTypeHeaderText(type)}</div>
                    </div>
                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {item.attributes.component.group}
                              </p>
                              <p>
                                {item.attributes.component.characteristic}
                              </p>
                              <p>
                                {item.attributes.component.price + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/lg.jpg" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property group">Группа спелости</div>
                <div className="property characteristics">Характеристика</div>
                <div className="property processing">Обработка</div>
                <div className="property price">Цена, руб с НДС</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {/* Row with the type name */}
                  <div className="row type-row">
                    <div className="type-name">{getTypeHeaderText(type)}</div>
                  </div>

                  {/* Items */}
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img
                            src="/sunflower-icon-2.png"
                            alt=""
                            className="icon"
                          />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property group">
                        {item.attributes.component.group || "—"}
                      </div>
                      <div className="property characteristics">
                        {item.attributes.component.characteristic || "—"}
                      </div>
                      <div className="property processing">
                        {item.attributes.component.processing || "—"}
                      </div>
                      <div className="property price">
                        {item.attributes.component.price + " ₽"}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "bayer-podsolnechniks":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/bayer.png" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {item.attributes.component.typeBayer}
                              </p>
                              <p>
                                {item.attributes.component.price + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/bayer.png" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property type">Тип</div>
                <div className="property price">
                  Цена 1 п.е., руб с НДС, c обработкой инсектицидом
                </div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {/* Items */}
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img
                            src="/sunflower-icon-2.png"
                            alt=""
                            className="icon"
                          />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property type">
                        {item.attributes.component.typeBayer || "—"}
                      </div>

                      <div className="property price">
                        {item.attributes.component.price + " ₽"}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "maisadour-podsolnechniks":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/maisadour.png" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>

                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {item.attributes.component.group}
                              </p>
                              <p>
                                {item.attributes.component.characteristic}
                              </p>
                              <p>
                                {item.attributes.component.price_1 + " ₽ " + "/ " + item.attributes.component.price_2 + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/maisadour.png" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property group">Группа спелости</div>
                <div className="property characteristics">Характеристика</div>
                <div className="property processing">Протравка семян</div>
                <div className="property price">Цена 1 п.е., руб</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {/* Items */}
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img
                            src="/sunflower-icon-2.png"
                            alt=""
                            className="icon"
                          />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property group">
                        {item.attributes.component.group || "—"}
                      </div>
                      <div className="property characteristics">
                        {item.attributes.component.characteristic || "—"}
                      </div>
                      <div className="property processing">
                        <div className="property processing-item">
                          {item.attributes.component.processing_1 || "—"}
                        </div>
                        <div className="property processing-item">
                          {item.attributes.component.processing_2 || "—"}
                        </div>
                      </div>
                      <div className="property price">
                        <div className="property price-item">
                          {item.attributes.component.price_1 + " ₽"}
                        </div>
                        <div className="property price-item">
                          {item.attributes.component.price_2 + " ₽"}
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "kukuruza-syngentas":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/syngenta.png" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    {getTypeHeaderText(type) !== 'no type' ? (<div className="row type-row">
                      <div className="type-name">{getTypeHeaderText(type)}</div>
                  </div>) : ''}

                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {"ФАО " + item.attributes.component.FAO}
                              </p>
                              <p>
                                {item.attributes.component.price + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/syngenta.png" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property fao">ФАО</div>
                <div className="property processing">Обработка</div>
                <div className="property price">Цена, руб с НДС</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {/* Row with the type name */}
                  <div className="row type-row">
                    <div className="type-name">{getTypeHeaderText(type)}</div>
                  </div>

                  {/* Items */}
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img src="/corn-icon.png" alt="" className="icon" />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property fao">
                        {item.attributes.component.FAO || "—"}
                      </div>
                      <div className="property processing">
                        {item.attributes.component.processing || "—"}
                      </div>
                      <div className="property price">
                        {item.attributes.component.price + " ₽"}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "kukuruza-lideas":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/lidea.png" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    {getTypeHeaderText(type) !== 'no type' ? (<div className="row type-row">
                      <div className="type-name">{getTypeHeaderText(type)}</div>
                    </div>) : ''}
                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {"ФАО " + item.attributes.component.FAO}
                              </p>
                              <p>
                                {item.attributes.component.price + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/lidea.png" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property fao">ФАО</div>
                <div className="property characteristics">Характеристика</div>
                <div className="property price">Цена, руб с НДС</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img src="/corn-icon.png" alt="" className="icon" />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property fao">
                        {item.attributes.component.FAO || "—"}
                      </div>
                      <div className="property characteristics">
                        {item.attributes.component.characteristics || "—"}
                      </div>
                      <div className="property price">
                        {item.attributes.component.price + " ₽"}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "kukuruza-bayers":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/bayer.png" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    {getTypeHeaderText(type) !== 'no type' ? (<div className="row type-row">
                      <div className="type-name">{getTypeHeaderText(type)}</div>
                    </div>) : ''}
                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {"ФАО " + item.attributes.component.FAO}
                              </p>
                              <p>
                                {item.attributes.component.price + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/bayer.png" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property fao">ФАО</div>
                <div className="property price">Цена, руб с НДС</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img src="/corn-icon.png" alt="" className="icon" />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property fao">
                        {item.attributes.component.FAO || "—"}
                      </div>
                      <div className="property price">
                        {item.attributes.component.price + " ₽"}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "kukuruza-maisadours":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/maisadour.png" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    {getTypeHeaderText(type) !== 'no type' ? (<div className="row type-row">
                      <div className="type-name">{getTypeHeaderText(type)}</div>
                    </div>) : ''}
                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {"ФАО " + item.attributes.component.FAO}
                              </p>
                              <p>
                                {item.attributes.component.price_1 + " ₽" + " / " + item.attributes.component.price_2 + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/maisadour.png" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property fao">ФАО</div>
                <div className="property processing">Варианты обработки</div>
                <div className="property price">Цена 1 п.е., руб</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {/* Items */}
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                        {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img src="/corn-icon.png" alt="" className="icon" />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property fao">
                        {item.attributes.component.FAO || "—"}
                      </div>
                      <div className="property processing">
                        <div className="property processing-item">
                          {item.attributes.component.processing_1 || "—"}
                        </div>
                        <div className="property processing-item">
                          {item.attributes.component.processing_2 || "—"}
                        </div>
                      </div>
                      <div className="property price">
                        <div className="property price-item">
                          {item.attributes.component.price_1 + " ₽"}
                        </div>
                        <div className="property price-item">
                          {item.attributes.component.price_2 + " ₽"}
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        case "kukuruza-lgs":
          if(filteredData && !filteredData[collectionName].data.length)
            break;
          if(isGridActive){
            return (
              <>
                <div className="row type-company">
                  <img src="/lg.jpg" alt="" />
                </div>
                {Object.entries(groupedData).map(([type, items]) => (
                  <React.Fragment key={type}>
                    {getTypeHeaderText(type) !== 'no type' ? (<div className="row type-row">
                      <div className="type-name">{getTypeHeaderText(type)}</div>
                    </div>) : ''}
                    <div className="grid-wrapper">
                      {items.map((item, index) => (
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <div key={item.id} className="grid-item">
                            <div className="item-name">
                              <p>{item.attributes.component.name}</p>
                            </div>
                            <div className="item-image">
                              {collectionNames.some((name) =>
                                collectionName.includes("kukuruza")
                              ) ? (
                                <img src="/corn-icon.png" alt="Corn" />
                              ) : (
                                <img src="/sunflower-icon.png" alt="Sunflower" />
                              )}
                            </div>
                            <div className="item-collection">
                              <p>
                                {"ФАО " + item.attributes.component.FAO}
                              </p>
                              <p>
                                {item.attributes.component.price + " ₽"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>

                ))}
              </>
            )
          }
          return (
            <>
              <div className="row type-company">
                <img src="/lg.jpg" alt="" />
              </div>
              <div className="row head">
                <div className="property index">№</div>
                <div className="property name">Наименование гибрида</div>
                <div className="property fao">ФАО</div>
                <div className="property characteristics">Характеристика</div>
                <div className="property price">Цена, руб с НДС</div>
              </div>
              {Object.entries(groupedData).map(([type, items]) => (
                <React.Fragment key={type}>
                  {items.map((item, index) => (
                    <div key={item.id} className="row items">
                      <div className="property index">
                          {index + 1}
                      </div>
                      <div className="property name">
                        <Link
                          href={{
                            pathname: `/bogus/${transliterateRussianToEnglish(
                              item.attributes.name
                            )}`,
                          }}
                        >
                          <img src="/corn-icon.png" alt="" className="icon" />
                          {item.attributes.component.name}
                        </Link>
                      </div>
                      <div className="property fao">
                        {item.attributes.component.FAO || "—"}
                      </div>
                      <div className="property characteristics">
                        {item.attributes.component.characteristics || "—"}
                      </div>
                      <div className="property price">
                        {item.attributes.component.price + " ₽"}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </>
          );

        default:
          return null;
      }
  };
  const renderAllCollectionsData = () => {
    return collectionNames.map((collectionName) => (
      <>{renderDataForCollection(collectionName)}</>
    ));
  };

  const renderDataBasedOnSelectedTags = () => {
    const combinedSelectedTags = [
      ...selectedTagsForDropdown1,
      ...selectedTagsForDropdown2,
      ...selectedTagsForDropdown3,
      ...selectedTagsForDropdown4
    ];
    let filteredCollections = _.cloneDeep(allCollectionsData);

    let renderedContent;

    if (combinedSelectedTags.length > 0) {
      Object.keys(filteredCollections).forEach(collectionName => {
        filteredCollections[collectionName].data = filteredCollections[collectionName].data.filter(item => {
          const itemGroup = item.attributes.component.group;
          const itemCharacteristic = item.attributes.component.characteristic?.normalize();
          const itemFAO = item.attributes.component.FAO;
          const numbers = selectedTagsForDropdown2.map(string => {
            const matches = string.match(/\d+/g);
            return matches ? matches.map(Number) : [];
          })

          const groupCheck = selectedTagsForDropdown1.length ? combinedSelectedTags.includes(itemGroup) : true;
          const faoCheck = selectedTagsForDropdown2.length ? selectedTagsForDropdown2.some(tag => {
            const match = tag.match(/(\d+)-(\d+)/);
            if (match) {
              const rangeStart = Number(match[1]);
              const rangeEnd = Number(match[2]);
              return itemFAO >= rangeStart && itemFAO <= rangeEnd;
            }
            return false;
          }) : true;
          const characteristicCheck = selectedTagsForDropdown3.length ? combinedSelectedTags.some(item => itemCharacteristic?.includes(item)) : true;
          const producerCheck = selectedTagsForDropdown4.length ? combinedSelectedTags.some(item => collectionName.includes(item.toLowerCase())) : true;

          return  groupCheck && characteristicCheck && producerCheck && faoCheck;
        });
      });

      renderedContent = Object.keys(filteredCollections).map(collectionName => {
        return renderDataForCollection(collectionName, filteredCollections);
      });
    } else {
      renderedContent = renderAllCollectionsData();
    }

    return renderedContent;
  };

  return (
    loading ? <Loader loading={loading}/> : (<div className="data">
      {
        viewportWidth && viewportWidth >= 1200 ? (<div className="data-tags-wrapper">

          <div className="grid-selector">
            <div className={`grid-selector-button ${isGridActive ? 'inactive' : 'active'}`} onClick={() => {
              if(isGridActive)
                setIsGridActive(false);
            }}>
              <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="27" y2="1" stroke="#185F65" strokeWidth="2"/>
                <line y1="13" x2="27" y2="13" stroke="#185F65" strokeWidth="2"/>
                <line y1="7" x2="27" y2="7" stroke="#185F65" strokeWidth="2"/>
              </svg>

            </div>
            <div className={`grid-selector-button ${isGridActive ? 'active' : 'inactive'}`} onClick={() => {
              if(!isGridActive)
                setIsGridActive(true);
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="5" height="5" fill="#C2CCDA"/>
                <rect x="9" width="5" height="5" fill="#C2CCDA"/>
                <rect y="9" width="5" height="5" fill="#C2CCDA"/>
                <rect x="9" y="9" width="5" height="5" fill="#C2CCDA"/>
              </svg>

            </div>
          </div>
          <div className="data-tags">
            <div className="data-tag">
              <p>
                Очень ранние
              </p>
            </div>
            <div className="data-tag">
              <p>
                Раннеспелые
              </p>
            </div>
            <div className="data-tag">
              <p>
                Среднеспелые
              </p>
            </div>
          </div>
        </div>) : (
          <div className='data-tags-wrapper_mobile'>
            <div className="selector filter" onClick={() => setIsFilterMenuActive(true)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.26598 2.59428C2.80506 5.70256 7.49356 11.4631 7.49356 11.4631V18.6637C7.49356 19.3238 8.05919 19.8638 8.75053 19.8638H11.2645C11.9558 19.8638 12.5214 19.3238 12.5214 18.6637V11.4631C12.5214 11.4631 17.1974 5.70256 19.7364 2.59428C19.8805 2.41711 19.9696 2.20488 19.9935 1.98175C20.0174 1.75863 19.9752 1.53357 19.8717 1.33221C19.7682 1.13086 19.6076 0.961288 19.4081 0.842817C19.2087 0.724347 18.9784 0.661735 18.7434 0.662111H1.25899C0.215701 0.662111 -0.375075 1.80221 0.26598 2.59428Z" fill="#C2CCDA"/>
              </svg>
            </div>
            <div className="selector tags">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 5.46253C3.10218 5.46253 2.72064 5.31081 2.43934 5.04073C2.15804 4.77066 2 4.40435 2 4.02241C2 3.64046 2.15804 3.27416 2.43934 3.00408C2.72064 2.73401 3.10218 2.58228 3.5 2.58228C3.89782 2.58228 4.27936 2.73401 4.56066 3.00408C4.84196 3.27416 5 3.64046 5 4.02241C5 4.40435 4.84196 4.77066 4.56066 5.04073C4.27936 5.31081 3.89782 5.46253 3.5 5.46253ZM19.41 9.85972L10.41 1.21896C10.05 0.873328 9.55 0.662109 9 0.662109H2C0.89 0.662109 0 1.51659 0 2.58228V9.30288C0 9.83092 0.22 10.311 0.59 10.6566L9.58 19.2974C9.95 19.643 10.45 19.8638 11 19.8638C11.55 19.8638 12.05 19.643 12.41 19.2974L19.41 12.5768C19.78 12.2311 20 11.7511 20 11.223C20 10.6854 19.77 10.2054 19.41 9.85972Z" fill="#C2CCDA"/>
              </svg>
            </div>
          </div>
        )
      }


      <div className="data-display">
        {viewportWidth && viewportWidth > 1200 ? (
          <div className="tag-menu">
            <div className={`dropdown ${dropdown1Open ? "open" : "closed"}`}>
            <div className="dropdown-head" onClick={() => toggleDropdown(1)}>
              <h3>Подсолнечник</h3>
              {
                dropdown1Open ? (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.59 7.41016L6 2.83016L1.41 7.41016L1.23266e-07 6.00016L6 0.000155878L12 6.00016L10.59 7.41016Z" fill="#D4A95A"/>
                  </svg>
                ) : (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#D4A95A"/>
                </svg>)
              }
            </div>

            <CSSTransition
              in={dropdown1Open}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <div className="tag-buttons">
                {renderTagsForDropdown("dropdown1")}
              </div>
            </CSSTransition>
          </div>
            <div className={`dropdown ${dropdown2Open ? "open" : "closed"}`}>
            <div className="dropdown-head" onClick={() => toggleDropdown(2)}>
              <h3>Кукуруза</h3>
              {
                dropdown2Open ? (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.59 7.41016L6 2.83016L1.41 7.41016L1.23266e-07 6.00016L6 0.000155878L12 6.00016L10.59 7.41016Z" fill="#D4A95A"/>
                  </svg>
                ) : (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#D4A95A"/>
                </svg>)
              }
            </div>
            <CSSTransition
              in={dropdown2Open}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <div className="tag-buttons">
                {renderTagsForDropdown("dropdown2")}
              </div>
            </CSSTransition>
          </div>
            <div className={`dropdown ${dropdown3Open ? "open" : "closed"}`}>
            <div className="dropdown-head" onClick={() => toggleDropdown(3)}>
              <h3>Характеристики</h3>
              {
                dropdown3Open ? (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.59 7.41016L6 2.83016L1.41 7.41016L1.23266e-07 6.00016L6 0.000155878L12 6.00016L10.59 7.41016Z" fill="#D4A95A"/>
                  </svg>
                ) : (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#D4A95A"/>
                </svg>)
              }
            </div>
            <CSSTransition
              in={dropdown3Open}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <div className="tag-buttons">
                {renderTagsForDropdown("dropdown3")}
              </div>
            </CSSTransition>
          </div>
            <div className={`dropdown ${dropdown4Open ? "open" : "closed"}`}>
            <div className="dropdown-head" onClick={() => toggleDropdown(4)}>
              <h3>Производитель</h3>
              {
                dropdown4Open ? (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.59 7.41016L6 2.83016L1.41 7.41016L1.23266e-07 6.00016L6 0.000155878L12 6.00016L10.59 7.41016Z" fill="#D4A95A"/>
                  </svg>
                ) : (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#D4A95A"/>
                </svg>)
              }
            </div>
            <CSSTransition
              in={dropdown4Open}
              classNames="fade"
              timeout={300}
              unmountOnExit
            >
              <div className="tag-buttons">
                {renderTagsForDropdown("dropdown4")}
              </div>
            </CSSTransition>
          </div>
          </div>) : ''}
        <AnimatePresence>
        {
          viewportWidth && viewportWidth < 1200 && isFilterMenuActive ? (

              <motion.div className="tag-menu tag-menu_mobile" initial={{ opacity: 1, scale: 1, x: "-200%" }}
                          animate={{ opacity: 1, x: "0" }}
                          exit={{ opacity: 0, y: "-100%" }}
                          transition={{ duration: 0.3 }}>
                <div className="menu-content">
                  <div className="head">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.26598 1.93217C2.80506 5.04045 7.49356 10.801 7.49356 10.801V18.0016C7.49356 18.6617 8.05919 19.2017 8.75053 19.2017H11.2645C11.9558 19.2017 12.5214 18.6617 12.5214 18.0016V10.801C12.5214 10.801 17.1974 5.04045 19.7364 1.93217C19.8805 1.755 19.9696 1.54277 19.9935 1.31964C20.0174 1.09652 19.9752 0.871462 19.8717 0.670105C19.7682 0.468747 19.6076 0.299178 19.4081 0.180708C19.2087 0.0622373 18.9784 -0.000374476 18.7434 1.685e-06H1.25899C0.215701 1.685e-06 -0.375075 1.1401 0.26598 1.93217Z" fill="#D4A95A"/>
                    </svg>
                    <p>
                      фильтры
                    </p>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsFilterMenuActive(false)}>
                      <path opacity="0.7" d="M2.2 22L0 19.8L8.8 11L0 2.2L2.2 0L11 8.8L19.8 0L22 2.2L13.2 11L22 19.8L19.8 22L11 13.2L2.2 22Z" fill="#A8B7CB"/>
                    </svg>

                  </div>
                  <div className={`dropdown ${dropdown1Open ? "open" : "closed"}`}>
                    <div className="dropdown-head" onClick={() => toggleDropdown(1)}>
                      <h3>Подсолнечник</h3>
                      {
                        dropdown1Open ? (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.59 7.41016L6 2.83016L1.41 7.41016L1.23266e-07 6.00016L6 0.000155878L12 6.00016L10.59 7.41016Z" fill="#D4A95A"/>
                          </svg>
                        ) : (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#D4A95A"/>
                        </svg>)
                      }
                    </div>

                    <CSSTransition
                      in={dropdown1Open}
                      classNames="fade"
                      timeout={300}
                      unmountOnExit
                    >
                      <div className="tag-buttons">
                        {renderTagsForDropdown("dropdown1")}
                      </div>
                    </CSSTransition>
                  </div>
                  <div className={`dropdown ${dropdown2Open ? "open" : "closed"}`}>
                    <div className="dropdown-head" onClick={() => toggleDropdown(2)}>
                      <h3>Кукуруза</h3>
                      {
                        dropdown2Open ? (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.59 7.41016L6 2.83016L1.41 7.41016L1.23266e-07 6.00016L6 0.000155878L12 6.00016L10.59 7.41016Z" fill="#D4A95A"/>
                          </svg>
                        ) : (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#D4A95A"/>
                        </svg>)
                      }
                    </div>
                    <CSSTransition
                      in={dropdown2Open}
                      classNames="fade"
                      timeout={300}
                      unmountOnExit
                    >
                      <div className="tag-buttons">
                        {renderTagsForDropdown("dropdown2")}
                      </div>
                    </CSSTransition>
                  </div>
                  <div className={`dropdown ${dropdown3Open ? "open" : "closed"}`}>
                    <div className="dropdown-head" onClick={() => toggleDropdown(3)}>
                      <h3>Характеристики</h3>
                      {
                        dropdown3Open ? (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.59 7.41016L6 2.83016L1.41 7.41016L1.23266e-07 6.00016L6 0.000155878L12 6.00016L10.59 7.41016Z" fill="#D4A95A"/>
                          </svg>
                        ) : (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#D4A95A"/>
                        </svg>)
                      }
                    </div>
                    <CSSTransition
                      in={dropdown3Open}
                      classNames="fade"
                      timeout={300}
                      unmountOnExit
                    >
                      <div className="tag-buttons">
                        {renderTagsForDropdown("dropdown3")}
                      </div>
                    </CSSTransition>
                  </div>
                  <div className={`dropdown ${dropdown4Open ? "open" : "closed"}`}>
                    <div className="dropdown-head" onClick={() => toggleDropdown(4)}>
                      <h3>Производитель</h3>
                      {
                        dropdown4Open ? (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.59 7.41016L6 2.83016L1.41 7.41016L1.23266e-07 6.00016L6 0.000155878L12 6.00016L10.59 7.41016Z" fill="#D4A95A"/>
                          </svg>
                        ) : (<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#D4A95A"/>
                        </svg>)
                      }
                    </div>
                    <CSSTransition
                      in={dropdown4Open}
                      classNames="fade"
                      timeout={300}
                      unmountOnExit
                    >
                      <div className="tag-buttons">
                        {renderTagsForDropdown("dropdown3")}
                      </div>
                    </CSSTransition>
                  </div>
                </div>

              </motion.div>
          ) : ''

        }
        </AnimatePresence>
        <div className="data-display-wrapper seeds-wrapper">
          {isGridActive ? (
            <div className="grid-container">
              {renderDataBasedOnSelectedTags()}
            </div>
          ) : (
            <div className="table-container">
              <div className="table-wrapper">
                <div className="table">
                  <div className="data-container">
                    {renderDataBasedOnSelectedTags()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>)


  );
};

export default DataDisplaySeeds;
