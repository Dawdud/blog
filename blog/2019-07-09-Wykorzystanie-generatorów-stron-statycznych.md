---
title: Wykorzystanie generatorów stron statycznych.
date: 2019-07-09  16:02
description: "Każdy chyba kojarzy stronę na której  po wejściu otrzymujemy  nawigację, treść, która nie ulega zmianie i stopkę. Stronę bez formularzy, bez logowania  i która nie zmienia swojego wyglądu dynamicznie. Jednym słowem zwykła strona, która może posłużyć na przykład jako bardzo prosta wizytówka  firmy.  Pierwsza strona internetowa, która powstała w sierpniu 1991 roku za sprawą Tima-Bernersa-Lee  była właśnie ową stroną statyczną."
image: "./images/engine-3480737_1920.jpg"
slug: first
---

Każdy chyba kojarzy stronę na której po wejściu otrzymujemy nawigację, treść, która nie ulega zmianie i stopkę. Stronę bez formularzy, bez logowania i która nie zmienia swojego wyglądu dynamicznie. Jednym słowem zwykła strona, która może posłużyć na przykład jako bardzo prosta wizytówka firmy. Pierwsza strona internetowa, która powstała w sierpniu 1991 roku za sprawą Tima-Bernersa-Lee była właśnie ową stroną statyczną. Często też na początku nauki front-endu lub po prostu technologii webowych tworzymy proste strony z wykorzystaniem CSS, HTML i odrobiną JavaScriptu. To właśnie o nich dziś będzie mowa, a właściwie o generatorach za pomocą, których możemy stworzyć takie strony.

# No dobrze, ale czym są właściwie generatory stron statycznych i dlaczego warto z nich korzystać?

Generatory stron statycznych pozwalają nam stworzyć strony statyczne jak sama nazwa wskazuje, ale
dzięki generatorom stron statycznych możemy cały layout strony podzielić na oddzielne pliki z na przykład headerm, footerem i nawigacją. Dobrym przykładem może być Gatsby lub Gridsome, gdzie w mamy możliwość korzystania z React albo Vue i możemy bezpośrednio tworzyć layout strony za pomocą oddzielnych komponentów. Następnie, gdy projekt już będzie gotowy to najczęściej za pomocą prostego polecenia build w terminalu budujemy nasz projekt, a to oznacza, że generuje się
folder z zoptymalizowaną stroną, którą możemy umieścić na praktycznie każdym serwerze.

Nie tylko możliwość korzystania z komponentów lub podzielenia layoutu na osobne pliki jest zaletą, które de facto porządkują nasz projekt, ale też trzeba wspomnieć o tym że generatory dbają o samą optymalizację, dzięki czemu strony są o wiele szybsze niż jest to w przypadku pisania strony bez owych generatorów.

Kolejną zaletą są też pliki markdown.
Pliki markdown są po zwykłymi plikami tekstowymi z tą jednak różnicą, że możemy przy pomocy odpowiedniej składni umieszczać informacje o tytule artykułu, dacie lub zdjęciach
oraz zaznaczać że tekst ma być podkreśłony, pogrubiony lub nawet tworzyć tagi h1,h2,h3. Wszystko następnie jest czytane przez program i zamieniane na HTML.

## Odrobinę o bezpieczeństwie

Często wspomina się o problemach bezpieczeństwa związanych z używaniem wordpresa lub Drupala.
Strony statyczne zrealizowane w wyżej wymieniony sposób są bezpieczniejsze z względu na ich prostotę, praktycznie nie mamy tu backendu ani połączeń z bazą danych.

## Problemy z Backendem

Apropos backendu to niejednokrotnie może się zdarzyć, że coś po stronie serwera zostanie uszkodzone albo nastąpi błąd, który uniemożliwi poprawne wyświetlanie
danych na stronie. Znów w przypadku stron statycznych nie mamy tego problemu.

## Pluginy

Generatory posiadają też własne pluginy dzięki, którym w łatwiejszy sposób będzie można na przykład poradzić sobie z google Analitycs na stronie lub lokalizacją samej strony. Tak naprawdę ilość
pluginów jest zależna od danego generatora i niektóre mają ich więcej, a niektóre mają ich nieco mniej.

## version control

Plusem też na pewno jest przechowywanie całego projektu w repozytorium dzięki czemu będziemy
mogli się cofnąć do jakiegokolwiek punktu w czasie powstawania naszej strony internetowej.

## Kiedy nie korzystać z generatorów?

Strony statyczne mogą wyśmienicie się nadać jako strony wizytówki, strony poświęcone portfolio lub nawet blogi taki jak ten. Jednak jeżeli chcielibyśmy dodać możliwość logowania, formularze, dodawanie treści z bazy danych to tego typu strony nie sprawdzają się szczególnie dobrze w takich realiach. Strony statyczne zdecydowanie nie są przeznaczone dla aplikacji typu CRUD(Create Read Update Delete). Warto z nich korzystać, gdy w przypadku prostych stron.
