import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { newtestamentbooks } from "./books/bible_books_newtestament";

import { ScrollView, View, Text, Picker } from "react-native";

import { styles } from "./styles/bibleStyles";

const API_KEY = "4ff44bf1d0mshb58109f3c94d09ep13f9adjsn37028a25638a";

function EnglishNewTestament() {
  const [forms, setForms] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("MATTHEW");
  const [numberChapters, setNumberChapters] = useState([]);

  const handleChange = (event) => {
    setChapter(event.target.value);
  };

  const handleSubmit = (e) => {
    setBook(e.target.value);
  };

  const options = {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
      useQueryString: "true",
    },
  };

  function processData() {
    return forms[0].Output.split(/\s+(?=\d)/g);
  }

  useEffect(() => {
    axios
      .get(
        `https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=${book}&chapter=${chapter}`,
        options
      )
      .then((response) => {
        setForms([response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
    newtestamentbooks.map((item) => {
      if (item.value === book) {
        return setNumberChapters(item.chapters);
      }
    });
    // eslint-disable-next-line
  }, [book, chapter]);
  if (!forms) {
    return <h1>Loading...</h1>;
  }
  return (
    <ScrollView>
      <View style={styles.mainview}>
        <Picker
          style={styles.bookpicker}
          name="book"
          onChange={(e) => {
            handleSubmit(e);
          }}
          form="book"
        >
          {newtestamentbooks.map(({ value, label }) => (
            <Picker.Item label={label} value={value}>
              {label}
            </Picker.Item>
          ))}
        </Picker>

        <Picker
          name="chapter"
          type="text"
          onChange={(event) => handleChange(event)}
          style={styles.chapterpicker}
          form="chapter"
        >
          {_.range(1, numberChapters + 1).map((value) => (
            <Picker.Item
              key={value}
              value={value}
              label={value}
              onChange={(e) => {
                setChapter(e.target.value);
              }}
            >
              {value}
            </Picker.Item>
          ))}
        </Picker>

        {forms.map((chapterinfo) => {
          return (
            <View key={chapterinfo}>
              <br></br>
              {processData().map((data2) => (
                <>
                  <p>{data2}</p>
                </>
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default EnglishNewTestament;
