<template>
  <div class="max-w-2xl w-full p-6 bg-gray-800 rounded-xl shadow-lg">
    <h1 class="text-2xl font-bold mb-4">Joel Santanês Translator</h1>
    <textarea
      v-model="inputText"
      class="w-full p-3 rounded bg-gray-700 text-white mb-4"
      rows="4"
      placeholder="Digite sua frase em português..."
    ></textarea>
    <button
      @click="translate"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-4"
    >
      Traduzir
    </button>
    <div v-if="outputText" class="bg-gray-700 p-3 rounded">
      <p>{{ outputText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import joelify from './joelify'

const inputText = ref('')
const outputText = ref('')

function translate() {
  // Mock: usa o próprio texto como se fosse traduzido e Joelizado
  const fakeTranslated = inputText.value // Aqui usaria API do Google Translate
  outputText.value = joelify(fakeTranslated)
}
</script>
