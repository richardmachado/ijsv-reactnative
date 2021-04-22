import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import { ScrollView, View, Text, Picker } from "react-native";

import { spanish_books_new_testament } from "./books/bible_books_spanish_new_testament";
import { styles } from "./styles/bibleStyles";

export default function SpanishNewTestament() {
  const [selectedValue, setSelectedValue] = useState();
  const [numberChapters, setNumberChapters] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("MAT");
  const [forms, setForms] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function stripHTML(text) {
    return text.replace(/<.*?>/gm, " ");
  }

  const handleChange = (event) => {
    setChapter(event.target.value);
  };

  const handleSubmit = (e) => {
    setBook(e.target.value);
  };
  const options = {
    headers: {
      "Api-key": "59fc91093130021fbd5e3439e270c4b2",
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/${book}.${chapter}`,
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
    spanish_books_new_testament.map((item) => {
      if (item.value === book) {
        return setNumberChapters(item.chapters);
      }
    });
    // eslint-disable-next-line
  }, [chapter, book]);

  return (
    <ScrollView>
      <View style={styles.mainview}>
        <Picker
          name="book"
          selectedValue={selectedValue}
          value={selectedValue}
          style={styles.bookpicker}
          onChange={(e) => handleSubmit(e)}
          form="book"
        >
          {spanish_books_new_testament.map(({ value, label }) => (
            <Picker.Item label={label} value={value} key={value} />
          ))}
        </Picker>

        <Picker
          name="chapter"
          selectedValue={selectedValue}
          style={styles.chapterpicker}
          onChange={(event) => handleChange(event)}
          form="chapter"
        >
          {_.range(1, numberChapters + 1).map((chapters) => (
            <Picker.Item
              key={chapters}
              label={chapters}
              value={chapters}
              onChange={(e) => {
                setChapter(e.target.value);
              }}
            />
          ))}
        </Picker>
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
