---
title: Headless browser i puppeteer?
date: 2019-07-16 16:37:34
description: "Ostatnio postanowiłem, że dam sobie chwile wytchnienia i poszukam jakiegoś ciekawego tematu nie związanego bezpośrednio z Front Endem, ale z samym programowaniem w Js. Często oglądam materiały na kanale Hello Roman i szczerze powiedziawszy odnalazłem tam temat, który mnie nieco zainspirował i zaciekawił. Mianowicie dowiedziałem się o Pupeteerze i o Headless browser czyli dzisiejszym temacie tego postu."

image: "./images/theater-568051_1920.jpg"
slug: first
---

Ostatnio postanowiłem, że dam sobie chwile wytchnienia i poszukam jakiegoś ciekawego tematu nie związanego bezpośrednio z Front Endem, ale z samym programowaniem w Js. Często oglądam materiały na kanale Hello Roman i szczerze powiedziawszy odnalazłem tam temat, który mnie nieco zainspirował i zaciekawił. Mianowicie dowiedziałem się o Pupeteerze i o Headless browser czyli dzisiejszym temacie tego postu.

# headless browser z głową

Każdy dzisiaj korzysta z przeglądarki aby wyświetlić interesującą nas stronę internetową. Wielu użytkowników korzysta też z przeglądarki Chrome, która jest niezwykle popularna zarówno na urządzeniach przenośnych oraz na komputerach. Headless browser też jest przeglądarką internetową, ale różni się tym że nie mamy całego UI jaką posiada przeglądarka. Ściślej mówiąc nie posiadamy żadnych przycisków, pól tekstowych i menu z którego możemy skozystać. Mamy za to dostęp do
wszystkich możliwości jakie może dać nam zwykła przeglądarka z poziomu kodu źródłowego. Dlaczego wspomniałem o Chromie?
Google udostępniło właśnie tą przeglądarkę właśnie w wersji headless, z czego skwapliwie skorzystałem. Należy jednak wspomnieć o tym że mamy też możliwość skorzystania z firefoxa jeżeli chcielibyśmy wykorzystać w projekcie taki rodzaj przeglądarki. Jednak samo korzystanie z headless chrome z poziomu kodu byłoby uciążliwe ponieważ nie zawiera ona bezpośrednio abstrakcji, która pozwoliłaby w łatwy sposób jej obsłużenie. Właśnie w tym momencie przydaje się
biblioteka, która ułatwi nam wykorzystanie możliwości takiego chrome’a i tu pojawia się Pupeteer, który znacznie upraszcza cały proces.

## Puppeter i korzystanie z Api

Pupeteer udostępnia nam Api, które możemy nie tylko wykorzystać chcąc użyć headless browser, ale też możemy tą bibliotekę użyć aby z poziomu kodu porozumieć się z zwykłą przeglądarką, która znajduje się na wielu komputerach użytkowników. Instalując tą bibliotekę za pomocą npm instalujemy jednak tak naprawdę nie tylko samą bibliotekę do komunikacji z przeglądarką, ale też sam Headless browser, co chwile może potrwać. Zainstalowawszy Puppeteera jesteśmy już gotowi do programowania aplikacji, która będzie wykorzystywała chrome.

## Dlaczego warto czasem zgubić głowę?

Google udostępniło programistom narzędzie, które ma wiele zastosowań i które może zautomatyzować i uprośćić wiele czynności.

Jednym z zastosowań Puppeteera jest pisanie testów E2E czyli End to End, o których kiedyś pewnie też napiszę. W skrócie testy End to End to testy, które sprawdzają czy po kliknięciu lub wpisaniu czegoś w pole tekstowe naszej aplikacji napisanej np. w React coś się wykrzaczy i czy nie otrzymamy błędu? Testy E2E zachowują się jak użytkownik, który wchodzi na stronę i klika każdy możliwy element.

Kolejnym zastosowaniem Puppeteera może być webscraping. Taka aplikacja wchodzi na przykładową stronę, odczytuje jej strukturę i może na przykład pobrać informacje, które nas interesują bezpośrednio z strony internetowej. Jest t to o tyle przydatne, że niekiedy strony internetowe nie udostępniają API z którego można byłoby skorzystać i pobrać odpowiednie dane by następnie je przetworzyć dla własnych celów. Trzeba jednak pamiętać, że nie każde prawo zezwala na tego typu działanie programów więc najlepiej jest porozumieć się z właścicielem strony i zapytać, czy przypadkiem nie moglibyśmy wykorzystać jego strony w taki sposób?

Jednym z zastosowań też jest pisanie botów. Możemy za pomocą Puppeteer napisać aplikację, która będzie się logowała do Portalu społecznościowego i załóżmy klikała polubienia dla odpowiednich postów lub zdjęć, które są w kręgu naszych zainteresowań. Tutaj jednak też wkrada się prawo i trudno powiedzieć, czy takie zachowanie programu będzie zgodne z regulaminem danego portalu?? Znów lepiej jest przeczytać regulamin lub skontaktować się z właścicielem witryny żeby się upewnić, że to co robimy będzie legalne.

Innym ciekawym zastosowaniem jest robienie screenów i tworzenie plików pdf z tych właśnie
obrazów. Czasem może się to przydać jak chcemy zachować jakąś treść dla siebie, a przykładowo
nie będziemy mogli się połączyć z internetem przez jakiś czas.
