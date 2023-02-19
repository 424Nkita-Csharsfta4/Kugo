<template>
  <nav class="relative bg-white shadow ">
    <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <a href="#">
          <img class="w-auto h-6 sm:h-7"
            src="https://sun9-east.userapi.com/sun9-31/s/v1/ig2/LEFGRCXKN3W06CjMDX0Zh84To5eIpww51AdGWbRmxDc0ovHa0L297x5v1ddOXpRVZDSWqrwFWlTdmTw2uRRkt_4H.jpg?size=168x52&quality=96&type=album"
            alt="">
        </a>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class=" mb-5 inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
        <div class="flex flex-col md:flex-row md:mx-6 ">
          <RouterLink to="/"
            class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >Сервис</RouterLink>
          <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#">Сотрудничество</a>
          <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#">Заказать звонок</a>
        </div>

        <div class="flex justify-center md:block">
          <a class="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
            href="#">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
          </a>
        </div>
      </div>

    </div>
  </nav>


  <nav class="  px-2 sm:px-4 py-2.5 rounded ">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
          <li>
            <RouterLink to="/"
              class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              aria-current="page">О магазине</RouterLink>
          </li>
          <li>
            <RouterLink to="/"
              class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
              Доставка и оплата</RouterLink>
          </li>
          <li>
            <RouterLink to="/"
              class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out ">
              Тест-драйв</RouterLink>
          </li>
          <li>
            <RouterLink to="/"
              class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
              Блог</RouterLink>
          </li>
          <li>
            <RouterLink to="/"
              class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
            Контакты</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


<Con />


<MobileMenu />
</template>
  
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Con from '@/components/HelloWorld.vue'
import MobileMenu from '@/module/ui/Mobile/MenuMobile.vue'
</script>
