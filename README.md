# Project : 땡세권

# Stack

- HTML
- CSS
- JavaScript

# API

- Kakao map API
- kakao search API

# Crawling

- 직방

# 목표

집을 구할 때 주변 세권을 알아볼 수 있는 어플리케이션을 만들고 싶었습니다.

1. 직방에서 매물 정보 가져오기
2. 카카오 지도로 클러스터 구현하기
3. 카카오 검색으로 주변 세권 알아보기

# 기능

1. Zoom Level에 따라 지역, 지하철, 매물 클러스터를 보여줍니다.
2. 여러 필터를 적용하여 원하는 매물을 찾을 수 있습니다.
3. 매물 클러스터를 클릭하여 클러스터에 포함된 매물 정보들을 볼 수 있습니다.
4. 매물들을 보증금 or 면적 순으로 정렬할 수 있습니다.
5. 각 매물 클러스터가 어떤 세권을 형성하는지 확인할 수 있습니다.
6. 그 외의 세권도 검색을 통해 확인해 볼 수 있습니다.

# 스크린샷

## HOME

![alt text](image-1.png)

## 매물 클러스터

![alt text](image-2.png)

## 매물 정보

![image](https://user-images.githubusercontent.com/70611956/233365387-c569cfbb-d71e-4b31-882d-b6d804e83cac.png)

## 필터

![alt text](image-3.png)

## 세권

![alt text](image-4.png)

# 어려웠던점

## 1. Promise, async/await 비동기 코드

promise, async/await 를 사용해 봤습니다. 이론적으로 어떤 역할을 하는지 알았지만 막상 실제로 사용해보니 promise로 만든 함수를 async/await로 바꾸는 것조차 어려웠습니다.

## 2. 콜백함수의 첫 사용

콜백함수를 처음 사용하면서 유독 어려웠던 Api가 있습니다.
현재 위치를 얻을 수 있는 api인데 'getCurrentPosition(success,error)' 이렇게 제공이 되어서 position 값을 success 콜백함수의 첫번째 인자로 줍니다.
let position = getCurrentPosition(success,error) 의 형태로 코드를 사용하고 싶어서 promise를 적용하고, resolve를 return한다는 것을 알았기에 position을 resolve로 하여 사용했습니다.
이후 프로젝트를 하며 콜백함수가 익숙해지면서 이 방법은 부적합한 사용법임을 인지하고 success 콜백함수의 내부에서 코드를 작성하여 콜백스럽게 사용했습니다.

## 3. Api의 사용

지도api가 앱에서 원활하게 작동되기까지 적용해야할 것들이 많아 구현에 어려움을 겪었습니다. 예로 Zoom Level이나 드래그로 지도의 위치가 바뀔때마다 다른 종류의 클러스터를 보여야 하고, 보여지는 클러스터의 개수도 달라지기 때문에 이때마다 이벤트를 적용해 모든 클러스터들이 에러 없이 작동해야 했습니다.

## 4. 동적으로 생성되는 요소들

동적으로 생성되는 요소에 이벤트를 등록해야 하고, 그 요소를 클릭하면 또 동적으로 생성되는 요소가 있고, 이벤트를 등록해야했습니다. 이렇다보니 코드가 복잡해져 리팩토링하는데 어려움을 겪었습니다.

## 5. Carousel

매물의 정보중 이미지를 보여줄때 Carousel 기능을 적용하기위해 Carousel에 대해 공부했습니다. 일반적인 Carousel보다 무한 Carousel을 만들어 이미지를 자연스럽게 보여주고싶었습니다. 무한 Carousel은 일반 Carousel보다 몇배는 더 어려웠던것 같습니다. 그래도 여러번 테스트용 Carousel을 만들어보면서 원리를 깨닫고 적용에 성공했습니다.
