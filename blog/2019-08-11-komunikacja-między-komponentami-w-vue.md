---
title: Komunikacja między komponentami w Vue.
date: 2019-07-30 20:49:34
description: "Ostatnio nieco myślałem na temat samej komunikacji między komponentami w przypadku Vue,
temat jest o tyle ciekawy, że możemy realizować tą komunikację na parę sposobów. Na tą chwilę myślę o jakichś dwóch lub trzech postach, które pojawią się na tym blogu i będą związane z tym zagadnieniem. Dziś postaram się przedstawić tą najprostszą możliwą komunikację między dwoma komponentami czyli rodzicem, a dzieckiem.
 "

image: "./images/michelangelo-71282_1280.jpg"
slug: first
---

Ostatnio nieco myślałem na temat samej komunikacji między komponentami w przypadku Vue,
temat jest o tyle ciekawy, że możemy realizować tą komunikację na parę sposobów. Na tą chwilę myślę o jakichś dwóch lub trzech postach, które pojawią się na tym blogu i będą związane z tym zagadnieniem. Dziś postaram się przedstawić tą najprostszą możliwą komunikację między dwoma komponentami czyli rodzicem, a dzieckiem.

#Czym są propsy i jak wygląda komunikacja między komponentem rodzica, a dziecka?

Załóżmy, że napisaliśmy jakiś komponent, który zawiera dane, które możemy wyświetlić używając
template’u.

> Parrent

```js
<template>
  <div>
    <p>{{importantData}}</p>
  </div>
</template>

<script>
export default {
  name: 'parrent',
  data(){
    return{
      importantData: "some data"
    }
  }
};
</script>


<style scoped lang="scss">

</style>
```

Jednakże w miarę jak nasza aplikacja się rozrasta potrzebujemy dodać nowy komponent lub komponenty, które będą dziećmi naszego pierwszego komponentu rodzica.

```js

<template>
 <div>
   <p>{{importantData}}</p>
   <Child></Child>
 </div>
</template>

<script>
import Child from "./child";
export default {
 name: "e",
 data() {
   return {
     importantData: "some data"
   };
 },
 components: {
   Child
 }
};
</script>

```

W tym momencie też zaczynamy myśleć, że jednak dobrze byłoby żeby dziecko też mogło wykorzystać tą niezwykle ważną zmienną, którą posiada rodzic? W tym momencie pojawiają się propsy. Dzięki propsom będziemy mogli przekazać zmienną z rodzica do dziecka. Oto jak przekazujemy dane do dziecka.

```js

 <Child :importantdata="importantData"></Child>
```

Koniecznie w komponencie dziecka musimy zadeklarować iż przyjmujemy propsy od rodzica.
Tak oto wygląda komponent dziecka.

```js

<template>
  <div>
    <p>{{importantData}}</p>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ["importantData"]
};
</script>
```

##Zapis propsów

Tutaj też można zaznaczyć, że możemy propsy przekazywać w tablicy jako zwykłe stringi, ale o wiele lepszym rozwiązaniem jest to by zadeklarować jako obiekt i przedstawić typ danej zmiennej
dzięki temu nasz kod będzie nieco czytelniejszy.

```
<script>
export default {
  name: "child",
  props: {
    importantData: String
  }
};
</script>
```

## Komunikacja dziecka z rodzicem czyli emit’y

Istnieje też możliwość żeby przekazać zmienną z komponentu dziecka do rodzica. Załóżmy, że nasz komponent dziecka zawiera przycisk, który po kliknięciu zwraca pobrane dane i chcielibyśmy te dane wyświetlić w rodzicu. W takim momencie przydaje się nam \$emit dzięki któremu będziemy mogli przekazać te dane do rodzica. A oto jak wygląda przykładowy emit.

```js
this.$emit("clicked", "some fetched data");
```

> Komponent dziecka

```js

<template>
  <div>
    <p>{{importantData}}</p>
    <button @click="fetchData">fetch data</button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: {
    importantData: String
  },
  methods: {
    fetchData(event) {
      this.$emit("clicked", "some fetched data");
    }
  }
};
</script>


<style scoped lang="scss">
</style>
```

W komponencie rodzica emit wywołujemy przy pomocy nazwy eventu, który sobie nadaliśmy używając emitu, w tym przypadku będzie to po prostu `clicked`, ale ta nazwa może być dowolna. Następnie możemy przy pomocy metody odczytać wartość, którą otrzymujemy przez emit.

> komponent rodzica

```
<template>
  <div>
    <p>{{importantData}}</p>
    <Child :importantdata="importantData" @clicked="clickChild"></Child>
  </div>
</template>

<script>
import Child from "./child";
export default {
  name: "e",
  data() {
    return {
      importantData: "some new data"
    };
  },
  methods: {
    clickChild(value) {
      console.log(value);
    }
  },
  components: {
    Child
  }
};
</script>
```

Props i emit są to najczęściej wykorzystywane mechanizmy do prostej komunikacji między dzieckiem, a rodzicem. Tutaj też warto na pewno wspomnieć, że możemy emitować dane z dziecka, ale to rodzic będzie decydował w jaki sposób zostaną wykorzystane. Dobrym przykładem może być że klikając na przycisk zamknięcia okna modalnego wykonamy emit do rodzica zmieniając
wartość zmiennej ``showModal``` z true na false. [Tutaj można odnaleźć oficjalny przykład.](https://jsfiddle.net/yyx990803/mwLbw11k/?utm_source=website&utm_medium=embed&utm_campaign=mwLbw11k)
