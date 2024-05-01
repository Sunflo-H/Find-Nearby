import kakaoMap from "./module/kakaoMap.js";

/**
 * - 사용자의 위치로 지도의 중앙값을 정하는 함수
 */
function setCenterToUserLocation() {
  navigator.geolocation.getCurrentPosition((pos) => {
    kakaoMap.map.setCenter(
      new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
    );
    kakaoMap.map.setLevel(6);
  });
  // ! 리팩토링 전 코드
  // return new Promise((resolve, reject) => {
  //   navigator.geolocation.getCurrentPosition(resolve, reject); // success, error
  //   // navigator.geolocation.getCurrentPosition((pos) => {
  //   //   console.log(pos);
  //   // }, reject); // success, error
  // });
}

/**
 * - 프로그램 시작시 실행되는 초기화 함수
 */
function init() {
  kakaoMap.createLocalOverlay();
  kakaoMap.createSubwayOverlay().then(() => {
    kakaoMap.displaySubwayOverlay(true);
  });
  setCenterToUserLocation();
  // createRoomSection(null);
  //! 이게 지금 여기보다 더 적절한 곳에 있어야해
  //! 이게 없으면 제일 처음 필터를 누를때 제대로 안나와 근데 이게 꼭 여기는 없어도 되니까 더 적절한 곳을 찾아봐
  //! filter.createFilterOptionContent_price("전체");

  // ! 리팩토링 전 코드
  // getUserLocation().then((data) => {
  //   console.log(data);
  //   kakaoMap.map.setCenter(
  //     new kakao.maps.LatLng(data.coords.latitude, data.coords.longitude)
  //   );
  //   kakaoMap.map.setLevel(6);

  //   setTimeout(() => {
  //     kakaoMap.displayLocalOverlay(false);
  //     kakaoMap.displaySubwayOverlay(true);
  //   }, 200);
  // });
  // setTimeout(() => {
  //   kakaoMap.displayLocalOverlay(false);
  //   kakaoMap.displaySubwayOverlay(true);
  // }, 200);
}

init();
