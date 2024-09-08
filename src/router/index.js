import { createRouter, createWebHistory } from 'vue-router';
import ItemDetail from '@/components/ItemDetail.vue'; // 상세 페이지 컴포넌트
import ItemTable from '@/components/ItemList.vue'; // 상세 페이지 컴포넌트
import ItemTableV1 from '@/components/ItemListV1.vue'; // 상세 페이지 컴포넌트

const routes = [
    {
      path: '/',
      name: 'Home',
      component: ItemTable, // Home 페이지로 이동
    },
    {
      path: '/v1',
      name: 'HomeV1',
      component: ItemTableV1, // Home 페이지로 이동
    },
    {
        path: '/components/:itemName', //
        name: 'ItemDetail',
        component: ItemDetail,
        props: route => ({ item: route.params.itemData}) 
      },

  ];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

export default router;   
