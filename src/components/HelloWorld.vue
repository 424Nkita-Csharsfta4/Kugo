<script  lang="ts">
import { defineComponent,ref } from 'vue';
import { RouterLink } from 'vue-router';
import MainProduct from '../module/ui/Product/Basket.vue'




export default defineComponent({
  components: {
    MainProduct,
  },
  setup() {
  const cartItems = ref();



  return {
    cartItems,
  
  };
}

});

</script>

<template>


    <div class="container px-6 py-16 mx-auto bg">
        <div class="items-center lg:flex ">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"><span class="text-blue-500">Новинка</span></h1>

                    <p class="mt-3 text-gray-600 dark:text-gray-400">Электросамокаты Kugoo Kirin от  <span class="font-medium text-blue-500">официального </span> дилера</p>
                     <p class="mt-3 text-gray-600 dark:text-gray-400">с бесплатной доставкой по РФ от 1 дня</p>
                    <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row ">
                     
                        <RouterLink to="/">
                        <button class="w-full px-5  py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Перейти в католог
                        </button>
                    </RouterLink>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full max-w-md" src="https://sun9-east.userapi.com/sun9-20/s/v1/ig2/K5e0HBg3YOudwzpJhTtYavD736Dgnqba0CcXcBooR3TLyYfArqKdIDfvIsYJ4ilwO0RheGXJgpkRDgNBINEg3-3_.jpg?size=538x405&quality=96&type=album" >
            </div>
        </div>
    </div>
   
	<section class="p-6  ">
		<div class="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
			<div class="flex flex-col justify-start m-2 lg:m-6">
				<p class="text-4xl font-bold leading-none lg:text-6xl ">Гарант</p>
				<p class="text-sm sm:text-base mt-2">на весь ассортимент</p>
			</div>
			<div class="flex flex-col justify-start m-2 lg:m-6">
				<p class="text-4xl font-bold leading-none lg:text-6xl ">Кредит</p>
				<p class="text-sm sm:text-base mt-2">от 6 месяцев</p>
			</div>
			<div class="flex flex-col justify-start m-2 lg:m-6">
				<p class="text-4xl font-bold leading-none lg:text-6xl ">Подарки</p>
				<p class="text-sm sm:text-base mt-2">бонусам к покупкам </p>
			</div>
           
		</div>
	</section>
   
        <MainProduct :product="cartItems"  />
    
</template>


<style>
     .bg{
        background-color: #e8e9ff;
     }
</style>
