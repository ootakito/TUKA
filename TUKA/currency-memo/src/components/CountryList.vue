<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const countries = ref([])
const majorCountries = [
  "Japan", "United States", "Germany", "France", "United Kingdom",
  "Italy", "Canada", "Australia", "China", "South Korea"
]

onMounted(async () => {
  console.log("✅ onMounted 実行された！") // ← ここが絶対出るか確認

  const response = await axios.get("https://restcountries.com/v3.1/all")
  const allNames = response.data.map(c => c.name.common)
  console.log("取得された国名一覧:", allNames)

  countries.value = response.data.filter(country =>
    majorCountries.includes(country.name.common)
  )
})


</script>

<template>
  <h2>メモアプリ</h2>
  <ul>
    <li v-for="country in countries" :key="country.name.common">
      {{ country.name.common }}
    </li>
  </ul>
</template>
