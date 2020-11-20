/* eslint-disable */
<template>
  <div class="body">
    <div class="form-group">
      <label>Registration</label>
      <input type="text" v-model="registration" class="registration" />
    </div>
    <div class="form-group">
      <button type="submit" @click="getMot()">Lookup</button>
    </div>

    <div class="results">
      {{ history }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      registration: "",
      history: "",
    };
  },
  methods: {
    getMot() {
      fetch("https://api.dsm.pw/api/mot", {
        method: "POST",
        body: JSON.stringify({ registration: this.registration }),
      })
        .then((res) => res.json())
        .then((json) =>  {
          this.history = json.meta.data;
        })
        .catch(err => {
          console.log(err);
        })

      console.log(this.registration);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.body {
  background-color: black;
  height: 100vh;
  width: 100vw;
}
</style>
