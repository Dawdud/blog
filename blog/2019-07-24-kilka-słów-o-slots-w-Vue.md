---
title: Kilka słów o Slots w Vue
date: 2019-07-24 20:49:34
description: "Gdy zaczynałem naukę Vue,  sloty wydawały mi się trudne w użyciu i nie  do końca wiedziałem w jaki sposób mógłbym ich użyć?  Szybko więc się odbiłem od tematu i  pisałem kod nawet nie rozważając ich użycia. Zdecydowanie był to błąd i dopiero po  jakimś czasie zrozumiałem jak ogromny potencjał tkwi w wykorzystaniu slotów.  Podzielę się trochę wiedzą na ich temat oraz tym jak z nich korzystam. "

image: "./images/storage-1209606_1920.jpg"
slug: first
---

Gdy zaczynałem naukę Vue, sloty wydawały mi się trudne w użyciu i nie do końca wiedziałem dlaczego miałbym ich użyć? Szybko więc się odbiłem od tematu i pisałem kod nawet nie rozważając ich użycia. Zdecydowanie był to błąd i dopiero po jakimś czasie zrozumiałem jak ogromny potencjał tkwi w wykorzystaniu slotów. Podzielę się trochę wiedzą na ich temat oraz tym jak z nich korzystam.

# Koncepcja slotów

Zakładam, że ktoś kto będzie czytał ten post będzie już znał podstawy Vue i z tego względu też nie chcę skupiać się w tym poście na objaśnianiu podstawowych pojęć związanych z tym frameworkiem.
Sloty ogólne rzecz biorąc są mechanizmem, który pozwala nam na tworzenie komponentów wielokrotnego użytku. Mechanizm ten na pewno ułatwia korzystanie z pewnej znanej programistom reguły DRY( Don’t Repeat Yourself). Cały trik polega na tym że sloty dają nam możliwość umieszczenia lub zmiany treści jeżeli komponent dziecka zaimportujemy do rodzica. Sloty w Vue.js możemy rozumieć jako miejsce w ktorym umieszczamy nową treść lub pozostawiamy tą domyślnie zadeklarowaną.

> Child.vue

```html
<template>
  <div>
    <p>Hej, jestem komponentem dziecka!</p>
    <slot />
  </div>
</template>
```

> app.vue

```html
<template>
  <div>
    <child>
      <p>A ja jestem treścią dodaną w rodzicu!</p>
    </child>
  </div> </template
>;
<script>
  import Child from "./Child.vue";
  export default {
    components: {
      child: Child
    }
  };
</script>
```

Jak widać powyżej w rodzicu możemy dodać dowolną treść czego efektem ostatecznym będzie wyrenderowanie:

```html
<div>
  <p>Hej, jestem komponentem dziecka!</p>
  <p>A ja jestem treścią dodaną w rodzicu!</p>
</div>
```

Tutaj też warto nadmienić, że możemy użyć nie jeden a kilka razy slotów w naszym komponencie dziecka, dzięki czemu będziemy mogli na przykład za pomocą mechanizmu
wyszczególnić header, footer i section. Jednakże aby użyć więcej niż jednego slotu w komponencie musimy każdemu poszczególnemu slotowi nadać nazwę do której będziemy się odnosili.

> Child.vue

```html
<template>
  <div>
    <header>
      <slot name="”header”"><h2>Tytuł</h2></slot>
    </header>
    <section class="”slot__body”">
      <slot name="”body”"> </slot>
    </section>
    <footer>
      <slot name="”" footer”> <p>standardowa stopka</p></slot>
    </footer>
  </div> </template
>;
```

> App.vue

```html
<template>
  <child>
    <template v-slot:header>
      <h2>Nowy tytuł nadany przez rodzica</h2>
    </template>
    <template v-slot:body>
      <p>Treść, która zostanie dodana do section dziecka</p>
    </template>
    <template v-slot:footer>
      <p>zmiana standardowej treści stopki na własną</p>
    </template>
  </child>
</template>
```

Istnieje też coś co nazywamy Scoped slots. Wymieniony rodzaj slotów jest szczególnie przydatny jeżeli chcielibyśmy przekazać dane z komponentu dziecka posiadajcego sloty do rodzica.

> Child.vue

```html
<template>
  <span>
    <slot v-bind:car="”car”">
      {{ car.type}}
    </slot>
  </span>
</template>
<script>
   export default {
    data () {
      return {
        car: ...
      }
    }
  }
</script>
```

> app.vue

```html
<template>
  <child>
    <template v-slot:default="slotProps">
      {{ slotProps.car.type }}
    </template>
  </child>
</template>
```

## Dlaczego korzystam z Slotów?

Sloty są dla mnie mechanizmem, który pozwala mi na przykład napisać komponent modal, który wykorzystam wielokrotnie na wiele sposobów. Oczywiście też można spróbować zastosować sloty w przypadku samego layoutu. Czytałem ostatnio, że biblioteki UI korzystają z tego mechanizmu by na przykład stworzyć komponent nawigacji? Sloty również przydają się w przypadku pisania renderless components w Vue. Na ten temat postaram się jeszcze coś napisać niebawem.
[Tutaj można znaleźć nieco więcej informacji o samym renderless components](https://css-tricks.com/building-renderless-vue-components/). [Tutaj zaś można znaleźć informacje na temat samych slotów](https://www.smashingmagazine.com/2019/07/using-slots-vue-js/).
