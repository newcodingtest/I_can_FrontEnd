<template>
    <input
      class="form-control"
      type="text"
      v-model="search"
      placeholder="검색"
    />
  <v-container class="pa-4">
    <v-row>
      <v-col>
      <p>Search Input: {{ search }}</p>
      </v-col>
    </v-row>
    
    <v-card class="mt-4" outlined>
      <v-table class="table-with-border" dense>
        <thead>
          <tr> 
            <th v-for="header in headers" :key="header" class="text-header">
              {{ header }}
            </th>
          </tr> 
        </thead>
        <tbody>
          <tr
            v-for="item in filteredDesserts"
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
    </v-card>

    <v-footer class="footer">
      <v-divider></v-divider>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-2"
          variant="text"
          color="primary"
        ></v-btn>
      </div>

      <div class="footer-text">
        {{ new Date().getFullYear() }} © 윤주영 — <strong>Vuetify</strong>
      </div>
    </v-footer>
  </v-container>
</template>

<script>
import { headers, contents } from '@/assets/TableData.js';

export default {
  data() {
    return {
      desserts: contents,
      headers: headers,
      search: "",
      icons: ['mdi-home', 'mdi-information', 'mdi-contact-mail']
    };
  },
  computed: {
    filteredDesserts() {
      return this.desserts.filter(item =>
        item.itemName.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    goToDetail(item) {
      console.log(item);
      this.$router.push({
        name: 'ItemDetail',
        params: { itemName: item.itemName },
        query: { itemData: JSON.stringify(item) }
      });
    }
  }
};
</script>

<style scoped>
.table-with-border {
  margin-top: 20px;
  border-top: 2px solid #03DAC5;
  border-bottom: 2px solid #03DAC5;
  text-align: center;
}

.text-header {
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  background-color: #6200EA;
  color: white;
}

.element {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.element:hover {
  background-color: #E0F7FA;
}

.footer {
  margin-top: 30px;
  padding-top: 15px;
  background-color: #F5F5F5;
  text-align: center;
}

.footer-text {
  margin-top: 10px;
  font-size: 14px;
  color: #424242;
}

.footer .v-btn {
  color: #03DAC5;
}

.v-btn:hover {
  color: #FF4081;
}

.v-card {
  border-color: #6200EA;
}
</style>
