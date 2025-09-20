<template>
    <footer class="w-full">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
                class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div class="col-span-full text-center mb-10 lg:col-span-2 lg:mb-0">
                    <img :src="logo" class="w-20" alt="">
                    <p class="py-8 text-sm text-gray-500 text-center lg:text-left">Developers Legado</p>
                </div>
                <div class="lg:mx-auto text-left ">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Desarrollo</h4>
                    <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Nosotros</a></li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Acerca de</a>
                        </li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Equipo</a>
                        </li>
                        <li><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Tecnologias</a></li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-left ">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Productos</h4>
                    <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Templates</a></li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Lenguajes</a></li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Dashboards</a></li>
                        <li><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Utilidades</a>
                        </li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Comunidad</h4>
                    <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Equipo</a></li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Instagram</a></li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Facebook</a></li>
                        <li><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Tiktok</a></li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Contacto</h4>
                    <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a href="javascript:;" class="text-gray-600 hover:text-gray-900">Whatsapp</a></li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Instagram</a></li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Facebook</a></li>
                        <li class="mb-6"><a href="javascript:;" class=" text-gray-600 hover:text-gray-900">Tiktok</a></li>
                    </ul>
                </div>
            </div>
            <div class="py-7 border-t border-gray-200">
                <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span class="text-sm text-gray-500 ">©<a href="https://developerslegado.com/">developerslegado</a> {{ new Date().getFullYear() }} , All rights
                        reserved.</span>
                </div>
            </div>
        </div>
    </footer>

</template>
<script setup>
import logo from '../../assets/logos/logo.svg'
</script>