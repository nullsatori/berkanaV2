// Function to fetch data for all collections
import fetchApiData from "@/utils/fetchApiData";
import { transliterate as translit } from "transliteration";

export const fetchAllData = async (collectionNames) => {
  const dataPromises = collectionNames.map((collectionName) =>
    fetchApiData(collectionName)
  );

  try {
    // Wait for all data fetch promises to resolve
    const allData = await Promise.all(dataPromises);

    // Create an object to store the data with collection names as keys
    const dataObj: Record<string, Object> = {};
    collectionNames.forEach((collectionName, index) => {
      dataObj[collectionName] = allData[index];
    });

    // Set the state with the fetched data
    //setAllCollectionsData(dataObj);

    return dataObj;
  } catch (error) {
    console.error(error);
  }
};

export const getCyrillicCollectionName = (
  englishName: string,
  cyrillicToEnglish
): string | null => {
  const englishToCyrillic: Record<string, string> = {};

  // Reverse the key-value pairs to create englishToCyrillic object
  Object.keys(cyrillicToEnglish).forEach((cyrillicName) => {
    const englishName = cyrillicToEnglish[cyrillicName];
    englishToCyrillic[englishName] = cyrillicName;
  });

  return englishToCyrillic[englishName] || null;
};

export const transliterateRussianToEnglish = (text) => {
  const cleanedText = text
    .replace(/\(.*?®.*?\)/g, "")
    .replace(/®/g, "")
    .replace(/%20/g, "");
  const transliteratedText = translit(cleanedText);
  const cleanedTransliteratedText = transliteratedText
    .replace(/\s/g, "")
    .toLowerCase(); // Remove all whitespace characters
  return cleanedTransliteratedText;
};

export const handleNavigation = async (link:string, router) => {
  await router.push(`/${link}`);

  document.body.scrollTo(0, 0); // Scroll to the top of the page
};