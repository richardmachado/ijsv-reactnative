(this.webpackJsonp = this.webpackJsonp || []).push([
  [0],
  {
    197: function (e, a, t) {
      e.exports = t(198);
    },
    364: function (e, a, t) {
      var l = t(0),
        n = t(2);
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0);
      var r = n(t(1)),
        u = t(26),
        s = t(419),
        c = l(t(449)),
        o = l(t(450)),
        i = l(t(494)),
        h = l(t(495)),
        p = l(t(498)),
        f = l(t(500)),
        m = l(t(502)),
        b = (0, s.createStackNavigator)();
      var v = function () {
        return r.createElement(
          u.NavigationContainer,
          null,
          r.createElement(
            b.Navigator,
            { initialRouteName: "Home" },
            r.createElement(b.Screen, { name: "Home", component: c.default }),
            r.createElement(b.Screen, { name: "Temas", component: o.default }),
            r.createElement(b.Screen, { name: "Bibles", component: i.default }),
            r.createElement(b.Screen, {
              name: "EnglishOldTestament",
              component: h.default,
            }),
            r.createElement(b.Screen, {
              name: "EnglishNewTestament",
              component: p.default,
            }),
            r.createElement(b.Screen, {
              name: "Spanish Old Testament",
              component: f.default,
            }),
            r.createElement(b.Screen, {
              name: "SpanishNewTestament",
              component: m.default,
            })
          )
        );
      };
      a.default = v;
    },
    449: function (e, a, t) {
      var l = t(0);
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function (e) {
          var a = e.navigation;
          return n.default.createElement(
            r.View,
            {
              style: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              },
            },
            n.default.createElement(r.Image, {
              style: { width: 375, height: 325 },
              source: {
                uri: "https://ijsv.netlify.app/static/media/logo.9d4984e3.jpg",
              },
            }),
            n.default.createElement(
              r.View,
              { style: { marginBottom: 30, marginTop: 20 } },
              n.default.createElement(r.Button, {
                title: "Bibles",
                onPress: function () {
                  return a.navigate("Bibles");
                },
              })
            ),
            n.default.createElement(
              r.View,
              null,
              n.default.createElement(r.Button, {
                title: "Temas",
                onPress: function () {
                  return a.navigate("Temas");
                },
              })
            )
          );
        });
      var n = l(t(1)),
        r = t(3);
    },
    450: function (e, a, t) {
      var l = t(2),
        n = t(0);
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function () {
          var e = (0, u.useState)([]),
            a = (0, r.default)(e, 2),
            t = a[0],
            l = a[1];
          if (
            ((0, u.useEffect)(function () {
              s.default
                .get("https://ijsv-backend.herokuapp.com/api/temas")
                .then(function (e) {
                  l(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
            }, []),
            !t)
          )
            return u.default.createElement(
              c.Text,
              {
                style: {
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
              "Loading..."
            );
          return u.default.createElement(
            o.ScrollView,
            { style: i.container },
            u.default.createElement(
              c.View,
              { style: i.textBox },
              t.map(function (e) {
                return u.default.createElement(
                  c.View,
                  { key: e.id },
                  u.default.createElement(c.Text, { style: i.title }, e.title),
                  u.default.createElement(c.Text, { style: i.body }, e.body1),
                  u.default.createElement(c.Text, { style: i.body }, e.body2),
                  u.default.createElement(c.Text, { style: i.body }, e.body3)
                );
              })
            )
          );
        });
      var r = n(t(12)),
        u = l(t(1)),
        s = n(t(46)),
        c = t(3),
        o = t(468);
      var i = c.StyleSheet.create({
        container: {
          backgroundColor: "skyblue",
          paddingTop: 20,
          paddingBottom: 10,
        },
        textBox: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 25,
        },
        header: { textAlign: "center", fontSize: 32, marginBottom: 20 },
        title: { fontWeight: "bold", fontSize: 18, textAlign: "center" },
        body: {
          textAlign: "left",
          marginTop: 5,
          marginBottom: 10,
          marginLeft: 15,
          marginRight: 15,
        },
      });
    },
    47: function (e, a, t) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.styles = void 0);
      var l = t(3).StyleSheet.create({
        mainview: {
          flex: 1,
          alignItems: "center",
          marginLeft: 25,
          marginRight: 25,
        },
        bookpicker: { height: 50, width: 150, marginBottom: 20 },
        chapterpicker: { height: 50, width: 150, marginBottom: 30 },
        buttons: { marginBottom: 30 },
        headers: { textAlign: "center", fontSize: 32, marginBottom: 20 },
      });
      a.styles = l;
    },
    494: function (e, a, t) {
      var l = t(0);
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function (e) {
          var a = e.navigation;
          return n.default.createElement(
            r.View,
            {
              style: {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              },
            },
            n.default.createElement(
              r.Text,
              { style: u.styles.headers },
              "Pick your desired bible"
            ),
            n.default.createElement(
              r.View,
              { style: u.styles.buttons },
              n.default.createElement(r.Button, {
                marginBottom: "100",
                title: "Old Testament",
                onPress: function () {
                  return a.push("EnglishOldTestament");
                },
              })
            ),
            n.default.createElement(
              r.View,
              { style: u.styles.buttons },
              n.default.createElement(r.Button, {
                title: "New Testament",
                onPress: function () {
                  return a.push("EnglishNewTestament");
                },
              })
            ),
            n.default.createElement(
              r.View,
              { style: u.styles.buttons },
              n.default.createElement(r.Button, {
                title: "Antiguo Testamento",
                onPress: function () {
                  return a.push("Spanish Old Testament");
                },
              })
            ),
            n.default.createElement(
              r.View,
              { style: u.styles.buttons },
              n.default.createElement(r.Button, {
                title: "Nuevo Testamento",
                onPress: function () {
                  return a.push("SpanishNewTestament");
                },
              })
            ),
            n.default.createElement(r.Button, {
              color: "black",
              title: "Go back",
              onPress: function () {
                return a.goBack();
              },
            })
          );
        });
      var n = l(t(1)),
        r = t(3),
        u = t(47);
    },
    495: function (e, a, t) {
      var l = t(2),
        n = t(0);
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0);
      var r = n(t(12)),
        u = l(t(1)),
        s = n(t(46)),
        c = n(t(59)),
        o = t(497),
        i = t(3),
        h = t(47);
      var p = function () {
        var e = (0, u.useState)([]),
          a = (0, r.default)(e, 2),
          t = a[0],
          l = a[1],
          n = (0, u.useState)(1),
          p = (0, r.default)(n, 2),
          f = p[0],
          m = p[1],
          b = (0, u.useState)("GENESIS"),
          v = (0, r.default)(b, 2),
          d = v[0],
          E = v[1],
          g = (0, u.useState)([]),
          y = (0, r.default)(g, 2),
          k = y[0],
          S = y[1],
          P = {
            headers: {
              "x-rapidapi-key":
                "4ff44bf1d0mshb58109f3c94d09ep13f9adjsn37028a25638a",
              "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
              useQueryString: "true",
            },
          };
        return (
          (0, u.useEffect)(
            function () {
              s.default
                .get(
                  "https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=" +
                    d +
                    "&chapter=" +
                    f,
                  P
                )
                .then(function (e) {
                  l([e.data]);
                })
                .catch(function (e) {
                  console.log(e);
                }),
                o.oldtestamentbooks.map(function (e) {
                  if (e.value === d) return S(e.chapters);
                });
            },
            [d, f]
          ),
          t
            ? u.default.createElement(
                i.ScrollView,
                null,
                u.default.createElement(
                  i.View,
                  { style: h.styles.mainview },
                  u.default.createElement(
                    i.Picker,
                    {
                      name: "book",
                      style: h.styles.bookpicker,
                      onChange: function (e) {
                        !(function (e) {
                          E(e.target.value);
                        })(e);
                      },
                      form: "book",
                    },
                    o.oldtestamentbooks.map(function (e) {
                      var a = e.value,
                        t = e.label;
                      return u.default.createElement(
                        i.Picker.Item,
                        { key: t, label: t, value: a },
                        t
                      );
                    })
                  ),
                  u.default.createElement(
                    i.Picker,
                    {
                      name: "chapter",
                      type: "text",
                      onChange: function (e) {
                        return (function (e) {
                          m(e.target.value);
                        })(e);
                      },
                      style: h.styles.chapterpicker,
                      form: "chapter",
                    },
                    c.default.range(1, k + 1).map(function (e) {
                      return u.default.createElement(
                        i.Picker.Item,
                        {
                          key: e,
                          value: e,
                          label: e,
                          onChange: function (e) {
                            m(e.target.value);
                          },
                        },
                        e
                      );
                    })
                  ),
                  t.map(function (e) {
                    return u.default.createElement(
                      i.View,
                      { key: e },
                      t[0].Output.split(/\s+(?=\d)/g).map(function (e) {
                        return u.default.createElement(
                          u.default.Fragment,
                          null,
                          u.default.createElement("p", null, e)
                        );
                      })
                    );
                  })
                )
              )
            : u.default.createElement("h1", null, "Loading...")
        );
      };
      a.default = p;
    },
    497: function (e, a) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.oldtestamentbooks = void 0);
      a.oldtestamentbooks = [
        { value: "GENESIS", label: "Genesis", chapters: 50 },
        { value: "EXODUS", label: "Exodus", chapters: 40 },
        { value: "LEVITICUS", label: "Leviticus", chapters: 27 },
        { value: "NUMBERS", label: "Numbers", chapters: 36 },
        { value: "Deuteronomy", label: "Deuteronomy", chapters: 34 },
        { value: "Joshua", label: "Joshua", chapters: 24 },
        { value: "Judges", label: "Judges", chapters: 21 },
        { value: "Ruth", label: "Ruth", chapters: 4 },
        { value: "1 Samuel", label: "1 Samuel (1 Kings)", chapters: 31 },
        { value: "2 Samuel", label: "2 Samuel (2 Kings)", chapters: 24 },
        { value: "1 Kings", label: "1 Kings (3 Kings)", chapters: 22 },
        { value: "2 Kings", label: "2 Kings (4 Kings)", chapters: 25 },
        { value: "1 Chronicles", label: "1 Chronicles", chapters: 29 },
        { value: "2 Chronicles", label: "2 Chronicles", chapters: 36 },
        { value: "Ezra", label: "Ezra", chapters: 10 },
        { value: "Nehemiah", label: "Nehemiah", chapters: 13 },
        { value: "Esther", label: "Esther", chapters: 10 },
        { value: "Job", label: "Job", chapters: 42 },
        { value: "Psalms", label: "Psalms", chapters: 150 },
        { value: "Proverbs", label: "Proverbs", chapters: 31 },
        { value: "Ecclesiastes", label: "Ecclesiastes", chapters: 12 },
        { value: "Song of Solomon", label: "Song of Solomon", chapters: 8 },
        { value: "Isaiah", label: "Isaiah", chapters: 66 },
        { value: "Jeremiah", label: "Jeremiah", chapters: 52 },
        { value: "Lamentations", label: "Lamentations", chapters: 5 },
        { value: "Ezekiel", label: "Ezekiel", chapters: 48 },
        { value: "Daniel", label: "Daniel", chapters: 12 },
        { value: "Hosea", label: "Hosea", chapters: 14 },
        { value: "Joel", label: "Joel", chapters: 3 },
        { value: "Amos", label: "Amos", chapters: 9 },
        { value: "Obadiah", label: "Obadiah", chapters: 1 },
        { value: "Jonah", label: "Jonah", chapters: 4 },
        { value: "Micah", label: "Micah", chapters: 7 },
        { value: "Nahum", label: "Nahum", chapters: 3 },
        { value: "Habakkuk", label: "Habakkuk", chapters: 3 },
        { value: "Zephaniah", label: "Zephaniah", chapters: 3 },
        { value: "Haggai", label: "Haggai", chapters: 2 },
        { value: "Zechariah", label: "Zechariah", chapters: 14 },
        { value: "Malachi", label: "Malachi", chapters: 4 },
      ];
    },
    498: function (e, a, t) {
      var l = t(2),
        n = t(0);
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0);
      var r = n(t(12)),
        u = l(t(1)),
        s = n(t(46)),
        c = n(t(59)),
        o = t(499),
        i = t(3),
        h = t(47);
      var p = function () {
        var e = (0, u.useState)([]),
          a = (0, r.default)(e, 2),
          t = a[0],
          l = a[1],
          n = (0, u.useState)(1),
          p = (0, r.default)(n, 2),
          f = p[0],
          m = p[1],
          b = (0, u.useState)("MATTHEW"),
          v = (0, r.default)(b, 2),
          d = v[0],
          E = v[1],
          g = (0, u.useState)([]),
          y = (0, r.default)(g, 2),
          k = y[0],
          S = y[1],
          P = {
            headers: {
              "x-rapidapi-key":
                "4ff44bf1d0mshb58109f3c94d09ep13f9adjsn37028a25638a",
              "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
              useQueryString: "true",
            },
          };
        return (
          (0, u.useEffect)(
            function () {
              s.default
                .get(
                  "https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=" +
                    d +
                    "&chapter=" +
                    f,
                  P
                )
                .then(function (e) {
                  l([e.data]);
                })
                .catch(function (e) {
                  console.log(e);
                }),
                o.newtestamentbooks.map(function (e) {
                  if (e.value === d) return S(e.chapters);
                });
            },
            [d, f]
          ),
          t
            ? u.default.createElement(
                i.ScrollView,
                null,
                u.default.createElement(
                  i.View,
                  { style: h.styles.mainview },
                  u.default.createElement(
                    i.Picker,
                    {
                      style: h.styles.bookpicker,
                      name: "book",
                      onChange: function (e) {
                        !(function (e) {
                          E(e.target.value);
                        })(e);
                      },
                      form: "book",
                    },
                    o.newtestamentbooks.map(function (e) {
                      var a = e.value,
                        t = e.label;
                      return u.default.createElement(
                        i.Picker.Item,
                        { label: t, value: a, key: t },
                        t
                      );
                    })
                  ),
                  u.default.createElement(
                    i.Picker,
                    {
                      name: "chapter",
                      type: "text",
                      onChange: function (e) {
                        return (function (e) {
                          m(e.target.value);
                        })(e);
                      },
                      style: h.styles.chapterpicker,
                      form: "chapter",
                    },
                    c.default.range(1, k + 1).map(function (e) {
                      return u.default.createElement(
                        i.Picker.Item,
                        {
                          key: e,
                          value: e,
                          label: e,
                          onChange: function (e) {
                            m(e.target.value);
                          },
                        },
                        e
                      );
                    })
                  ),
                  t.map(function (e) {
                    return u.default.createElement(
                      i.View,
                      { key: e },
                      t[0].Output.split(/\s+(?=\d)/g).map(function (e) {
                        return u.default.createElement(
                          u.default.Fragment,
                          null,
                          u.default.createElement("p", null, e)
                        );
                      })
                    );
                  })
                )
              )
            : u.default.createElement("h1", null, "Loading...")
        );
      };
      a.default = p;
    },
    499: function (e, a) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.newtestamentbooks = void 0);
      a.newtestamentbooks = [
        { value: "MATTHEW", label: "Matthew", chapters: 28 },
        { value: "Mark", label: "Mark", chapters: 16 },
        { value: "Luke", label: "Luke", chapters: 24 },
        { value: "John", label: "John", chapters: 21 },
        { value: "Acts", label: "Acts", chapters: 28 },
        { value: "Romans", label: "Romans", chapters: 16 },
        { value: "1 Corinthians", label: "1 Corinthians", chapters: 16 },
        { value: "2 Corinthians", label: "2 Corinthians", chapters: 13 },
        { value: "Galatians", label: "Galatians", chapters: 6 },
        { value: "Ephesians", label: "Ephesians", chapters: 6 },
        { value: "Philippians", label: "Philippians", chapters: 4 },
        { value: "Colossians", label: "Colossians", chapters: 4 },
        { value: "1 Thessalonians", label: "1 Thessalonians", chapters: 5 },
        { value: "2 Thessalonians", label: "2 Thessalonians", chapters: 3 },
        { value: "1 Timothy", label: "1 Timothy", chapters: 6 },
        { value: "2 Timothy", label: "2 Timothy", chapters: 4 },
        { value: "Titus", label: "Titus", chapters: 3 },
        { value: "Philemon", label: "Philemon", chapters: 1 },
        { value: "Hebrews", label: "Hebrews", chapters: 13 },
        { value: "James", label: "James", chapters: 5 },
        { value: "1 Peter", label: "1 Peter", chapters: 5 },
        { value: "2 Peter", label: "2 Peter", chapters: 3 },
        { value: "1 John", label: "1 John", chapters: 5 },
        { value: "2 John", label: "2 John", chapters: 1 },
        { value: "3 John", label: "3 John", chapters: 1 },
        { value: "Jude", label: "Jude", chapters: 1 },
        { value: "Revelation", label: "Revelation", chapters: 22 },
      ];
    },
    500: function (e, a, t) {
      var l = t(2),
        n = t(0);
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function () {
          var e = (0, u.useState)(),
            a = (0, r.default)(e, 2),
            t = a[0],
            l = (a[1], (0, u.useState)([])),
            n = (0, r.default)(l, 2),
            p = n[0],
            f = n[1],
            m = (0, u.useState)(1),
            b = (0, r.default)(m, 2),
            v = b[0],
            d = b[1],
            E = (0, u.useState)("GEN"),
            g = (0, r.default)(E, 2),
            y = g[0],
            k = g[1],
            S = (0, u.useState)([]),
            P = (0, r.default)(S, 2),
            T = P[0],
            _ = P[1],
            w = (0, u.useState)(!1),
            J = (0, r.default)(w, 2),
            C = J[0],
            O = J[1];
          var M = {
            headers: { "Api-key": "59fc91093130021fbd5e3439e270c4b2" },
          };
          return (
            (0, u.useEffect)(
              function () {
                s.default
                  .get(
                    "https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/" +
                      y +
                      "." +
                      v +
                      "?",
                    M
                  )
                  .then(function (e) {
                    _([e.data.data]), O(!0);
                  })
                  .catch(function (e) {
                    console.log(e);
                  }),
                  i.spanish_books_old_testament.map(function (e) {
                    if (e.value === y) return f(e.chapters);
                  });
              },
              [v, y]
            ),
            u.default.createElement(
              o.ScrollView,
              null,
              u.default.createElement(
                o.View,
                { style: h.styles.mainview },
                u.default.createElement(
                  o.Picker,
                  {
                    name: "book",
                    selectedValue: t,
                    value: t,
                    style: h.styles.bookpicker,
                    onChange: function (e) {
                      return (function (e) {
                        k(e.target.value);
                      })(e);
                    },
                    form: "book",
                  },
                  i.spanish_books_old_testament.map(function (e) {
                    var a = e.value,
                      t = e.label;
                    return u.default.createElement(o.Picker.Item, {
                      label: t,
                      value: a,
                      key: a,
                    });
                  })
                ),
                u.default.createElement(
                  o.Picker,
                  {
                    name: "chapter",
                    selectedValue: t,
                    style: h.styles.chapterpicker,
                    onChange: function (e) {
                      return (function (e) {
                        d(e.target.value);
                      })(e);
                    },
                    form: "chapter",
                  },
                  c.default.range(1, p + 1).map(function (e) {
                    return u.default.createElement(o.Picker.Item, {
                      key: e,
                      label: e,
                      value: e,
                      onChange: function (e) {
                        d(e.target.value);
                      },
                    });
                  })
                ),
                T.map(function (e) {
                  return u.default.createElement(
                    o.View,
                    { key: e },
                    u.default.createElement(
                      o.Text,
                      null,
                      e.content.replace(/<.*?>/gm, " ")
                    ),
                    C ? !T : u.default.createElement(o.Text, null, "Loading...")
                  );
                })
              )
            )
          );
        });
      var r = n(t(12)),
        u = l(t(1)),
        s = n(t(46)),
        c = n(t(59)),
        o = t(3),
        i = t(501),
        h = t(47);
    },
    501: function (e, a) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.spanish_books_old_testament = void 0);
      a.spanish_books_old_testament = [
        { value: "GEN", label: "G\xe9nesis", chapters: 50 },
        { value: "EXO", label: "\xc9xodo", chapters: 40 },
        { value: "LEV", label: "Lev\xedtico", chapters: 27 },
        { value: "NUM", label: "N\xfameros", chapters: 36 },
        { value: "DEU", label: "Deuteronomio", chapters: 34 },
        { value: "JOS", label: "Josu\xe9", chapters: 24 },
        { value: "JDG", label: "Jueces", chapters: 21 },
        { value: "RUT", label: "Rut", chapters: 4 },
        { value: "1SA", label: "1 Samuel", chapters: 31 },
        { value: "2SA", label: "2 Samuel", chapters: 24 },
        { value: "1KI", label: "1 Reyes", chapters: 22 },
        { value: "2KI", label: "2 Reyes", chapters: 25 },
        { value: "1CH", label: "1 Cr\xf3nicas", chapters: 29 },
        { value: "2CH", label: "2 Cr\xf3nicas", chapters: 36 },
        { value: "EZR", label: "Esdras", chapters: 10 },
        { value: "NEH", label: "Nehem\xedas", chapters: 13 },
        { value: "EST", label: "Ester", chapters: 10 },
        { value: "JOB", label: "Job", chapters: 42 },
        { value: "PSA", label: "Salmos", chapters: 150 },
        { value: "PRO", label: "Proverbios", chapters: 31 },
        { value: "ECC", label: "Eclesiast\xe9s", chapters: 12 },
        { value: "SNG", label: "Cantares", chapters: 8 },
        { value: "ISA", label: "Isa\xedas", chapters: 66 },
        { value: "JER", label: "Jerem\xedas", chapters: 52 },
        { value: "LAM", label: "Lamentaciones", chapters: 5 },
        { value: "EZK", label: "Ezequiel", chapters: 48 },
        { value: "DAN", label: "Daniel", chapters: 12 },
        { value: "HOS", label: "Oseas", chapters: 14 },
        { value: "JOL", label: "Joel", chapters: 3 },
        { value: "AMO", label: "Am\xf3s", chapters: 9 },
        { value: "OBA", label: "Abd\xeda", chapters: 1 },
        { value: "JON", label: "Jon\xe1s", chapters: 4 },
        { value: "MIC", label: "Miqueas", chapters: 7 },
        { value: "NAM", label: "Nah\xfam", chapters: 3 },
        { value: "HAB", label: "Habacuc", chapters: 3 },
        { value: "ZEP", label: "Sofonias", chapters: 3 },
        { value: "HAG", label: "Hageo", chapters: 2 },
        { value: "ZEC", label: "Zacar\xedas", chapters: 14 },
        { value: "MAL", label: "Malaquias", chapters: 4 },
      ];
    },
    502: function (e, a, t) {
      var l = t(2),
        n = t(0);
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = function () {
          var e = (0, u.useState)(),
            a = (0, r.default)(e, 2),
            t = a[0],
            l = (a[1], (0, u.useState)([])),
            n = (0, r.default)(l, 2),
            p = n[0],
            f = n[1],
            m = (0, u.useState)(1),
            b = (0, r.default)(m, 2),
            v = b[0],
            d = b[1],
            E = (0, u.useState)("MAT"),
            g = (0, r.default)(E, 2),
            y = g[0],
            k = g[1],
            S = (0, u.useState)([]),
            P = (0, r.default)(S, 2),
            T = P[0],
            _ = P[1],
            w = (0, u.useState)(!1),
            J = (0, r.default)(w, 2),
            C = J[0],
            O = J[1];
          var M = {
            headers: { "Api-key": "59fc91093130021fbd5e3439e270c4b2" },
          };
          return (
            console.log(M),
            (0, u.useEffect)(
              function () {
                s.default
                  .get(
                    "https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/chapters/" +
                      y +
                      "." +
                      v,
                    M
                  )
                  .then(function (e) {
                    _([e.data.data]), O(!0);
                  })
                  .catch(function (e) {
                    console.log(e);
                  }),
                  i.spanish_books_new_testament.map(function (e) {
                    if (e.value === y) return f(e.chapters);
                  });
              },
              [v, y]
            ),
            u.default.createElement(
              o.ScrollView,
              null,
              u.default.createElement(
                o.View,
                { style: h.styles.mainview },
                u.default.createElement(
                  o.Picker,
                  {
                    name: "book",
                    selectedValue: t,
                    value: t,
                    style: h.styles.bookpicker,
                    onChange: function (e) {
                      return (function (e) {
                        k(e.target.value);
                      })(e);
                    },
                    form: "book",
                  },
                  i.spanish_books_new_testament.map(function (e) {
                    var a = e.value,
                      t = e.label;
                    return u.default.createElement(o.Picker.Item, {
                      label: t,
                      value: a,
                      key: a,
                    });
                  })
                ),
                u.default.createElement(
                  o.Picker,
                  {
                    name: "chapter",
                    selectedValue: t,
                    style: h.styles.chapterpicker,
                    onChange: function (e) {
                      return (function (e) {
                        d(e.target.value);
                      })(e);
                    },
                    form: "chapter",
                  },
                  c.default.range(1, p + 1).map(function (e) {
                    return u.default.createElement(o.Picker.Item, {
                      key: e,
                      label: e,
                      value: e,
                      onChange: function (e) {
                        d(e.target.value);
                      },
                    });
                  })
                ),
                T.map(function (e) {
                  return u.default.createElement(
                    o.View,
                    { key: e },
                    u.default.createElement(
                      o.Text,
                      null,
                      e.content.replace(/<.*?>/gm, " ")
                    ),
                    C ? !T : u.default.createElement(o.Text, null, "Loading...")
                  );
                })
              )
            )
          );
        });
      var r = n(t(12)),
        u = l(t(1)),
        s = n(t(46)),
        c = n(t(59)),
        o = t(3),
        i = t(503),
        h = t(47);
    },
    503: function (e, a) {
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.spanish_books_new_testament = void 0);
      a.spanish_books_new_testament = [
        { value: "MAT", label: "San Mateo", chapters: 28 },
        { value: "MRK", label: "San Marcos", chapters: 16 },
        { value: "LUK", label: "San Lucas", chapters: 24 },
        { value: "JHN", label: "San Juan", chapters: 21 },
        { value: "ACT", label: "Hechos", chapters: 28 },
        { value: "ROM", label: "Romanos", chapters: 16 },
        { value: "1CO", label: "1 Corintios", chapters: 16 },
        { value: "2CO", label: "2 Corintios", chapters: 13 },
        { value: "GAL", label: "G\xe1latas", chapters: 6 },
        { value: "EPH", label: "Efesios", chapters: 8 },
        { value: "PHP", label: "Filipenses", chapters: 4 },
        { value: "COL", label: "Colonseses", chapters: 4 },
        { value: "1TH", label: "1 Tesalonicenses", chapters: 5 },
        { value: "2TH", label: "2 Tesalonicenses", chapters: 3 },
        { value: "1TI", label: "1 Timoteo", chapters: 6 },
        { value: "2TI", label: "2 Timoteo", chapters: 4 },
        { value: "TIT", label: "Tito", chapters: 3 },
        { value: "PHM", label: "Filem\xf3n", chapters: 1 },
        { value: "HEB", label: "Hebreos", chapters: 13 },
        { value: "JAS", label: "Santiago", chapters: 5 },
        { value: "1PE", label: "1 Pedro", chapters: 5 },
        { value: "2PE", label: "2 Pedro", chapters: 3 },
        { value: "1JN", label: "1 Juan", chapters: 5 },
        { value: "2JN", label: "2 Juan", chapters: 1 },
        { value: "3JN", label: "3 Juan", chapters: 1 },
        { value: "JUD", label: "Judas", chapters: 1 },
        { value: "REV", label: "Apocalipsis", chapters: 22 },
      ];
    },
  },
  [[197, 1, 2]],
]);
//# sourceMappingURL=app.c94e5e9f.chunk.js.map
