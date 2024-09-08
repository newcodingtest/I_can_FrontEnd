<template>
<div class="table-container">
  <div class="search-container">
    <i class="fa fa-search" @click="handleSearchClick"></i> <!-- 검색 아이콘 -->
    <input type="text" class="search-text" v-model="input" placeholder="Search fruits..." />
  </div>
  <v-table class="table-with-border">
    <thead>
    <tr> 
        <th v-for="header in headers" :key="header" class="text-header">
            {{ header }}
        </th>
     </tr> 
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.itemName"
        class="element"
        @click="goToDetail(item)"
      >
        <td>{{ item.itemName }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.test }}</td>
        <td>{{ item.tess }}</td>
      </tr>
    </tbody>
  </v-table>
</div>
    <footer class="copyright">
        © 2024 윤주영
    </footer>
    <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>
<script>
import {headers, contents} from '@/assets/TableData.js';
  export default {
    data () {
      return {
        desserts: contents,
        headers: headers
      }
    },
    methods: {
        goToDetail(item) {  // item 객체를 인자로 받아서
            console.log(item);
            this.$router.push({ 
              name: 'ItemDetail',
              params:{itemName: item.itemName},
              query: {
                itemData: JSON.stringify(item)  // JSON 문자열로 변환하여 전달
              }
            });
        },

        handleSearchClick() {
          // 클릭 시 수행할 동작을 여기에 작성합니다.
          console.log('검색 아이콘 클릭됨');
          // 예: 검색 기능 실행
          //this.performSearch();
        },
      },
   
  }

</script>
<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  box-sizing: border-box;
}

.search-container {
  display: flex;
  align-items: center;
  max-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 0; /* 기본 간격 제거 */
}

.search-container i {
  color: #aaa;
  font-size: 24px; /* 아이콘 크기 조절 */
  margin-right: 10px; /* 아이콘과 입력 필드 간 간격 */
  cursor: pointer; /* 클릭할 수 있는 요소임을 나타냅니다 */
}

.search-container i:hover {
  color: #007bff; /* 호버 시 색상 변경 */
}

.search-text {
  flex: 1; /* 입력 필드가 가능한 모든 공간을 차지하도록 설정 */
  padding: 10px;
  font-size: 14px;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
  margin-top: 10px;
  background-color: #ddd;
}

.table-with-border {
    margin-top: 100px;
    border-top: 1px solid black; /* 상단 선 */
    border-bottom: 3px solid black; /* 하단 선 */
    border-bottom: 1px solid black; /* 헤더 하단 선 */
    text-align: center;
    margin-top: 10px; /* search-container와의 간격 줄이기 (음수 값으로 조정) */
}

/* 반응형 디자인 */
@media (max-width: 600px) {
  .search-container {
    flex-direction: row; /* 화면이 작아지면 세로 방향으로 변경 */
    align-items: flex-start; /* 아이콘과 입력 필드를 왼쪽 정렬 */
  }

  .search-container i {
    margin-right: 0; /* 세로 방향으로 아이콘과 입력 필드 간 간격 제거 */
    margin-bottom: 5px; /* 아이콘과 입력 필드 간의 세로 간격 추가 */
  }
}



.text-header {
  font-weight: bold !important; /* 글자를 굵게 */
  font-size: 20px;
  text-align: center !important;
  height: 60px !important;
  background-color: beige;
}

.copyright {
  font-size: 14px; /* 글자 크기 */
  text-align: center; /* 가운데 정렬 */
  color: #333; /* 글자 색상 */
  padding: 10px 0; /* 위아래 여백 */
  font-weight: bold; /* 글자 굵게 */
}

.element {
 /* font-weight: bold; */
}
</style>