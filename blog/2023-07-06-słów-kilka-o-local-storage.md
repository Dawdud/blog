---
title:  Słów Kilka o local storage
date: 2023-07-06 22:37:34
description: "Jako użytkownicy przyzwyczailiśmy się do tego  iż   aplikacja internetowa dba o dane, które do niej  przekazujemy  i nawet po ponownym uruchomieniu przeglądarki   dane te wciąż będą dostępne. 
Przeglądarka udostępnia nam interfejs LocalStorage z którego możemy skorzystać aby zapisać dane między sesjami przeglądarki. 
 "

image: "./images/container-g4fbc77442_1280.jpg"
slug:  Safety Local StorAGE
---

Jako użytkownicy przyzwyczailiśmy się do tego iż aplikacja internetowa dba o dane, które do niej przekazujemy i nawet po ponownym uruchomieniu przeglądarki dane te wciąż będą dostępne.
Przeglądarka udostępnia nam interfejs LocalStorage z którego możemy skorzystać aby zapisać dane między sesjami przeglądarki.

# Czym jest local storage?

LocalStorage jest właściwością read-only interfejsu window. Dane w localstorage są zachowywane w postaci klucz-wartość. Sam Localstorage jest zapisywany w postaci pliku sqlite przez naszą przeglądarkę. Warto wspomnieć, że choćby taki chrome ustala wielkość localstorage na około 5 mb.

## Metody localstorage

Localstorage posiada kilka metod, które możemy wykorzystać.

SetItem() jest metodą za pomocą której możemy zapisać dane:

```js
localStorage.setItem("user", "exampleUser");
```

Za pomocą GetItem() możemy odczytać dane znajdujące się pod danym kluczem:

```js
localStorage.getItem("user");
```

Rezulatatem wywołatnia takiej funkcji oczywiście powinno być

```js
"exampleUser";
```

jeżeli klucz nie istniej to otrzymamy zwykłego null'a.

Jeżeli chcemy usunąć wartość o podanym kluczu to z pomocą przychodzi nam metoda removeItem

```js
localStorage.removeItem("user");
```

Za pomocą metody clear() czyścimy cały localstorage

```js
localStorage.clear();
```

## Bezpieczeństwo korzystanie z localstorage

Jeżeli chodzi zaś o bezpieczeństwo korzystania z Local storage to należy pamiętać iż podlega on mechanizmowi Same Origin Policy. Jednakże trzeba też pamiętać o tym iż localstorage jest podatny na ataki typu XSS. Cross Site Scritping bo tak też brzmi pełna nazwa wspomnianego ataku polega na wstrzykiwaniu złośliwego skryptu do zaufanej strony, a w tym przypadku naszej aplikacji. Jako że localstorage i złośliwy skrypt mają to samo źódło(origin) to tym łatwiej jest zrozumieć iż taki atak może okazać się dość skuteczny. Z powyższych powodów trzymanie
wrażliwych danych w localstorage nie jest najlepszym pomysłem, a zamiast tego można pomyśleć o choćby session storage w którym dane są przechowywane do momentu zamknięcia karty przeglądarki.

## Przykłady wykorzystania Localstorage

W jaki sposób można wykorzystać localStorage w naszej aplikacji? Przykładowo jeżeli chcemy zapamiętać preferencje użytkownika, które nie są wrażliwymi danymi to przetrzymywanie ich w localstorage’ u jest całkiem niezłym pomysłem. Podobnie ma się sytuacja z wykorzystaniem loacal storage jako cache response’u przychodzącego z api. Jeżeli też chcielibyśmy zapamiętać jedynie nazwę użytkownika to z całą pewnością możemy posiłkować się localStorage. Ostatnim przykładem wykorzystania localstorage może być zapisanie informacji o fontach z którcyh korzysta aplikacja.

## Podsumowanie

Localstorage jest już z nami od jakiegoś czasu i pojawił się wraz z HTML5. Jeżeli chcemy z niego korzystać to warto przemyśleć ten wybór. Zawsze musimy pamiętać o kwestii bezpieczeństwa naszej aplikacji. Z drugiej strony jeżeli potrzebowalibyśmy w projekcie o wiele bardziej zaawansowanego zapisu i dostępu do danych to możemy przemyśleć kwestię Indexdb.
