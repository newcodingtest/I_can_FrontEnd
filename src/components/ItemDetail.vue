<template>
    <div v-if="itemData">
      <h1>의 상세 페이지</h1>
      <p>칼로리: {{ itemData.calories }}</p>
      <p>테스트: {{ itemData.test }}</p>
      <p>테스: {{ itemData.tess }}</p>
    </div>
    <div v-else>
      <p>아이템을 불러오는 중입니다...</p>
    </div>
</template>
test
  <script>
export default {
  data() {
    return {
      itemName: null,  // 초기값 설정
      itemData: ""
    };
  },
  created() {
    // query 파라미터에서 item이 존재하는지 확인한 후에 파싱
    let itemName = this.$route.query.itemName;
    let itemData = this.$route.query.itemData;


    console.log(itemName);
    console.log(itemData);

    if (itemData) {
      try {
        this.itemData = JSON.parse(itemData);
        console.log(itemData);
      } catch (e) {
        console.error('JSON 파싱 중 오류 발생:', e);
      }
    } else {
      console.error('아이템 데이터를 찾을 수 없습니다.');
    }
  }
};
  </script>
  