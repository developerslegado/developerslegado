<template>
  <Disclosure as="nav" class="relative bg-slate-50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-20 items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-slate-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex shrink-0 items-center">
          <NuxtLink to="/"><img :src="logo" class="h-14" alt=""></NuxtLink>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
          <!-- <div class="hidden sm:ml-6 md:block self-center">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'bg-slate-100 text-slate-800' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-700', 'transition duration-150 ease-in-out rounded-md px-3 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div> -->
          <!-- submenu -->
          <div class="hidden sm:ml-6 md:block self-center">
            <div class="flex space-x-4">
              <template v-for="item in navigation" :key="item.name">
                <!-- Servicios con submenu -->
                <Popover v-if="item.name === 'Servicios'" class="relative">
                  <PopoverButton
                    class="flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                    {{ item.name }}
                    <ChevronDownIcon class="size-4" />
                  </PopoverButton>

                  <transition enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 translate-y-1" enter-to-class="translate-y-0"
                    leave-active-class="transition ease-in duration-150" leave-from-class="translate-y-0"
                    leave-to-class="opacity-0 translate-y-1">
                    <PopoverPanel
                      class="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/3 bg-transparent px-4">
                      <div
                        class="w-screen max-w-4xl flex-auto overflow-hidden rounded-b-3xl bg-slate-50 text-sm/6 outline-1 -outline-offset-1 outline-white/10">
                        <div class="p-4 grid grid-cols-2 gap-4">
                          <div v-for="s in solutions" :key="s.name"
                            class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                            <div
                              class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-slate-300/50 group-hover:bg-slate-300">
                              <component :is="s.icon" class="size-6 text-slate-800 group-hover:text-slate-900"
                                aria-hidden="true" />
                            </div>
                            <div>
                              <a :href="s.href" class="font-semibold text-slate-700">
                                {{ s.name }}
                                <span class="absolute inset-0" />
                              </a>
                              <p class="text-slate-500">{{ s.description }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <!-- El resto de items normales -->
                <a v-else :href="item.href" :class="[item.current ? 'bg-slate-100 text-slate-800' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-700',
                  'transition duration-150 ease-in-out rounded-md px-3 py-2 text-sm font-medium']"
                  :aria-current="item.current ? 'page' : undefined">
                  {{ item.name }}
                </a>
              </template>
            </div>
          </div>
        </div>
        <div
          class="hidden sm:ml-6 absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Menu as="div" class="relative ml-3">
            <MenuButton
              class="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">Open user menu</span>
              <UserCircleIcon class="mr-1.5 -ml-0.5 size-8" aria-hidden="true" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-50 py-1 shadow-md">
                <MenuItem v-slot="{ active }">
                <NuxtLink href="/login"
                  :class="[active ? 'bg-slate-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-slate-700']">
                  Iniciar sesión</NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <NuxtLink href="/register"
                  :class="[active ? 'bg-slate-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-slate-700']">
                  Registrarse</NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <NuxtLink href="/help"
                  :class="[active ? 'bg-slate-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-slate-700']">Ayuda
                </NuxtLink>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

<DisclosurePanel class="sm:hidden">
  <div class="space-y-1 px-2 pt-2 pb-3">
    <template v-for="item in navigation" :key="item.name">
      <!-- Servicios con submenu en mobile -->
      <Disclosure v-if="item.name === 'Servicios'" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100">
          {{ item.name }}
          <ChevronDownIcon :class="[open ? 'rotate-180 transform' : '', 'h-5 w-5 transition']" />
        </DisclosureButton>

        <DisclosurePanel class="space-y-1 pl-6">
          <a
            v-for="s in solutions"
            :key="s.name"
            :href="s.href"
            class="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
          >
            {{ s.name }}
          </a>
        </DisclosurePanel>
      </Disclosure>

      <!-- Items normales -->
      <DisclosureButton
        v-else
        as="a"
        :href="item.href"
        :class="[item.current ? 'bg-slate-100 text-slate-800' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-700',
          'block rounded-md px-3 py-2 text-base font-medium']"
        :aria-current="item.current ? 'page' : undefined"
      >
        {{ item.name }}
      </DisclosureButton>
    </template>
  </div>
</DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, CheckIcon, UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import logo from '../../assets/logos/logo.svg'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/vue/24/outline'

const solutions = [
  { name: 'Desarrollo de páginas web', description: 'Crea un sitio web que se adapte a tus necesidades', href: '#', icon: PlayCircleIcon },
  { name: 'Aplicaciones web completas', description: 'Cumple con todos tus requisitos', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Optimización SEO', description: 'Mejora tu visibilidad en motores de búsqueda', href: '#', icon: ChartPieIcon },
  { name: 'Mantenimiento y soporte', description: 'Mantén tu sitio web actualizado y seguro', href: '#', icon: ArrowPathIcon },
  { name: 'Seguridad y Autenticación', description: "Protege los datos de tus clientes", href: '#', icon: FingerPrintIcon },
  { name: 'Integraciones y APIs', description: 'Conecta con herramientas de terceros', href: '#', icon:  PhoneIcon },
  { name: 'Automatizaciones', description: 'Crea flujos de trabajo automatizados', href: '#', icon:  CheckIcon },
]

const navigation = [
  { name: 'Servicios', href: '', current: true },
  { name: 'Proyectos', href: '/proyectos', current: false },
  { name: 'Equipo', href: '/equipo', current: false },
  { name: 'Nosotros', href: '/nosotros', current: false },
]
</script>

<style></style>