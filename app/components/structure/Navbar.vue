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
          <div class="hidden sm:ml-6 md:block self-center">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'bg-slate-100 text-slate-800' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-700', 'transition duration-150 ease-in-out rounded-md px-3 py-2 text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="hidden sm:ml-6 absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Menu as="div" class="relative ml-3">
            <MenuButton
              class="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">Open user menu</span>
              <UserCircleIcon class="mr-1.5 -ml-0.5 size-8" aria-hidden="true" />

              <!-- <img class="size-8 rounded-full bg-slate-800 outline -outline-offset-1 outline-white/10"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" /> -->
            </MenuButton>

            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5">
                <MenuItem v-slot="{ active }">
                <NuxtLink href="/login"
                  :class="[active ? 'bg-slate-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-slate-700']">Iniciar sesión</NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <NuxtLink href="/register"
                  :class="[active ? 'bg-slate-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-slate-700']">Registrarse</NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <NuxtLink href="/help"
                  :class="[active ? 'bg-slate-100 outline-hidden' : '', 'block px-4 py-2 text-sm text-slate-700']">Ayuda</NuxtLink>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-slate-900 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, CheckIcon, UserCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import logo from '../../assets/logos/logo.svg'

const navigation = [
  { name: 'Servicios', href: '#', current: true },
  { name: 'Proyectos', href: '#', current: false },
  { name: 'Equipo', href: '#', current: false },
  { name: 'Nosotros', href: '#', current: false },
]
</script>

<style></style>