import React, { useState, useEffect} from "react";
import axios from "axios";
import _ from "lodash";
import DropDownPicker from 'react-native-dropdown-picker';


import { ScrollView, View, Text } from "react-native";

import { spanish_books_old_testament } from "./books/bible_books_spanish_old_testament";

import { styles } from "./styles/bibleStyles";

import { REACT_APP_SPANISH } from "@env";

export default function SpanishOldTestament() {
  const [selectedValue, setSelectedValue] = useState();
  const [numberChapters, setNumberChapters] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("GEN");
  const [forms, setForms] = useState([]);
  const [isLoading, setLoading] = useState(false);



  function stripHTML(text) {
    return text.replace(/<.*?>/gm, " ");
  }

  const handleChange = (event) => {
    setChapter(event);
  };

  const handleSubmit = (e) => {
    setBook(e);

  };

 

  const options = {
    headers: {
      "Api-key": REACT_APP_SPANISH
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/${book}.${chapter}?`,
        options
      )
      .then((response) => {
        setForms([response.data.data]);
        // console.log(response.data)
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
    spanish_books_old_testament.map((item) => {
      if (item.value === book) {
        return setNumberChapters(item.chapters);
      }
    });
    // eslint-disable-next-line
  }, [chapter, book]);

  return (
    <ScrollView>
      <View style={styles.mainview}>
        {/* <Text
          name="book"
          selectedValue={selectedValue}
          value={selectedValue}
          style={styles.bookpicker}
          onChange={(e) => handleSubmit(e)}
          form="book"
        >
          {spanish_books_old_testament.map(({ value, label }) => (
            <Text label={label} value={value} key={value} />
          ))}
        </Text>

        <Text
          name="chapter"
          selectedValue={selectedValue}
          style={styles.chapterpicker}
          onChange={(event) => handleChange(event)}
          form="chapter"
        >
          {_.range(1, numberChapters + 1).map((chapters) => (
            <Text 
              key={chapters}
              label={chapters}
              value={chapters}
              onChange={(e) => {
                setChapter(e.target.value);
              }}
            />
          ))}
        </Text> */}

        <DropDownPicker
        
    items={[
        {label: 'Genesis', value: 'GEN'},
        {label: 'Exodus', value: 'EXO'},

    ]}
    dropDownStyle={{marginTop: 2, backgroundColor:"skyblue"}}
          containerStyle={{ height: 40 }}
    onChangeItem={item => handleSubmit(item.value)}
/>

<DropDownPicker
        
        items={[
            {label: '1', value: '1'},
            {label: '2', value: '2'},
    
        ]}
        dropDownStyle={{marginTop: 2, backgroundColor:"skyblue"}}
              containerStyle={{ height: 40 }}
        onChangeItem={item => handleChange(item.value)}
    />

        {forms.map((chapterinfo) => {
          return (
            <View key={chapterinfo}>
              <Text>{stripHTML(chapterinfo.content)}</Text>
              {isLoading ? !forms : <Text>Loading...</Text>}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
