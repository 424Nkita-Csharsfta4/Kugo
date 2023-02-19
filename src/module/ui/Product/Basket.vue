<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-4">Корзина товаров</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div v-for="(item, index) in products" :key="item.id" class="bg-white overflow-hidden shadow rounded-lg">
                    <img :src="item.image" :alt="item.title" class="h-48 w-full object-cover">
                    <div class="p-4">
                        <div class="font-bold text-xl mb-2">{{ item.title }}</div>
                        <p class="text-gray-700 text-base">{{ item.description }}</p>
                        <div class="mt-4">
                            <span class="font-bold text-lg">{{ item.price }} руб.</span>
                            <div class="flex items-center mt-2.5 mb-5">
                                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <span
                                    class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                            </div>
                            <button @click="addItemToCart(item)" type="button"
                                class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Добавить в корзину
                            </button>
                          
                                <button class="ml-2 text-white px-4 py-2 rounded"
                                 @click="isOpen = true">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
<path d="M16.9951 3.51484C16.7344 2.90528 16.3586 2.35291 15.8886 1.88864C15.4182 1.42298 14.8637 1.05293 14.2551 0.798611C13.624 0.533848 12.9471 0.398328 12.2637 0.399916C11.305 0.399916 10.3696 0.665058 9.55675 1.16588C9.36229 1.28569 9.17754 1.41727 9.00252 1.56065C8.8275 1.41727 8.64276 1.28569 8.44829 1.16588C7.63542 0.665058 6.70004 0.399916 5.74132 0.399916C5.05096 0.399916 4.382 0.533469 3.74998 0.798611C3.13935 1.05393 2.58901 1.4212 2.11646 1.88864C1.64584 2.35239 1.2699 2.90489 1.00994 3.51484C0.739634 4.14922 0.601562 4.82287 0.601562 5.51617C0.601562 6.17019 0.7338 6.8517 0.99633 7.54499C1.21608 8.12438 1.53111 8.72537 1.93366 9.33225C2.57151 10.2926 3.44855 11.2943 4.53757 12.3097C6.34222 13.9929 8.12937 15.1555 8.20521 15.2027L8.6661 15.5012C8.87029 15.6328 9.13282 15.6328 9.33701 15.5012L9.79789 15.2027C9.87374 15.1536 11.6589 13.9929 13.4655 12.3097C14.5545 11.2943 15.4316 10.2926 16.0694 9.33225C16.472 8.72537 16.789 8.12438 17.0068 7.54499C17.2693 6.8517 17.4015 6.17019 17.4015 5.51617C17.4035 4.82287 17.2654 4.14922 16.9951 3.51484ZM9.00252 13.9477C9.00252 13.9477 2.07951 9.46776 2.07951 5.51617C2.07951 3.51484 3.71886 1.89257 5.74132 1.89257C7.16287 1.89257 8.39579 2.69388 9.00252 3.86443C9.60926 2.69388 10.8422 1.89257 12.2637 1.89257C14.2862 1.89257 15.9255 3.51484 15.9255 5.51617C15.9255 9.46776 9.00252 13.9477 9.00252 13.9477Z" fill="#6F73EE"/>
</svg>
                                </button>
                           
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8">

                <div v-if="cartItems.length === 0" class="text-center">
                    Корзина пуста
                </div>
                <div v-if="cartItems.length > 0">
                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <ul class="divide-y divide-gray-200">
                            <li v-for="(item, index) in cartItems" :key="index">
                                <div class="flex items-center justify-between px-4 py-4 sm:px-6">
                                    <div class="flex items-center">
                                        <img :src="item.image" :alt="item.title" class="h-10 w-10 rounded-full">
                                        <div class="ml-3">
                                            <div class="text-sm font-medium text-gray-900">{{ item.title }}</div>
                                            <div class="text-sm text-gray-500">{{ item.price }} руб.</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center">
                                        <button @click="removeItemFromCart(index)" type="button"
                                            class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="text-right mt-4">
                        <div class="text-lg font-medium text-gray-900">Итого: {{ getTotalPrice() }} руб.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Card/>
    <CardAnimation/>
    <Question/>
    <Slider/>
    <Footer/>
</template>
  
<script lang="ts">

import Card from './ProductCard.vue'
import CardAnimation from '../Animation/CardCommentHover.vue'
import Question from '../Animation/Questions.vue'
import Slider from '../Animation/SliderCard.vue'
import Footer from '@/components/Footer.vue'
import { defineComponent, ref } from 'vue';



interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

const products: Product[] =
    [
        {
            id: 1,
            title: 'Kugoo Kirin M4',
            description: 'Самокат для езды',
            price: 29900,
            image: 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/B6CKc0bZm2aWmZVS5OQPnl2po9Wev57eFB_BhnZe_gHpjz6CG5pfnF2V887wlzZjClKo310PDHWUonu1xL7c11wp.jpg?size=255x231&quality=96&type=album',
        },
        {
            id: 2,
            title: 'Kugoo Kirin M4',
            description: 'Самокат для езды',
            price: 29900,
            image: 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/B6CKc0bZm2aWmZVS5OQPnl2po9Wev57eFB_BhnZe_gHpjz6CG5pfnF2V887wlzZjClKo310PDHWUonu1xL7c11wp.jpg?size=255x231&quality=96&type=album',
        },
        {
            id: 3,
            title: 'Kugoo Kirin M4',
            description: 'Самокат для езды',
            price: 29900,
            image: 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/B6CKc0bZm2aWmZVS5OQPnl2po9Wev57eFB_BhnZe_gHpjz6CG5pfnF2V887wlzZjClKo310PDHWUonu1xL7c11wp.jpg?size=255x231&quality=96&type=album',
        },
        {
            id: 4,
            title: 'Kugoo Kirin M4',
            description: 'Самокат для езды',
            price: 29900,
            image: 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/B6CKc0bZm2aWmZVS5OQPnl2po9Wev57eFB_BhnZe_gHpjz6CG5pfnF2V887wlzZjClKo310PDHWUonu1xL7c11wp.jpg?size=255x231&quality=96&type=album',
        },
        {
            id: 5,
            title: 'Kugoo Kirin M4',
            description: 'Самокат для езды',
            price: 29900,
            image: 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/B6CKc0bZm2aWmZVS5OQPnl2po9Wev57eFB_BhnZe_gHpjz6CG5pfnF2V887wlzZjClKo310PDHWUonu1xL7c11wp.jpg?size=255x231&quality=96&type=album',
        },
        {
            id: 6,
            title: 'Kugoo Kirin M4',
            description: 'Самокат для езды',
            price: 29900,
            image: 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/B6CKc0bZm2aWmZVS5OQPnl2po9Wev57eFB_BhnZe_gHpjz6CG5pfnF2V887wlzZjClKo310PDHWUonu1xL7c11wp.jpg?size=255x231&quality=96&type=album',
        },
        {
            id: 7,
            title: 'Kugoo Kirin M4',
            description: 'Самокат для езды',
            price: 29900,
            image: 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/B6CKc0bZm2aWmZVS5OQPnl2po9Wev57eFB_BhnZe_gHpjz6CG5pfnF2V887wlzZjClKo310PDHWUonu1xL7c11wp.jpg?size=255x231&quality=96&type=album',
        },
        {
            id: 8,
            title: 'Kugoo Kirin M4',
            description: 'Самокат для езды',
            price: 29900,
            image: 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/B6CKc0bZm2aWmZVS5OQPnl2po9Wev57eFB_BhnZe_gHpjz6CG5pfnF2V887wlzZjClKo310PDHWUonu1xL7c11wp.jpg?size=255x231&quality=96&type=album',
        },

    ];

export default defineComponent({
    name: 'Basket',
    components: {
        
        Card,
        CardAnimation,
        Question,
        Slider,
        Footer,
    },
    props: {
    product: {
     
      required: true,
    },
  },

    setup(props) {
        const cartItems = ref<Product[]>([]);
        const isOpen = ref(false)
      




        function addItemToCart(product: Product) {
            cartItems.value.push(product);
        }
        
        

        function removeItemFromCart(index: number) {
            cartItems.value.splice(index, 1);
        }

        function getTotalPrice() {
            return cartItems.value.reduce((acc, item) => acc + item.price, 0);
        }

        return {
            products,
            cartItems,
            addItemToCart,
            removeItemFromCart,
            getTotalPrice,
            isOpen,
            product: props.product,
        };
    },
});

</script>
  