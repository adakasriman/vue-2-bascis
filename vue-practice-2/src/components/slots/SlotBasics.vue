<template>
    <div>
      <slot name="title"></slot>
      <h1>I am the form helper code</h1>
      <slot name="text"></slot>
  
      <slot></slot>
      <!-- What ever code from between this component tags,
           that will appear in "<slot></slot>" position 
           multiple slots also can be passed from parent
      -->
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  </style>